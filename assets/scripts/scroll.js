let containers = document.querySelectorAll('container');
let lines = document.querySelectorAll('.header_nav-line');
let slider = document.querySelector('.wrapper_align');
lines[0].style.transform = "scaleX(1)";

window.addEventListener("scroll", contentScroll);

function contentScroll() {
    for (let i = 0; i < containers.length; i++) {
        const container = containers[i];
        const line = lines[i];
        let containerTop = container.getBoundingClientRect().top - 300;
        let containerHeight = container.offsetHeight + containerTop;

        if (containerTop < 1 && containerHeight > 1) {
            line.style.transform = "scaleX(1)"
        } else {
            line.style.transform = "scaleX(0)"
        }
        if (containerTop < 1 && i == 1){
            slider.style.transform = "translateY(0)";
            slider.style.opacity = "1";
        } else if (containerTop > 1 && i == 1){
            slider.style.transform = "translateY(50px)";
            slider.style.opacity = "0";
        }
    }
}

let headerLogo = document.querySelector('.header_logo');
let headerNav = document.querySelector('.header_nav');
let isNavOpen = false; 

headerLogo.addEventListener('click', logoFunction)

function logoFunction () {
    let windowWidth = window.innerWidth;
    if (isNavOpen == true && windowWidth <= 800) {
        headerNav.style.transform = 'translateX(0vw)'
        isNavOpen = false;

    } else if (isNavOpen == false && windowWidth <= 800) {
        headerNav.style.transform = 'translateX(-80vw)'
        isNavOpen = true;
    } else {
        headerNav.style.transform = ''
        isNavOpen = false;
    }
}