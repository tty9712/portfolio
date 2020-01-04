

jQuery(document).ready(function($){


// ボタンで移動
$('#top-btn').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});

// ボタン消す
$(window).scroll(function () {
    $('#top-btn').each(function(){ 
        var scroll = $(window).scrollTop();
        if (scroll > 250) {
            $('#top-btn').show();
        } else {
            $('#top-btn').hide();
        }
    });
});

// スクロールで表示
$(window).scroll(function () {
    $('.fade').each(function(){
        var element = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var height = $(window).height();
        if (scroll > element - height + 200) {
            $(this).addClass('fadein');
        } else {
            $(this).removeClass('fadein');
        }
    });
});


// 開いたときフェードイン(about)
$('.ap-right,.ap-left').hide();

$('.ap-right').fadeIn(1200);

setTimeout(function(){
    $('.ap-left').fadeIn(1200);
},600);


// 開いたときフェードイン(event)
$('.ep-fade').addClass('ep-in');







});




