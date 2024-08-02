const rwd = document.querySelector(".rwd");
const btnOpen = document.querySelector(".ri-menu-3-line");
btnOpen.addEventListener("click", function () {
  rwd.classList.remove("hidden");
});
const btnClose = document.querySelector(".cross");
btnClose.addEventListener("click", function () {
  rwd.classList.add("hidden");
});
const close = document.querySelector(".close");
const close1 = document.querySelector(".close1");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");
const close4 = document.querySelector(".close4");
const close5 = document.querySelector(".close5");
close.addEventListener("click", function () {
  rwd.classList.add("hidden");
});
close1.addEventListener("click", function () {
  rwd.classList.add("hidden");
});
close2.addEventListener("click", function () {
  rwd.classList.add("hidden");
});
close3.addEventListener("click", function () {
  rwd.classList.add("hidden");
});
close4.addEventListener("click", function () {
  rwd.classList.add("hidden");
});
close5.addEventListener("click", function () {
  rwd.classList.add("hidden");
});
