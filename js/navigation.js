document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".nav").classList.toggle("active");
  document.querySelector(".burger").classList.toggle("active");
});

const nav = document.querySelector(".header");
const mainContent = document.querySelector(".main");
const navOffset = 50;

window.addEventListener("scroll", () => {
  if (window.scrollY > navOffset) {
    nav.classList.add("fixed");
    mainContent.style.marginTop = "150px";
  } else {
    nav.classList.remove("fixed");
    mainContent.style.marginTop = "0px";
  }
});
