$(document).ready(function () {


    var swiper = new Swiper('.swiper-section02-banner', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    });

});
