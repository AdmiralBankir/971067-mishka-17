var popup_open_btn = document.querySelectorAll(".btn-popup-open");
var popup_close_btn = document.querySelector(".btn-popup-close");

var pop_up =  document.querySelector(".popup");

var overlay = document.querySelector(".overlay");

for (var i = 0; i < popup_open_btn.length; ++i ) {

  popup_open_btn[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    pop_up.classList.add("popup--show");
    overlay.classList.add("overlay--active");
  })

}

popup_close_btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  pop_up.classList.remove("popup--show");
  overlay.classList.remove("overlay--active");
})
