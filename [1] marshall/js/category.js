$(document).ready(function () {

    $(window).scroll(function () {
        var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
        if (height > 0) {
            $('.category-wrap').addClass('fixinner');
        } else if (height == 0) {
            $('.category-wrap').removeClass('fixinner');
        }
    });


});
