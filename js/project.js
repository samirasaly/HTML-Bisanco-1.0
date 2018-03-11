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

$('.ms-layer a.bttn').click(function(event) {
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
            var divPos = divPos.offset().top - 70;
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
  height:780,
  loop:true,
  autoplay:true,
  fullwidth:true,
  overPause:false,
  centerControls:false,
  speed:16,
  view:'fade'
});
slider.control('bullets' , {
	autohide:false,
	hideUnder:560
});

// Recipe Slider

var slider = new MasterSlider();
slider.setup('masterslider2' , {
	width:1920,
	height:1200,
	loop:true,
	autoplay:false,
	fullwidth:true,
	overPause:false,
	centerControls:false,
	speed:14,
	view:'fade'
});
slider.control('arrows' , {autohide:false,});

// Recipe Image Gallery

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

// Sticky Header 

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll > 76) {
	    $(".navigation").addClass("sticky");
	} else{
	    $(".navigation").removeClass("sticky");
	}
});

});

// Contact us Form Validate

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


// Hide Header on on scroll down

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.navigation').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navigation').removeClass('nav-down').addClass('nav-up');
      } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
          $('.navigation').removeClass('nav-up').addClass('nav-down');
        }
      }
      
      lastScrollTop = st;
    }