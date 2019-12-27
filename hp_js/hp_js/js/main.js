

// ハンバーガメニュー

$("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".menu-content").toggleClass("open");
});

//アコーディオンメニュー
const child = ".child";

$(child).hide();
$("#menu > li").hover(function () {
    $(child, this).stop().slideDown(300);
}, function () {
    $(child, this).stop().slideUp(300);
});

//topへ戻るボタン
$('#top-btn').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});

//スムーススクロール
$(function () {
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass('scrollIn');
            }
        });
    });
});