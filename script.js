document.addEventListener('DOMContentLoaded', function () {
    // Certificate slider will be initialized lazily when the certificate panel is shown
    let certificateSliderInitialized = false;
    let slider = null;
    let sliderContainer = null;
    let descriptions = [];
    let nextBtn = null;
    let prevBtn = null;
    let originalSlides = [];
    let slides = [];
    let currentIndex = 1;
    let isTransitioning = false;
    let dots = [];
    let autoPlayTimer = null;

    const AUTO_PLAY_INTERVAL = 4000; // ms

    function updateActiveDot(index) {
        if (!dots || dots.length === 0) return;
        const originalsCount = originalSlides.length || 1;
        let mapped = (index - 1) % originalsCount;
        if (mapped < 0) mapped += originalsCount;
        dots.forEach((d, i) => d.classList.toggle('active', i === mapped));
    }

    function initCertificateSlider() {
        if (certificateSliderInitialized) return;
        slider = document.querySelector('#certificate-panel .slider');
        if (!slider) return; // nothing to init
        sliderContainer = slider.closest('.slider-container');
        descriptions = Array.from(document.querySelectorAll('#certificate-panel .description'));
        nextBtn = document.getElementById('next');
        prevBtn = document.getElementById('prev');

        originalSlides = Array.from(slider.querySelectorAll('.slide'));
        if (!originalSlides || originalSlides.length === 0) return;

        // Clone first and last slide to enable seamless directional looping
        const firstClone = originalSlides[0].cloneNode(true);
        const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
        firstClone.classList.add('clone');
        lastClone.classList.add('clone');
        slider.appendChild(firstClone);
        slider.insertBefore(lastClone, slider.firstChild);

        // Recompute slides list (now includes clones)
        slides = Array.from(slider.querySelectorAll('.slide'));

        // Start at index 1 (first real slide after the prepended lastClone)
        currentIndex = 1;
        isTransitioning = false;

        // Ensure slider has correct initial transform (show first real slide)
        slider.style.transform = `translateX(${ -currentIndex * 100 }%)`;

        // Helper to update descriptions (map carousel index to original index)
        function updateDescriptionsFor(index) {
            const originalsCount = originalSlides.length;
            let mapped = (index - 1) % originalsCount;
            if (mapped < 0) mapped += originalsCount;
            descriptions.forEach((d, i) => d.classList.toggle('active', i === mapped));
        }

        // Move carousel to given slides-array index with transition
        function moveTo(index) {
            if (isTransitioning) return;
            isTransitioning = true;
            const slidesCount = slides.length;
            const target = Math.max(0, Math.min(index, slidesCount - 1));
            currentIndex = target;
            slider.style.transition = 'transform 0.6s ease-in-out';
            slider.style.transform = `translateX(${ -currentIndex * 100 }%)`;
            updateDescriptionsFor(currentIndex);
        }

        // Next / Prev handlers
        if (nextBtn) nextBtn.addEventListener('click', () => moveTo(currentIndex + 1));
        if (prevBtn) prevBtn.addEventListener('click', () => moveTo(currentIndex - 1));

        // Dots indicators
        const dotsContainer = document.getElementById('slider-dots');
        dots = [];
        if (dotsContainer) {
            originalSlides.forEach((_, i) => {
                const btn = document.createElement('button');
                btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
                btn.setAttribute('role', 'tab');
                btn.addEventListener('click', () => moveTo(i + 1));
                btn.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        moveTo(i + 1);
                    }
                });
                dotsContainer.appendChild(btn);
                dots.push(btn);
            });
        }

        // Autoplay
        autoPlayTimer = setInterval(() => moveTo(currentIndex + 1), AUTO_PLAY_INTERVAL);

        // Pause autoplay on hover and resume on leave
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => {
                if (autoPlayTimer) { clearInterval(autoPlayTimer); autoPlayTimer = null; }
            });
            sliderContainer.addEventListener('mouseleave', () => {
                if (!autoPlayTimer) autoPlayTimer = setInterval(() => moveTo(currentIndex + 1), AUTO_PLAY_INTERVAL);
            });
        }

        // Pause autoplay during user interaction (drag/touch/keyboard) and resume after
        function pauseAutoplay() {
            if (autoPlayTimer) { clearInterval(autoPlayTimer); autoPlayTimer = null; }
        }
        function resumeAutoplay() {
            if (!autoPlayTimer) autoPlayTimer = setInterval(() => moveTo(currentIndex + 1), AUTO_PLAY_INTERVAL);
        }

        // Keyboard navigation (left/right)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') moveTo(currentIndex + 1);
            if (e.key === 'ArrowLeft') moveTo(currentIndex - 1);
        });

        // After transition ends, if we landed on a clone, jump to the corresponding real slide WITHOUT animation
        slider.addEventListener('transitionend', () => {
            slides = Array.from(slider.querySelectorAll('.slide'));
            const lastIndex = slides.length - 1;
            if (currentIndex > lastIndex) currentIndex = lastIndex;
            if (currentIndex < 0) currentIndex = 0;
            if (slides[currentIndex] && slides[currentIndex].classList.contains('clone')) {
                if (currentIndex === 0) {
                    slider.style.transition = 'none';
                    currentIndex = originalSlides.length;
                    slider.style.transform = `translateX(${ -currentIndex * 100 }%)`;
                    updateDescriptionsFor(currentIndex);
                } else if (currentIndex === lastIndex) {
                    slider.style.transition = 'none';
                    currentIndex = 1;
                    slider.style.transform = `translateX(${ -currentIndex * 100 }%)`;
                    updateDescriptionsFor(currentIndex);
                }
            }
            isTransitioning = false;
            updateActiveDot(currentIndex);
            const announcer = document.getElementById('sr-announcer');
            if (announcer) {
                const originalsCount = originalSlides.length;
                let mapped = (currentIndex - 1) % originalsCount;
                if (mapped < 0) mapped += originalsCount;
                const desc = descriptions[mapped];
                if (desc) announcer.textContent = desc.querySelector('h3') ? desc.querySelector('h3').textContent : `Slide ${mapped + 1}`;
            }
        });

        // Swipe / drag support (touch + mouse)
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        function onDragStart(x) {
            pauseAutoplay();
            isDragging = true;
            startX = x;
            slider.style.transition = 'none';
        }
        function onDragMove(x) {
            if (!isDragging) return;
            currentX = x;
            const dx = currentX - startX;
            const width = slider.offsetWidth || slider.clientWidth || 1;
            const deltaPercent = (dx / width) * 100;
            slider.style.transform = `translateX(${ -currentIndex * 100 + deltaPercent }%)`;
        }
        function onDragEnd() {
            if (!isDragging) return;
            isDragging = false;
            const dx = currentX - startX;
            const width = slider.offsetWidth || slider.clientWidth || 1;
            const threshold = Math.max(50, width * 0.15);
            if (dx < -threshold) {
                moveTo(currentIndex + 1);
            } else if (dx > threshold) {
                moveTo(currentIndex - 1);
            } else {
                slider.style.transition = 'transform 0.3s ease-in-out';
                slider.style.transform = `translateX(${ -currentIndex * 100 }%)`;
                setTimeout(() => { isTransitioning = false; }, 300);
            }
            resumeAutoplay();
        }
        slider.addEventListener('touchstart', (e) => onDragStart(e.touches[0].clientX), {passive: true});
        slider.addEventListener('touchmove', (e) => onDragMove(e.touches[0].clientX), {passive: true});
        slider.addEventListener('touchend', () => onDragEnd());
        slider.addEventListener('mousedown', (e) => { e.preventDefault(); onDragStart(e.clientX); });
        window.addEventListener('mousemove', (e) => onDragMove(e.clientX));
        window.addEventListener('mouseup', () => onDragEnd());

        certificateSliderInitialized = true;
    }

    // Scroll reveal animation
    const revealables = document.querySelectorAll('.revealable');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    revealables.forEach(element => {
        revealObserver.observe(element);
    });

    // Navigation active link highlighting
    // Observe main article sections plus the moved panels so nav link highlighting works
    const sections = document.querySelectorAll('article[id], #software-info-panel, #certificate-panel');
    const navLinks = document.querySelectorAll('nav a');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    });

    sections.forEach(section => {
        navObserver.observe(section);
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Combined content tab switching (Projects / Tech / Certificates)
    const combinedButtons = document.querySelectorAll('.combined-btn');
    const panels = document.querySelectorAll('.combined-panel .panel');

    function switchCombined(targetId) {
        // Toggle internal panels inside combined-panel only
        panels.forEach(p => {
            const isTarget = p.id === targetId;
            p.classList.toggle('active', isTarget);
            if (isTarget) p.removeAttribute('hidden'); else p.setAttribute('hidden', '');
        });
        combinedButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-target') === targetId;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        // ensure the combined content is visible in viewport
        const combined = document.getElementById('combined-content');
        if (combined) combined.scrollIntoView({ behavior: 'smooth' });

        // If certificate panel requested, initialize the certificate slider lazily
        if (targetId === 'certificate-panel') {
            initCertificateSlider();
            // after init, ensure dots/transform are correct
            if (certificateSliderInitialized) updateActiveDot(currentIndex);
        }
    }

    combinedButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = btn.getAttribute('data-target');
            if (target) switchCombined(target);
        });
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const target = btn.getAttribute('data-target');
                if (target) switchCombined(target);
            }
        });
    });

    // Home -> Portfolio button: open Projects panel and scroll down when clicked
    const homePortfolioBtn = document.querySelector('.home-buttons a[href="#combined-content"]');
    if (homePortfolioBtn) {
        homePortfolioBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Activate Projects panel inside combined content
            switchCombined('projects');
            // Smooth scroll to combined section
            const combined = document.getElementById('combined-content');
            if (combined) combined.scrollIntoView({ behavior: 'smooth' });
        });
    }
});