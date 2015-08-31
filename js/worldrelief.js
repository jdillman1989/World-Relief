jQuery(document).ready(function() {

	// Mobile menu

	var mobileMenu = jQuery(".mobile-menu");
	var mainNav = jQuery(".main-nav");
	var navContainer = jQuery(".nav");
	var mobileIconSecond = jQuery(".mobile-icon-second");
	var mobileIconThird = jQuery(".mobile-icon-third");

	if (jQuery(window).width() < 676 ) {

		navContainer.css({"transform":"translate(" + navContainer.outerWidth() + "px, 0px)"});
	}

	jQuery(window).resize(function() {

		if (jQuery(window).width() > 676 ) {

			navContainer.css({"transform":"translate(0px, 0px)"});
		}
	});

	mobileMenu.click(function() {

		if (navContainer.hasClass("position")) {

			navContainer.removeClass("position");

			navContainer.css({"transform":"translate(0px, 0px)"});

			console.log( ".nav x-coord: 0");

			mobileIconSecond.css({"width":"48px"});

			mobileIconThird.css({"width":"48px"});
		} 

		else{

			navContainer.addClass("position");

			navContainer.css({"transform":"translate(" + navContainer.outerWidth() + "px, 0px)"});

			console.log( ".nav x-coord: " + navContainer.outerWidth() );

			mobileIconSecond.css({"width":"38px"});

			mobileIconThird.css({"width":"28px"});
		};
	});

	// Scroll animations

	if (jQuery(window).width() > 676) {

		jQuery(window).scroll(function() {

			if( jQuery(this).scrollTop() > 80 ) {

				navContainer.css({"background-color":"rgba(43,169,233,0.9)"});
			} 
			else {

				navContainer.css({"background-color":"transparent"});
			}
		});
	}

	else{

		jQuery(window).scroll(function() {

			if( jQuery(this).scrollTop() > 80 ) {

				mobileMenu.css({"background-color":"rgba(43,169,233,0.9)"});
			} 
			else {

				mobileMenu.css({"background-color":"transparent"});
			}
		});
	}
});