// on scroll events

let navbar = document.querySelector(".navbar");
let nextSection = document.getElementById("services");

let skillScetion = document.querySelector(".skills");
let spans = document.querySelectorAll(".skill span");

window.onscroll = function () {
// change navbar background
    if (window.scrollY >= nextSection.offsetTop - 90) {
        navbar.style.backgroundColor = "#333"
        navbar.style.maxHeight = "80px"
    } else if (window.scrollY < nextSection.offsetTop) {
        navbar.style.backgroundColor = "transparent"
        navbar.style.maxHeight = "96px"
    }

//  Animate width on Scrolling
    if (window.scrollY >= skillScetion.offsetTop - 150) {
        spans.forEach((span) => {
            span.style.width = span.dataset.percent;
        })
    }
}
// ________________________________________________________________________________________

//  add active class for clicked link
let links = document.querySelectorAll("nav .links ul li");

links.forEach((li => {
    li.addEventListener("click", function () {
        links.forEach(link => {
            link.classList.remove("active")
        })
        li.classList.add("active");
    })
}))

// ________________________________________________________________________________________

// change header backgroundImage

let header = document.querySelector("header");
let bullets = document.querySelectorAll("header .bullets div");
let icons = document.querySelectorAll("header i");

let counter = setInterval(() => changeBackground(1), 5000);

icons[0].addEventListener("click", () => clickChange(1));
icons[1].addEventListener("click", () => clickChange(-1));

// stop old Interval => changeBackground => create new Interval
function clickChange(d) {
    clearInterval(counter);
    changeBackground(d);
    counter = setInterval(() => changeBackground(1), 5000);
}

function changeBackground(direction) {
    let bulletI = 0;
    bullets.forEach((bullet, index) => {
        if (bullet.classList.contains("active")) {
            bullet.classList.remove("active");
            bulletI = (index + 3 + direction) % 3;
        }
    });
    bullets[bulletI].classList.add("active");
    header.style.backgroundImage = `url("${bullets[bulletI].dataset.src}")`;
}

// ________________________________________________________________________________________
