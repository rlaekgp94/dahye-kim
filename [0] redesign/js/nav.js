$(document).ready(function(){
    
//고정메뉴    
   $(window).scroll(function(){
        if($(this).scrollTop() > 80){
           $(".nav-wrap").addClass("fixed1");  
        }else{
           $(".nav-wrap").removeClass("fixed1");
        }
    });
    
    
    //top버튼
    $(".top-btn").click(function(){
        $("html,body").stop().animate({scrollTop:0},1500,"easeOutQuart");
    });
    
    
});
