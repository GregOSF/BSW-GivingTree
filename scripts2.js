$(function(){

	      $('.tooltip-carousel').popover();

	      $('#carousel-example-generic').on('slide.bs.carousel', function () {
	        $('.tooltip-carousel').popover('hide');
	        $(this).find('.caraousel-tooltip-item.active').fadeOut(function(){
	        $(this).removeClass('active');
	        });
	      });

	      $('#carousel-example-generic').on('slid.bs.carousel', function () {
	        var index = $(this).find('.carousel-inner > .item.active').index();
	        $(this).find('.caraousel-tooltip-item').eq(index).fadeIn(function(){
	        $(this).addClass('active');
	        });
	        //alert(index);
	      });

	  	$('.tooltip-carousel').mouseenter(function(){
	      $(this).popover('show');
	    }).mouseleave(function(){
	      $(this).popover('hide');
	    });

			console.log(isNaN(NaN));
			// $.ajax({
  		// type: 'GET',
  		// url:"  ",
  		// dataType: 'jsonp',
  		// crossDomain: true,
  		// success: function(data){
      //   console.log(data)
			//
			// 	};
			// });
})
