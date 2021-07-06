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

// -------- project --------

const leftBtn = document.querySelector(".sidearea--left button");
const rightBtn = document.querySelector(".sidearea--right button");

window.addEventListener("scroll", sideBtnDisappear);

function sideBtnDisappear() {
  if (window.scrollY > 200) {
    leftBtn.style.opacity = 1 - window.scrollY / 400;
    rightBtn.style.opacity = 1 - window.scrollY / 400;
  } else if (window.scrollY < 10) {
    leftBtn.style.opacity = 1;
    rightBtn.style.opacity = 1;
  }
}
const leftArea = document.querySelector(".sidearea--left");
const rightArea = document.querySelector(".sidearea--right");

leftArea.addEventListener("mouseover", leftBtnAppear);
leftArea.addEventListener("mouseout", leftBtnDisappear);
rightArea.addEventListener("mouseover", rightBtnAppear);
rightArea.addEventListener("mouseout", rightBtnDisappear);

function leftBtnAppear() {
  leftBtn.style.opacity = 1;
}
function leftBtnDisappear() {
  if (window.scrollY > 10) leftBtn.style.opacity = 0;
}
function rightBtnAppear() {
  rightBtn.style.opacity = 1;
}
function rightBtnDisappear() {
  if (window.scrollY > 10) rightBtn.style.opacity = 0;
}

// project when img  clicked

const projectImgs = document.querySelectorAll(".project-img");
const windoWidth = window.innerWidth;
let getLatestOpenedImg;

if (projectImgs) {
  projectImgs.forEach((img, index) => {
    img.addEventListener("click", () => {
      const getCss = window.getComputedStyle(img);
      const getImgUrl = getCss.getPropertyValue("background-image");
      const imgUrl = getImgUrl.split("src/prejectSrc/dungji/");
      const setNewUrl = imgUrl[1].replace('")', "");

      getLatestOpenedImg = index + 1;

      const container = document.body;
      const newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      const newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "src/prejectSrc/dungji/" + setNewUrl);
      newImg.setAttribute("id", "current-img");

      newImg.onload = function () {
        const newPrevBtn = document.createElement("button");
        const btnPrevImg = document.createElement("img");
        btnPrevImg.src = "./src/prejectSrc/next_arrow.png";
        newPrevBtn.appendChild(btnPrevImg);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(1)");

        const newNextBtn = document.createElement("button");
        const btnNextImg = document.createElement("img");
        btnNextImg.src = "./src/prejectSrc/next_arrow.png";
        newNextBtn.appendChild(btnNextImg);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(0)");
      };
    });
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-prev").remove();
  document.querySelector(".img-btn-next").remove();
}

function changeImg(changeDir) {
  document.querySelector("#current-img").remove();

  const getImgWindow = document.querySelector(".img-window");
  const newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if (changeDir == 1) {
    calcNewImg = getLatestOpenedImg + 1;
    if (calcNewImg > projectImgs.length) {
      calcNewImg = 1;
    }
  } else {
    calcNewImg = getLatestOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = projectImgs.length;
    }
  }

  newImg.setAttribute("src", "src/prejectSrc/dungji/" + calcNewImg + ".png");
  newImg.setAttribute("id", "current-img");

  getLatestOpenedImg = calcNewImg;
}
