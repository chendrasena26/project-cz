window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        $('.navbar-new').fadeOut();
    }
    else {
        $('.navbar-new').fadeIn();
    }
},false);