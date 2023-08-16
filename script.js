const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navbar = document.querySelector(".my-navbar-nav");
hamburger.addEventListener("click", function () {
  navbar.classList.add("my-active");
  // window.onscroll = function () {
  //   window.scrollTo(0, 0);
  // };
});
closeBtn.addEventListener("click", function () {
  navbar.classList.remove("my-active");
});







