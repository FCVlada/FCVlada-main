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