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


//stories slide
var width1 = 400 * $(".stories-slide li").size() + "px";
$(".stories-slide").css("width", width1);
$(".stories-slide li:last").prependTo(".stories-slide");
$(".stories-slide").css("margin-left", "-400px");



function stories() {
    $(".stories-slide")
        .animate({
            marginLeft: parseInt($(".stories-slide").css("margin-left")) - 400 + "px"
        }, "slow", function () {
            $(".stories-slide li:first").appendTo(".stories-slide");
            $(".stories-slide").css("margin-left", "-400px");
        });
}
setInterval("stories()", 5000);



    
//    section01

$(document).on('scroll',function(){
    $('.text-animation01').css("left", Math.max(1000 - 0.7*window.scrollY) + "px");
})

$(document).on('scroll',function(){
    $('.text-animation03').css("right", Math.max(1000 - 0.7*window.scrollY) + "px");
})
