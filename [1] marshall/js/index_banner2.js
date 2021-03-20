$(document).ready(function () {

    var myArray = ["01", "01", "02", "03"];


    var swiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + myArray[index + 1] + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $(".swiper-container").each(function (elem, target) {
        var swp = target.swiper;
        $(".banner-video, .banner-goods-text button").hover(function () {
            swp.autoplay.stop();
        }, function () {
            swp.autoplay.start();
        });
    });




});
