const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");
menu.addEventListener("click", function () {
  nav.classList.toggle("r-nav");
});
close.addEventListener("click", function () {
  nav.classList.toggle("r-nav");
});

const li1 = document.querySelector(".js-close1");
const li2 = document.querySelector(".js-close2");
const li3 = document.querySelector(".js-close3");
const li4 = document.querySelector(".js-close4");
const li5 = document.querySelector(".js-close5");
const li6 = document.querySelector(".js-close6");

li1.addEventListener("click", function () {
  nav.classList.remove("r-nav");
});
li2.addEventListener("click", function () {
  nav.classList.remove("r-nav");
});
li3.addEventListener("click", function () {
  nav.classList.remove("r-nav");
});
li4.addEventListener("click", function () {
  nav.classList.remove("r-nav");
});
li5.addEventListener("click", function () {
  nav.classList.remove("r-nav");
});
li6.addEventListener("click", function () {
  nav.classList.remove("r-nav");
});
