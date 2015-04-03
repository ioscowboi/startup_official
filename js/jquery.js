

$(document).ready(function(){

    // hide #go-top first
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
    
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 900);
        return false;
    });

});
