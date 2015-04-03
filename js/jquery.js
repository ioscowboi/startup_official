// // Smooth scroll for in page links
// $(function(){
//     var target, scroll;
//
//     $("a[href*=#]:not([href=#])").on("click", function(e) {
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//             target = $(this.hash);
//             target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");
//
//             if (target.length) {
//                 if (typeof document.body.style.transitionProperty === 'string') {
//                     e.preventDefault();
//
//                     var avail = $(document).height() - $(window).height();
//
//                     scroll = target.offset().top;
//
//                     if (scroll > avail) {
//                         scroll = avail;
//                     }
//
//                     $("html").css({
//                         "margin-top" : ( $(window).scrollTop() - scroll ) + "px",
//                         "transition" : "1s ease-in-out"
//                     }).data("transitioning", true);
//                 } else {
//                     $("html, body").animate({
//                         scrollTop: scroll
//                     }, 1000);
//                     return;
//                 }
//             }
//         }
//     });
//
//     $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function (e) {
//         if (e.target == e.currentTarget && $(this).data("transitioning") === true) {
//             $(this).removeAttr("style").data("transitioning", false);
//             $("html, body").scrollTop(scroll);
//             return;
//         }
//     });
// });


$(document).ready(function(){

    // hide #back-top first
    $(".go-top").hide();
 
    // fade in #back-top
    $(function () { 
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.go-top').fadeIn();
            } else {
                $('.go-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('.go-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });

});