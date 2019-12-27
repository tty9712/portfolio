
$(function () {
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            console.log(elemPos);
            // console.log(scroll);
            // console.log(windowHeight);
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass('scrollIn');
            }
        });
    });
});



