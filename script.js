const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navbar = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
  navbar.classList.add("active");
  // window.onscroll = function () {
  //   window.scrollTo(0, 0);
  // };
});
closeBtn.addEventListener("click", function () {
  navbar.classList.remove("active");
});
