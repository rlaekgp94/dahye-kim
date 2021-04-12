$(document).ready(function () {

    
    //서브메뉴
    $('.total').click(function () {

        $(this).toggleClass('on')
    });


    $('.total').click(function () {
        $('.sidebar-wrap').fadeToggle();
    });

    //서브메뉴 스크롤
    $('.sidebar-wrap').on('scroll touchmove mousewheel', function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    
    
    //top버튼
    $(".fixed-top-btn").click(function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 1500, "easeOutQuart");
    });
    
    



});
