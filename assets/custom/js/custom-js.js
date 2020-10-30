$(document).ready(function(){
    $("#gallery-nav").click(function() {
        $('html,body').animate({
            scrollTop: $(".gallery").offset().top},
            'medium');
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-new").style.top = "0";
    } else {
        document.getElementById("navbar-new").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    }
  });