// -------- Roader --------
window.addEventListener("load",
    function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    })

// Logo Elipse Size
function Init() {
    let w = window.innerWidth;
    let h = window.innerHeight * 0.8;
    ellipse.setAttributeNS(null, "viewBox", `0 0 ${w/0.65}  ${h/0.65}`);
    let d = `M${9 * w / 10},${h / 2}
  A${4 * w / 10},${4 * h / 10} 0 0 1 ${w / 10} ${5 * h / 10}
  A${4 * w / 10},${4 * h / 10} 0 0 1 ${9 * w / 10} ${5 * h / 10} 
  A${4 * w / 10},${4 * h / 10} 0 0 1 ${w / 10} ${5 * h / 10} 
  A${4 * w / 10},${4 * h / 10} 0 0 1 ${9 * w / 10} ${5 * h / 10} `;
    thePath.setAttributeNS(null, "d", d);

    // Font size
    let paths_length = thePath.getTotalLength();
    text.style.fontSize = paths_length / 94;
}
window.setTimeout(function () {
    Init();
    window.addEventListener("resize", Init, false);
}, 15);
        

// Logo Text Rotate
let startText = 0;
function textRotate() {
    requestAnimationFrame(textRotate);
    text.setAttributeNS(null, "startOffset", startText + "%");
    if (startText >= 50) {
        startText = 0;
    }
    startText += 0.02;
}

textRotate();

// -------- index --------

