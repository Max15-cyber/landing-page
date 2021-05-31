// slider
const slide = document.querySelectorAll('.slide');
const slides = document.getElementById('slides');
const arrowPrev = document.getElementById('arrow-prev');
const arrowNext = document.getElementById('arrow-next');
const toggleRadio = document.getElementById('toggle-radio');
const toggleInput = toggleRadio.querySelectorAll('input')
const slideMini = document.querySelectorAll('.slide-mini')
const slidesMini = document.getElementById('slides-mini')



let slideTime = 2000;
let currentSlide = 0;
let slideInterval;



function continueSlideInterval() {
    slideInterval = setInterval(nextSlide, slideTime);
}
function nextSlide() {
    slideReset();
    currentSlide = ++currentSlide % slide.length;
    slideSet();
}
function stopSlide() {
    clearInterval(slideInterval);
}
function slideReset() {
    slide[currentSlide].className = 'slide';
    slideMini[currentSlide].className = 'slide-mini'
}
function slideSet() {
    slide[currentSlide].className = 'slide showing';
    toggleInput[currentSlide].checked = true;
    slideMini[currentSlide].className = 'slide-mini showing-mini'
}
function showNextSlide() {
    stopSlide();
    nextSlide();
}
function prevSlide() {
    slideReset();
    currentSlide = (currentSlide == 0) ? slide.length - 1 : currentSlide - 1;
    slideSet();
}
function showPrevSlide() {
    stopSlide();
    prevSlide();
}
function toggleSlide(event) {
    stopSlide();
    slideReset();
    currentSlide = event.target.value;
    slideSet();
}
function toggleMiniSlide(event) {
    if (event.target.tagName === 'IMG') {
        stopSlide();
        slideReset();
        currentSlide = event.target.dataset.id;
        slideSet();
    }

}



continueSlideInterval();
slides.addEventListener('mouseover', stopSlide);
slides.addEventListener('mouseout', continueSlideInterval);
arrowNext.addEventListener('click', showNextSlide);
arrowPrev.addEventListener('click', showPrevSlide);
toggleRadio.addEventListener('input', toggleSlide);
slidesMini.addEventListener('click', toggleMiniSlide);

