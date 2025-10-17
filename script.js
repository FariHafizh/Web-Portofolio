document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider-container');
    const descriptions = Array.from(document.querySelectorAll('.description'));
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    // Convert NodeList of original slides to array
    const originalSlides = Array.from(slider ? slider.querySelectorAll('.slide') : []);
    if (!slider || originalSlides.length === 0) return; // nothing to do

    // Clone first and last slide to enable seamless directional looping
    const firstClone = originalSlides[0].cloneNode(true);
    const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
    firstClone.classList.add('clone');
    lastClone.classList.add('clone');
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slider.firstChild);

    // Recompute slides list (now includes clones)
    let slides = Array.from(slider.querySelectorAll('.slide'));

    // Start at index 1 (first real slide after the prepended lastClone)
    let currentIndex = 1;
    let isTransitioning = false;

    // Ensure slider has correct initial transform (show first real slide)
    slider.style.transform = `translateX(${ -currentIndex * 100 }%)`;

    // Helper to update descriptions (map carousel index to original index)
    function updateDescriptionsFor(index) {
        // map index in slides array to originalSlides index
        const originalsCount = originalSlides.length;
        // real slides are at positions 1..originalsCount
        let mapped = (index - 1) % originalsCount;
        if (mapped < 0) mapped += originalsCount;
        descriptions.forEach((d, i) => d.classList.toggle('active', i === mapped));
    }

    // Move carousel to given slides-array index with transition
    function moveTo(index) {
        // prevent queueing multiple transitions
        if (isTransitioning) return;
        isTransitioning = true;

        // clamp target index within available slides range to avoid out-of-bounds
        const slidesCount = slides.length;
        const target = Math.max(0, Math.min(index, slidesCount - 1));
        currentIndex = target;

        // ensure transition is enabled
        slider.style.transition = 'transform 0.6s ease-in-out';
        slider.style.transform = `translateX(${ -currentIndex * 100 }%)`;
        updateDescriptionsFor(currentIndex);
    }

    // Next / Prev handlers
    if (nextBtn) nextBtn.addEventListener('click', () => moveTo(currentIndex + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => moveTo(currentIndex - 1));

    // Autoplay
    const AUTO_PLAY_INTERVAL = 4000; // ms
    let autoPlayTimer = setInterval(() => moveTo(currentIndex + 1), AUTO_PLAY_INTERVAL);

    // Pause autoplay on hover and resume on leave
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            if (autoPlayTimer) { clearInterval(autoPlayTimer); autoPlayTimer = null; }
        });
        sliderContainer.addEventListener('mouseleave', () => {
            if (!autoPlayTimer) autoPlayTimer = setInterval(() => moveTo(currentIndex + 1), AUTO_PLAY_INTERVAL);
        });
    }

    // Keyboard navigation (left/right)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') moveTo(currentIndex + 1);
        if (e.key === 'ArrowLeft') moveTo(currentIndex - 1);
    });

    // After transition ends, if we landed on a clone, jump to the corresponding real slide WITHOUT animation
    slider.addEventListener('transitionend', () => {
        // Recompute slides in case DOM changed
        slides = Array.from(slider.querySelectorAll('.slide'));
        const lastIndex = slides.length - 1;

        // clamp currentIndex to valid bounds to avoid errors when user clicked rapidly
        if (currentIndex > lastIndex) currentIndex = lastIndex;
        if (currentIndex < 0) currentIndex = 0;

        // If we're at a clone, jump to the corresponding real slide without animation
        if (slides[currentIndex] && slides[currentIndex].classList.contains('clone')) {
            // if at first element (lastClone clone), jump to last real slide
            if (currentIndex === 0) {
                slider.style.transition = 'none';
                currentIndex = originalSlides.length;
                slider.style.transform = `translateX(${ -currentIndex * 100 }%)`;
                updateDescriptionsFor(currentIndex);
            }
            // if at last element (firstClone clone), jump to first real slide
            else if (currentIndex === lastIndex) {
                slider.style.transition = 'none';
                currentIndex = 1;
                slider.style.transform = `translateX(${ -currentIndex * 100 }%)`;
                updateDescriptionsFor(currentIndex);
            }
        }

        // allow next transition
        isTransitioning = false;
    });

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
    const sections = document.querySelectorAll('article[id]');
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
});