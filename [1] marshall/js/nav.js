$(document).ready(function(){

    //고정메뉴    
   $(window).scroll(function(){
        if($(this).scrollTop() > 80){
           $("header").addClass("fixed1");  
        }else{
           $("header").removeClass("fixed1");
        }
    });
    
    //서브메뉴
    $('.total').click(function(){
        
        $(this).toggleClass('on')
    });
    
  
  $('.total').click(function(){
    $('.sidebar-wrap').fadeToggle();
  });
    
    //top버튼
    $(".fixed-top-btn").click(function(){
        $("html,body").stop().animate({scrollTop:0},1500,"easeOutQuart");
    });
    
});
