//Selectors
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("menu-open");
});

window.addEventListener("scroll", () => {
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("active", windowPosition);
});
