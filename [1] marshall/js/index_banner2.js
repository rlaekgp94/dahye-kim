$(document).ready(function() {
	
    var myArray = ["01","01","02","03"];


    var swiper = new Swiper('.swiper-container', {
        loop:true,
      effect: 'fade',
      autoplay:{
          delay:6000,
          disableOnInteraction: false,
      },    
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + myArray[index + 1] + '</span>';
        },
      },
    });
    
    
    
    
});

