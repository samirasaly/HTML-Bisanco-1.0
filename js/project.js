$(document).ready(function(){

// Navigation <a> Scrolling

$('.navigation ul li a').click(function(event) {
	event.preventDefault();
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({
        scrollTop: target
    }, 1000, "easeInOutQuint");
});	

// Navigation Section Change

var aChildren = $(".navigation li").children();
var aArray = [];
for (var i=0; i < aChildren.length; i++) {    
    var aChild = aChildren[i];
    var ahref = $(aChild).attr('href');
    aArray.push(ahref);
};

$(window).scroll(function(){
    var windowPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var docHeight = $(document).height();

    for (var i=0; i < aArray.length; i++) {
        var theID = aArray[i];
        var divPos = $(theID);
        if (divPos.length) {
          if($(window).width() > 980){
            var divPos = divPos.offset().top - 322;
          } else{
            var divPos = divPos.offset().top;
          }
        }
        var divHeight = $(theID).height();
        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
            $("a[href='" + theID + "']").parent().addClass("current-item-nav").siblings().removeClass("current-item-nav");
        } else {
            $("a[href='" + theID + "']").parent().removeClass("current-item-nav");
        }
    }

});

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
	height:1280,
	loop:true,
	autoplay:true,
	fullwidth:true,
	// autoHeight:true,
	overPause:false,
	centerControls:false,
	speed:14,
	view:'fade'
});
slider.control('arrows' , {autohide:false});

// Recipe Slider Responsive

if($(window).width() < 1300){
  slider.setup('masterslider2' , {
	height:1580
	});
}

if($(window).width() < 1080){
  slider.setup('masterslider2' , {
	height:1880
	});
}

if($(window).width() < 980){
  slider.setup('masterslider2' , {
	height:2580
	});
}slider.control(
	'bullets' , {
	autohide:false  
	});
slider.control('arrows' , {autohide:true});

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
	if (scroll > 0) {
	    $(".navigation").addClass("sticky");
	} else{
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