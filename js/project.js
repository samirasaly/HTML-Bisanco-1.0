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
		autohide:false  , 
		// dir:"h", 
		// align:"bottom"
	});

	// //Product Slider
	// (function() {
	// 	document.documentElement.className = 'js';
	// 	var slideshow = new CircleSlideshow(document.getElementById('slideshow'));
	// })();
});