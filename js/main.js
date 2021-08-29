$(document).ready(function(){

  $(".nav li a").click(function (e) {
    e.preventDefault();
    $("body , html").animate(
      {
        scrollTop: $($.attr(this , 'href')).offset().top
      }, 700);
  });

  $(".burger-container").click(function(){
    $(".navlist").toggleClass("drop");
    $(this).toggleClass("close");
  });
});

window.addEventListener("scroll", function(){
  var nav = document.querySelector(".nav");

  if(window.scrollY > 0 && window.screen.width > 1024){
    nav.classList.add("stick");
  } else{
    nav.classList.remove("stick");

  }

});


