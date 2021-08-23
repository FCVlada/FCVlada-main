let prev = document.querySelector('#prev'); /* Left button */
let next = document.querySelector('#next'); /* Right button */
let wrapper = document.querySelector('.wrapper_box'); /* Box with slides */ 
let count = 0;

let sliderInterval = setTimeout(nextFunction, 2500);

next.addEventListener('click', nextFunction);
function nextFunction() {
    clearTimeout(sliderInterval);
    sliderInterval = setTimeout(nextFunction, 2500);

    let windowWidth = window.innerWidth
    if (windowWidth <= 376) {
        num = 1
    } else if (windowWidth <= 801) {
        num = 2
    } else if (windowWidth <= 1201) {
        num = 3
    } else {
        num = 4
    }
    
    let slides = document.querySelectorAll('.wrapper_box-item').length - num;
    let slideWidth = document.querySelector('.wrapper_box-item').offsetWidth;
    if (count == -slides) {
        count = 0;
    } 
    else {
        count = count - 1;
    };
    wrapper.style.left = count * slideWidth + 'px';
}

prev.addEventListener('click', prevFunction);
function prevFunction() {
    clearTimeout(sliderInterval);
    sliderInterval = setTimeout(nextFunction, 2500);

    let windowWidth = window.innerWidth
    if (windowWidth <= 376) {
        num = 1
    } else if (windowWidth <= 801) {
        num = 2
    } else if (windowWidth <= 1201) {
        num = 3
    } else {
        num = 4
    }
    let slides = document.querySelectorAll('.wrapper_box-item').length - num;
    let slideWidth = document.querySelector('.wrapper_box-item').offsetWidth;
    if (count == 0) {
        count = -slides;
    } 
    else {
        count = count + 1;
    }
    wrapper.style.left = count * slideWidth + 'px'
}