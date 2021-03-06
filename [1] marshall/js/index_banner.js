$(document).ready(function() {
		 		
		
		$('.order-name:nth-child(1)').on('mouseenter', function() {
			$('.order-name.active').removeClass('active');
			$('.image-wrap li.show').removeClass("show");
			$('.image-wrap li:nth-child(1)').addClass("show");
			$('.order-name:nth-child(1)').addClass('active');
		})
		$('.order-name:nth-child(2)').on('mouseenter', function() {
			$('.order-name.active').removeClass('active');
			$('.image-wrap li.show').removeClass("show");
			$('.image-wrap li:nth-child(2)').addClass("show");
			$('.order-name:nth-child(2)').addClass('active');
		})
		$('.order-name:nth-child(3)').on('mouseenter', function() {
			$('.order-name.active').removeClass('active');
			$('.image-wrap li.show').removeClass("show");
			$('.image-wrap li:nth-child(3)').addClass("show");
			$('.order-name:nth-child(3)').addClass('active');
		})
		$('.order-name:nth-child(1)').trigger('mouseenter')
		

    
});

