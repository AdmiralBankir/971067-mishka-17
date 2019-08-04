var main_nav = document.querySelector(".main-nav");
var nav_toggle = document.querySelector(".main-nav__toggle");

main_nav.classList.remove("main-nav--nojs");

nav_toggle.addEventListener("click", function () {
  if(main_nav.classList.contains("main-nav--closed")) {
    main_nav.classList.remove("main-nav--closed");
    main_nav.classList.add("main-nav--opened");
  }
  else {
    main_nav.classList.add("main-nav--closed");
    main_nav.classList.remove("main-nav--opened");
  }
});
