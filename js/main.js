document.querySelector(".nav-btn").onclick = function () {
  document.querySelector("nav").classList.toggle("active");
};

// sticky nav bar
window.onscroll = function () {
  stickyNav();
};

let homeSection = document.querySelector(".home-section"),
  homeHeight = homeSection.scrollHeight,
  header = document.querySelector("header");

function stickyNav() {
  if (window.pageYOffset >= homeHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// adding active class
let links = document.querySelectorAll(".nav-item");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.parentElement.querySelectorAll(".clicked").forEach((clicked) => {
      clicked.classList.remove("clicked");
    });
    link.classList.add("clicked");
  });
});

let banner = document.querySelector(".cards"),
  nxtBtn = document.querySelector(".right"),
  prevBtn = document.querySelector(".left"),
  width = document.querySelector(".card").clientWidth;

nxtBtn.addEventListener("click", () => {
  banner.scrollBy({
    left: width + 40,
    top: 0,
    behavior: "smooth",
  });
});
prevBtn.addEventListener("click", () => {
  banner.scrollBy({
    left: -width - 40,
    top: 0,
    behavior: "smooth",
  });
});
