let parallaxInterval = setTimeout(autoParallax, 500)

document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.intro_particle').forEach(layer => {
        clearTimeout(parallaxInterval)
        let windowWidth = window.innerWidth
        if (windowWidth <= 376) {
            layer.style.transition = '0.3s';
        } else {
            layer.style.transition = '0s';
        }

        let speed = layer.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed)/100;
        let y = (window.innerHeight - e.pageY * speed)/100;

        console.log("x= " + x);
        console.log("y= " + y);
        
        layer.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
        parallaxInterval = setTimeout(autoParallax, 500)
    })
}


function autoParallax () {
    let randomX = Math.floor(Math.random() * 100);
    let randomY = Math.floor(Math.random() * 60);

    console.log('randomX ' + randomX);
    console.log('randomY ' + randomY);

    document.querySelectorAll('.intro_particle').forEach(layer => {
        layer.style.transition = '2s'
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = 'translateX(' + randomX * speed / 5 + 'px) translateY(' + randomY * speed / 5 + 'px)';
    
    })
    parallaxInterval = setTimeout(autoParallax, 1300)
}