const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navbar = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
  navbar.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  navbar.classList.remove("active");
});
