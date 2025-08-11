let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const descriptions = document.querySelectorAll('.description');
const totalSlides = slides.length;

document.querySelector('#next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('#prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function updateSlidePosition() {
    const sliderInner = document.querySelector('.slider-inner');
    sliderInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    descriptions.forEach((desc, index) => {
        desc.classList.remove('active');
        if (index === currentSlide) {
            desc.classList.add('active');
        }
    });
}

function moveToNextSlide() {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    updateSlidePosition();
}

descriptions[0].classList.add('active');
