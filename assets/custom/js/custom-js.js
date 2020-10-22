$(document).ready(function(){
    $("#gallery-nav").click(function() {
        $('html,body').animate({
            scrollTop: $(".gallery").offset().top},
            'medium');
    });
  });