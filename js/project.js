$(document).ready(function(){

	// Slider
	var slider = new MasterSlider();
	slider.setup('masterslider' , {
	  width:1920,
	  height:580,
	  loop:true,
	  autoplay:true,
	  fullwidth:true,
	  overPause:false,
	  centerControls:false,
	  speed:16,
	  view:'fade'
	});
	slider.control('bullets' , {
		autohide:false  
	});

	// Recipe Slider
	var slider = new MasterSlider();
	slider.setup('masterslider2' , {
	  width:1920,
	  height:1080,
	  loop:true,
	  autoplay:true,
	  fullwidth:true,
	  overPause:false,
	  centerControls:false,
	  speed:14,
	  view:'fade'
	});
	slider.control('arrows' , {autohide:false});

	// Image gallery

	$('.fancybox-thumbs').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,
		arrows    : false,
		nextClick : true,

		helpers : {
			thumbs : {
				width  : 50,
				height : 50
			}
		}
	});

});