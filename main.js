"use strict";

// Logo Elipse Size

const loader = document.querySelector(".loader");
let endOfLoading = false;

window.addEventListener("load", () => {
  Init();
  textRotate();
});

loader.addEventListener("transitionend", (e) => {
  document.body.removeChild(e.currentTarget);
});

function Init() {
  let w = window.innerWidth;
  let h = window.innerHeight * 0.8;
  ellipse.setAttributeNS(null, "viewBox", `0 0 ${w / 0.65}  ${h / 0.65}`);
  let d = `M${(9 * w) / 10},${h / 2}
  A${(4 * w) / 10},${(4 * h) / 10} 0 0 1 ${w / 10} ${(5 * h) / 10}
  A${(4 * w) / 10},${(4 * h) / 10} 0 0 1 ${(9 * w) / 10} ${(5 * h) / 10} 
  A${(4 * w) / 10},${(4 * h) / 10} 0 0ß 1 ${w / 10} ${(5 * h) / 10} 
  A${(4 * w) / 10},${(4 * h) / 10} 0 0 1 ${(9 * w) / 10} ${(5 * h) / 10} `;
  thePath.setAttributeNS(null, "d", d);

  // Font size
  let paths_length = thePath.getTotalLength();
  text.style.fontSize = paths_length / 50;
}

// Logo Text Rotate
let startText = 0;
let timer = null;

function textRotate() {
  if (!endOfLoading) {
    requestAnimationFrame(textRotate);
  }

  if (startText > 3.61) {
    endOfLoading = true;
    setTimeout(() => {
      document.body.classList.remove("before-load");
    }, 500);
  }

  text.setAttributeNS(null, "startOffset", startText + "%");
  if (startText >= 50) {
    startText = 0;
  }
  startText += 0.02;
}

//-------- navbar --------

// Navbar toggle button
const openBtn = document.querySelector(".nav__toggle-btn");
const closeBtn = document.querySelector(".nav__toggle-btn--off");
const navToggleOn = document.querySelector(".nav--on");
const navToggleOff = document.querySelector(".nav--off");
const downArrow = document.querySelector(".down-arrow");

openBtn.addEventListener("click", () => {
  navToggleOn.classList.toggle("hidden");
  navToggleOff.classList.toggle("hidden");
  downArrow.style.opacity = 0;
});
closeBtn.addEventListener("click", () => {
  navToggleOn.classList.toggle("hidden");
  navToggleOff.classList.toggle("hidden");
});

//When hover projects previews

const navOn = document.querySelector(".nav--on");
const about = document.querySelector(".menu .menu__item:nth-child(2)");
const categories = document.querySelectorAll(
  ".projects-category:not(:last-child)"
);
const previews = document.querySelectorAll(".projects-preview");
const previewSection = document.querySelector(".preview-section");

categories.forEach((category) =>
  category.addEventListener("mouseover", () => {
    navOn.classList.add("is-hover");
    about.classList.add("is-hover");
  })
);

categories.forEach((category) =>
  category.addEventListener("mouseout", () => {
    navOn.classList.remove("is-hover");
    about.classList.remove("is-hover");
  })
);

previews.forEach((preview) =>
  preview.addEventListener("mouseover", (hovered) => {
    navOn.classList.add("is-hover");
    about.classList.add("is-hover");
    hovered.target.src = hovered.target.src.replace("_b", "_c");
  })
);

previews.forEach((preview) =>
  preview.addEventListener("mouseout", (hovered) => {
    navOn.classList.remove("is-hover");
    about.classList.remove("is-hover");
    hovered.target.src = hovered.target.src.replace("_c", "_b");
  })
);

// -------- index --------

// Top & Down button function
const toTopBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", arrowDisappear);

toTopBtn.addEventListener("click", toTheTop);

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
