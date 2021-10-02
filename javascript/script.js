// changing main 
// !(function($) {
//     "use strict";
  
//     // Hero typed
//     if ($('.typed').length) {
//       var typed_strings = $(".typed").data('typed-items');
//       typed_strings = typed_strings.split(',')
//       new Typed('.typed', {
//         strings: typed_strings,
//         loop: true,
//         typeSpeed: 100,
//         backSpeed: 50,
//         backDelay: 2000
//       });
//     }});

// sticky nav bar
$(() => {

    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
        windowTop > 100 ? $('ul.nav-honey').css('top', '50px') : $('ul.nav-honey').css('top', '160px');
    });

});

//Get to the Top button:
mybutton = document.getElementById("myBtn");
// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
