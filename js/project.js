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

		nextClick : true,

		helpers : {
			thumbs : {
				width  : 50,
				height : 50
			},
			title : {
						type : 'inside'
					},
					buttons	: {}
		}
	});

	// Header Scroll
	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 200) {
        //clearHeader, not clearheader - caps H
        $(".navigation").addClass("sticky");
    }
    if (scroll < 200) {
        //clearHeader, not clearheader - caps H
        $(".navigation").removeClass("sticky");
    }
}); //missing );

});

// Form Validate

$('.contact-form').validate({
  rules: {
    full_name: {
      required: true,
      minlength: 3
    },
    subject: {
      required: true,
      minlength: 3
    },
    email: {
      required: true,
      minlength: 5,
      email:true
    },
    phone: {
      required: true,
      minlength: 5,
      number:true
    }
  },
  errorPlacement: function(error, element) {
    return false;
    alert('error');
  },
  submitHandler: function (form) {
    $('.thank-you').addClass('active');        
  }

});