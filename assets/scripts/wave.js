let wave = document.querySelectorAll('.wave')
let waveInterval = setTimeout(waveFunction, 500)
let waveCount = 0

function waveFunction () {
    waveCount = waveCount + 500;
    wave[0].style.backgroundPositionX = waveCount + 'px';
    wave[1].style.backgroundPositionX = waveCount + 'px';
    setTimeout(waveFunction, 3500)
}
