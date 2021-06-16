// -------- loader --------
// window.addEventListener('load',
//     function () {
//         const loader = document.querySelector('.loader');
//         loader.className += 'hidden';
//     })

// Logo Elipse Size
function Init() {
    let w = window.innerWidth;
    let h = window.innerHeight * 0.8;
    ellipse.setAttributeNS(null, 'viewBox', `0 0 ${w/0.65}  ${h/0.65}`);
    let d = `M${9 * w / 10},${h / 2}
  A${4 * w / 10},${4 * h / 10} 0 0 1 ${w / 10} ${5 * h / 10}
  A${4 * w / 10},${4 * h / 10} 0 0 1 ${9 * w / 10} ${5 * h / 10} 
  A${4 * w / 10},${4 * h / 10} 0 0ß 1 ${w / 10} ${5 * h / 10} 
  A${4 * w / 10},${4 * h / 10} 0 0 1 ${9 * w / 10} ${5 * h / 10} `;
    thePath.setAttributeNS(null, 'd', d);

    // Font size
    let paths_length = thePath.getTotalLength();
    text.style.fontSize = paths_length / 50;
}
window.setTimeout(function () {
    Init();
    window.addEventListener('resize', Init, false);
}, 15);
        

// Logo Text Rotate
let startText = 0;
let timer = null;

function textRotate() {
    requestAnimationFrame(textRotate);
    text.setAttributeNS(null, 'startOffset', startText + '%');
    if (startText >= 50) {
        startText = 0;
    }
    startText += 0.02;
    console.log('stop');
}

textRotate()

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    setTimeout(fadeOut, 3000)
});

function fadeOut() {
    loader.style.transition = '0.8s';
    loader.style.opacity = 0;
    loader.style.display = 'none';
}

// -------- navbar --------


// Navbar toggle button
const navbarOpenBtn = document.querySelector('.nav__toggle-btn')
const navbarCloseBtn = document.querySelector('.nav__toggle-btn--off')
const navbarToggleOn = document.querySelector('.nav--on')
const navbarToggleOff = document.querySelector('.nav--off')
navbarOpenBtn.addEventListener('click', () => {
    navbarToggleOn.classList.toggle('hidden');
    navbarToggleOff.classList.toggle('hidden');
    downArrow.style.opacity = 0;
})
navbarCloseBtn.addEventListener('click', () => {
    navbarToggleOn.classList.toggle('hidden');
    navbarToggleOff.classList.toggle('hidden');
})


// -------- index --------

// Top & Down button function
const toTopBtn = document.querySelector('.top-btn')
const downArrow = document.querySelector('.down-arrow');

window.addEventListener('scroll', arrowDisappear);

toTopBtn.addEventListener('click', toTheTop);

function arrowDisappear() {
    if (window.scrollY > 200) {
        downArrow.style.opacity = 1 - window.scrollY / 400;
    } else if (window.scrollY < 10) {
        downArrow.style.opacity = 1;
    }

}

function toTheTop() {
    window.scrollTo(0, 0);
}
