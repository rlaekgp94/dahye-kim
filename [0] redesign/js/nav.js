$(document).ready(function(){
    
    //고정메뉴    
//   $(window).scroll(function(){
//        if($(this).scrollTop() > 60){
//           $("#top_line,#main_menu").addClass("fixed1");
//        $(".n_bg").css("top","80px");    
//        }else{
//           $("#top_line,#main_menu").removeClass("fixed1");
//            $(".n_bg").css("top","80px");    
//        }
//    });
    
    //top버튼
//    $(".top_btn").click(function(){
//        $("html,body").stop().animate({scrollTop:0},1500,"easeOutQuart");
//    });
    
    
    //하위메뉴 보이기/숨기기
    $(".submenu").hide();
    $(".nav-menu > li").hover(function(){
        $(this).children("ul").show();
        $(".n_bg").show();
    },function(){
        $(this).children("ul").hide();
        $(".n_bg").hide();
    });
    
    //태그 추가
    $(".nav-wrap").before("<p class='n_bg'></p>");
    
    //추가된 태그 보이기/숨기기
    $(".n_bg").hide();
    
    
});