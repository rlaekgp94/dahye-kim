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
    
    //아티스트 슬라이드
     var width1=400*$(".stories-slide li").size()+"px";
    $(".stories-slide").css("width",width1);
    $(".stories-slide li:last").prependTo(".stories-slide");
    $(".stories-slide").css("margin-left","-400px");
    
    
});

    function stories(){
    $(".stories-slide")
        .animate({marginLeft:parseInt($(".stories-slide").css("margin-left"))-400+"px"},"slow",function(){
     $(".stories-slide li:first").appendTo(".stories-slide");
        $(".stories-slide").css("margin-left","-400px");
    });
}
setInterval("stories()",4000);
