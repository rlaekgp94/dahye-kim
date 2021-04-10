$(document).ready(function(){
    
    //고정메뉴    
   $(window).scroll(function(){
        if($(this).scrollTop() > 80){
           $(".nav-wrap").addClass("fixed1");  
        }else{
           $(".nav-wrap").removeClass("fixed1");
        }
    });
    
    //탑,서치버튼 scroll시 fixed 
    $(window).scroll(function(){ 
    var height = $(document).scrollTop();
    if(height > 0){ 
      $('.fixed-btn').addClass('fixinner'); 
    }else if(height == 0){ 
      $('.fixed-btn').removeClass('fixinner'); 
    } 
  });
    
    //top버튼
    $(".top-btn").click(function(){
        $("html,body").stop().animate({scrollTop:0},1500,"easeOutQuart");
    });
    
    
    //top버튼 - 모바일
    $(".top-btn-mobile").click(function(){
        $("html,body").stop().animate({scrollTop:0},500,"easeOutQuart");
    });
    
    
});

