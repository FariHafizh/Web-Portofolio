document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const descriptions = document.querySelectorAll('.description');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    let currentIndex = 0;

    function showSlide(newIndex) {
        // Hide the current slide and description
        slides[currentIndex].classList.remove('active');
        descriptions[currentIndex].classList.remove('active');

        // Calculate the new index, ensuring it wraps around correctly
        currentIndex = (newIndex + slides.length) % slides.length;

        // Show the new active slide and description
        slides[currentIndex].classList.add('active');
        descriptions[currentIndex].classList.add('active');
    }

    // Event listeners for next and previous buttons
    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));

    // Show the first slide initially
    showSlide(currentIndex);

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