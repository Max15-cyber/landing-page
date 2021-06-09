const modalForm = document.getElementById("modal-form");
const pushForm = document.getElementById('push-form')
function toggleModal() {
    modalForm.classList.toggle("d-none")
}
pushForm.addEventListener('click', toggleModal)


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


// плавный скроллинг по странице
const menu = document.getElementById('menu');


function scrollingTransition(e) {
    if (e.target.tagName === 'A' && e.target.id != 'home') {
        for(let i = 0; i < parent.length; i++){
            elem[i].className = 'elem'
        }
        e.preventDefault();
        const blockId = e.target.getAttribute('href');
        let id = document.querySelector(blockId)
        id.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

}


menu.addEventListener('click', scrollingTransition);



// Появление элементов при скроллинге
const parent = document.querySelectorAll('.parent');
const elem = document.querySelectorAll('.parent>.elem');


function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom > 0 && coords.bottom < windowHeight;
    return topVisible && bottomVisible;
}
function showVisible() {
    for (let i = 0; i < parent.length; i++) {
        if (isVisible(parent[i])) {
            elem[i].className = 'elem';
        }
    }

}


window.addEventListener('scroll', showVisible);