const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");
const li1 = document.querySelector(".js-close1");
const li2 = document.querySelector(".js-close2");
const li3 = document.querySelector(".js-close3");
const li4 = document.querySelector(".js-close4");
const li5 = document.querySelector(".js-close5");
const li6 = document.querySelector(".js-close6");
menu.addEventListener("click", function () {
  nav.style.display = "flex";
});
close.addEventListener("click", function () {
  nav.style.display = "none";
});
li1.addEventListener("click", function () {
  nav.style.display = "none";
});
li2.addEventListener("click", function () {
  nav.style.display = "none";
});
li3.addEventListener("click", function () {
  nav.style.display = "none";
});
li4.addEventListener("click", function () {
  nav.style.display = "none";
});
li5.addEventListener("click", function () {
  nav.style.display = "none";
});
li6.addEventListener("click", function () {
  nav.style.display = "none";
});
