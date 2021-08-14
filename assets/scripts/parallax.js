document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.intro_particle').forEach(layer => {
        let windowWidth = window.innerWidth
        if (windowWidth <= 376) {
            layer.style.transition = '0.3s';
        } else {
            layer.style.transition = '0s';
        }

        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed)/100;
        const y = (window.innerHeight - e.pageY * speed)/100;

        console.log("x= " + x);
        console.log("y= " + y);
        
        layer.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
    })
}