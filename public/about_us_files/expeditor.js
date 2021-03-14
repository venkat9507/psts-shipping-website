(function($) {
	
	"use strict";
	
/* ==========================================================================
   Components: Counter
   ========================================================================== */
	
	function animateCounters() {

		$('.ewf-counter__standard:in-viewport').each(function() {
			
			var $t = $(this),
				n = $t.attr("data-value"),
				r = parseInt($t.attr("data-speed"), 10);
				
			if (!$t.hasClass("already-animated")) {
				$t.addClass("already-animated");
				$({
					countNum: $t.text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.text(this.countNum);
					}
				});
			}
			
		});

	}
	
	$(document).ready(function() {

		animateCounters();

	});

	$(window).scroll(function() {				   
		
		animateCounters();

	});	
	
/* ==========================================================================
   Components: Generic Slider
   ========================================================================== */   
   
	$(document).ready(function() {

		// slickSlider - responsive slider
		// http://kenwheeler.github.io/slick
		
		if (typeof $.fn.slick !== 'undefined') {

			$('.ewf-generic-slider').each(function() {
				
				var $t = $(this);
				var $slider = $t.find('.ewf-generic-slider__slides');
				
				$slider.slick({
					adaptiveHeight: true,
					autoplay: false,
					infinite: true,
					speed: 500,
					fade: true,
					cssEase: 'linear',
					arrows: false,
					dots: true,
					appendDots: $t.find('.ewf-generic-slider__pager')
				});
				
			});
			
		} 

	});	

/* ==========================================================================
   Components: Map
   ========================================================================== */
   
	$(document).ready(function() {

		// Google Maps
		// http://gmap3.net/quickstart.html
		
		if (typeof $.fn.gmap3 !== 'undefined') {
		
			$(".ewf-map").each(function() {
				
				var data_zoom = 15,
					data_height,
					data_popup = false;
				
				if ($(this).attr("data-zoom") !== undefined) {
					data_zoom = parseInt($(this).attr("data-zoom"),10);
				}	
				
				if ($(this).attr("data-height") !== undefined) {
					data_height = parseInt($(this).attr("data-height"),10);
				}
				
				if ($(this).attr("data-address-details") !== undefined) {
					
					data_popup = true;
					
					var infowindow = new google.maps.InfoWindow({
						content: $(this).attr("data-address-details")
					});
					
				}
				
				
				$(this)
				.gmap3({
					address: $(this).attr("data-address"),
					zoom: data_zoom,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					scrollwheel: false
				})
				.on({
					click: function(marker, event){
						if (data_popup) {
							infowindow.open(marker.get('map'), marker);
						}
					}
				});
				  
				$(this).css("height", data_height + "px");
				
			});
			
		}

	});	

/* ==========================================================================
   Components: Section ( Parallax / Video Background )
   ========================================================================== */   
	
	$(document).ready(function() {

		if (typeof $.fn.YTPlayer !== 'undefined') {

			$(".ewf-section__video-background-yt-source").each(function(index) {													
					
					var $t = $(this),
						$parent = $t.parent(),
						newID = 'ewf-section__video-background-yt-' + index,
						videoSource = $(this).attr("data-source");
						
					$parent.attr("id",newID);

					var videoBackgroundConfig = "{videoURL:'"+ videoSource +"',containment:'#"+ newID +"',showControls:false,autoPlay:true, mute:true, startAt:0, opacity:1}";
					
					$t.attr( "data-property", videoBackgroundConfig );
					
			});
			
			$(".ewf-section__video-background-yt-source").YTPlayer({playOnlyIfVisible: true});
			
		}
		
	});	

/* ==========================================================================
   Components: Main Slider
   ========================================================================== */
   
	$(document).ready(function() {

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $t = $(this);
				var animationDelay = $t.data('delay') || '0';
				var animationType = 'animated ' + $t.data('animation');
				$t.css({
					'animation-delay': animationDelay,
					'-webkit-animation-delay': animationDelay
				});
				$t.addClass(animationType).one(animationEndEvents, function() {
					$t.removeClass(animationType);
				});
			});
		}
	
		// slickSlider - responsive slider
		// http://kenwheeler.github.io/slick
		
		if (typeof $.fn.slick !== 'undefined') {

			$('.ewf-slider').each(function() {
				
				var $t = $(this);
				
				var $slider = $t.find('.ewf-slider__slides');

				var $slider_config = {
						fade: true,
						speed: 500,
						autoplay: true,
						infinite: true,
						pager: true,
						controls: true	
					};

				$slider.on('init', function(e, slick) {
					var $firstAnimatingElements = $('.slick-slide:first-child').find('[data-animation]');
					doAnimations($firstAnimatingElements);    
				});
				
				$slider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
					var $animatingElements = $('.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
					doAnimations($animatingElements);    
				});
					
				$slider.slick({
					
					adaptiveHeight: true,
					
					fade: $slider_config.fade,
					cssEase: 'linear',
					
					speed: $slider_config.speed,
					
					autoplay: $slider_config.autoplay,
					
					infinite: $slider_config.infinite,

					arrows: $slider_config.controls,
					appendArrows: $t.find('.ewf-slider__arrows'),
					prevArrow: '<a class="slick-prev" href="#"><i class="ti-arrow-left"></i></a>',
					nextArrow: '<a class="slick-next" href="#"><i class="ti-arrow-right"></i></a>',
					
					dots: $slider_config.pager,
					appendDots: $t.find('.ewf-slider__pager')
					
				});
		
			});

		}

	});	

/* ==========================================================================
   Components: Testimonial Slider
   ========================================================================== */   
   
	$(document).ready(function() {

		// slickSlider - responsive slider
		// http://kenwheeler.github.io/slick
		
		if (typeof $.fn.slick !== 'undefined') {

			$('.ewf-testimonial-slider .ewf-testimonial-slider__slides').each(function() {
				var $t = $(this);
				$t.slick({
					adaptiveHeight: true,
					autoplay: false,
					infinite: true,
					speed: 500,
					fade: true,
					cssEase: 'linear',
					arrows: false,
					dots: true,
					appendDots: $t.next()
				});
			});
			
		} 

	});	

/* ==========================================================================
   Components: Timeline
   ========================================================================== */  
   
		
	$(document).ready(function() {

		// slickSlider - responsive slider
		// http://kenwheeler.github.io/slick
		
		if (typeof $.fn.slick !== 'undefined') {

			$('.ewf-timeline').each(function() {
				
				var $t = $(this);
				var $slider = $t.find('.ewf-timeline__slides');
				
				$slider.slick({
					autoplay: false,
					infinite: false,
					arrows: true,
					appendArrows: $t.find('.ewf-timeline__arrows'),
					prevArrow: '<a class="slick-prev" href="#"><i class="ti-arrow-left"></i></a>',
					nextArrow: '<a class="slick-next" href="#"><i class="ti-arrow-right"></i></a>',
					slidesToShow: 3,
					slidesToScroll: 1,
					responsive: [
						{
						  breakpoint: 1280,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						  }
						},
						{
						  breakpoint: 640,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						}
					]	
				});
				
			});
			
		} 
	
	});			
		
/* ==========================================================================
   Component: Contact Form with Validation
   ========================================================================== */

	function handleContactForm() {
	
		if(typeof $.fn.validate != 'undefined'){
			
			$('#contact-form').validate({
				errorClass: 'validation-error', // so that it doesn't conflict with the error class of alert boxes
				rules: {
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					subject: {
						required: true
					},
					message: {
						required: true
					}
				},
				messages: {
					name: {
						required: "Field is required!"
					},
					email: {
						required: "Field is required!",
						email: "Please enter a valid email address"
					},
					subject: {
						required: "Field is required!"
					},
					message: {
						required: "Field is required!"
					}
				},
				submitHandler: function(form) {
					var result;
					$(form).ajaxSubmit({
						type: "POST",
						data: $(form).serialize(),
						url: "assets/php/send.php",
						success: function(msg) {
							
							if (msg == 'OK') {
								result = '<p>The message has been sent!</p>';
								$('#contact-form').clearForm();
							} else {
								result = '<p>' + msg + '</p>';
							}
							$("#contact-form-status").html(result);
		
						},
						error: function() {
		
							result = '<p>There was an error sending the message!</p>';
							$("#contact-form-status").html(result);
		
						}
					});
				}
			});
			
		}
		
	}
	
	$(document).ready(function() {

		handleContactForm(); 

	});	
	
/* ==========================================================================
   Utilities: Animations
   ========================================================================== */
   
	$(window).on('scroll load', function () {
		
		$('.ewf-animate').each(function () {
			
			var $t = $(this);
			
			var animationType = $t.data('animation') || 'fadeIn';
			var animationDelay = $t.data('animation-delay') || '0';
			var animationSpeed = $t.data('animation-speed') || '1000';
			var animationOffset = $t.data('animation-offset') || '90%';
			
			var animationOptions = {
				'animation-delay': animationDelay + 'ms',
				'-webkit-animation-delay': animationDelay + 'ms',
				'animation-duration': animationSpeed + 'ms',
				'-webkit-animation-duration': animationSpeed + 'ms',
			};

			var triggerpoint = $(window).height() * ( parseFloat(animationOffset) / 100 ) + $(window).scrollTop();
			var element = $t.offset().top;

			if (element < triggerpoint) {
				$t.addClass(animationType).css(animationOptions);
			}
			
		});	
		
	});   

/* ==========================================================================
   Layout: Back to top
   ========================================================================== */
   
	function handleBackToTop() {
	   
		$('#back-to-top').on("click", function(){
			$('html, body').animate({scrollTop:0}, 'slow');
			return false;
		});
   
	}

	function showHidebackToTop() {
	
		if ($(window).scrollTop() > $(window).height() / 2 ) {
			$("#back-to-top").removeClass('gone').addClass('visible');
		} else {
			$("#back-to-top").removeClass('visible').addClass('gone');
		}
	
	}

	$(document).ready(function() {

		handleBackToTop();
		showHidebackToTop(); 

	});

	$(window).scroll(function() {				   
		
		showHidebackToTop(); 

	});

/* ==========================================================================
   Layout: Menu 
   ========================================================================== */		
  
	var MOBILEBREAKPOINT = 1200;

	function exists(e) {
		return $(e).length > 0;
	} 
	
	function handleMobileMenu() {

		if ($(window).width() > MOBILEBREAKPOINT) {
			
			$("#mobile-menu").hide();
			$("#mobile-menu-trigger").removeClass("mobile-menu-opened").addClass("mobile-menu-closed");
		
		} else {
			
			if (!exists("#mobile-menu")) {
				
				$("#desktop-menu").clone().attr({
					id: "mobile-menu",
					"class": ""
				}).insertAfter("#header");
				
				$("#mobile-menu > li > a, #mobile-menu > li > ul > li > a").each(function() {
					var $t = $(this);
					if ($t.next().hasClass('sub-menu') || $t.next().is('ul') || $t.next().is('.sf-mega')) {
						$t.append('<span class="ti-arrow-down mobile-menu-submenu-arrow mobile-menu-submenu-closed"></span>');
					}
				});
			
				$(".mobile-menu-submenu-arrow").on("click", function(event) {
					var $t = $(this);
					if ($t.hasClass("mobile-menu-submenu-closed")) {
						$t.removeClass("mobile-menu-submenu-closed ti-arrow-down").addClass("mobile-menu-submenu-opened ti-arrow-up").parent().siblings("ul, .sf-mega").slideDown(300);
					} else {
						$t.removeClass("mobile-menu-submenu-opened ti-arrow-up").addClass("mobile-menu-submenu-closed ti-arrow-down").parent().siblings("ul, .sf-mega").slideUp(300);
					}
					event.preventDefault();
				});
				
				$("#mobile-menu li, #mobile-menu li a, #mobile-menu ul").attr("style", "");
				
			}
			
		}

	}

	function showHideMobileMenu() {
		
		$("#mobile-menu-trigger").on("click", function(event) {
			
			var $t = $(this),
				$n = $("#mobile-menu");
			
			if ($t.hasClass("mobile-menu-opened")) {
				$t.removeClass("mobile-menu-opened").addClass("mobile-menu-closed");
				$n.slideUp(300);
			} else {
				$t.removeClass("mobile-menu-closed").addClass("mobile-menu-opened");
				$n.slideDown(300);
			}
			event.preventDefault();
			
		});
		
	}
	
	$(document).ready(function() {

		handleMobileMenu();
		showHideMobileMenu(); 

		// Superfish - enhance pure CSS drop-down menus
		// http://users.tpg.com.au/j_birch/plugins/superfish/options/
		
		if(typeof $.fn.superfish !== 'undefined'){
			
			$('#desktop-menu').superfish({
				delay: 500,
				animation: {opacity:'show',height:'show'},
				speed: 100,
				cssArrows: false
			});
			
		}
		
	});

	$(window).resize(function() {
			
		handleMobileMenu();

	});

/* ==========================================================================
   Layout: Custom Search
   ========================================================================== */

	function handleSearch() {	
		
		$('#custom-search-button').on("click", function(e) { 
		
			e.preventDefault();
			
			if(!$("#custom-search-button").hasClass('open')) {
			
				$("#custom-search-form").fadeIn();
				$("#custom-search-button").addClass('open');
				$("#custom-search-form #s").focus();
				
			} else {
				
				$("#custom-search-form").fadeOut();
				$("#custom-search-button").removeClass('open');
				
			}
			
		});
		
	}
	
	$(document).ready(function() {

		handleSearch(); 

	});	

/* ==========================================================================
   Layout: Sticky Header
   ========================================================================== */
   
	// sticky header
	// http://leafo.net/sticky-kit/#reference
		
	function handleSticky() {
	
		if (($('body').hasClass('sticky-header')) && ($(window).width() > MOBILEBREAKPOINT)){
			
			$("#header-wrap").stick_in_parent({
				parent: '#wrap'
			});
		
		} else {
		
			$("#header-wrap").trigger("sticky_kit:detach");
		
		}
	
	}		
	
	$(document).ready(function() {

		handleSticky();

	});	
	
	$(window).resize(function() {
			
		handleSticky();

	});
	

})(jQuery);

// non jQuery scripts below