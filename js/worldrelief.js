jQuery(document).ready(function() {

	// Override styles

	var contentContainer = jQuery(".content");
	var panelContainer = contentContainer.children();
	var panelContainerClasses = panelContainer.attr('class');

	if (jQuery("#panels-edit-display-form").length) {

	}

	else {

		var panelContainerClassNumber = panelContainerClasses.match(/\d+/g);

		jQuery("<style type='text/css'> .panels-flexible-"+panelContainerClassNumber+" .panels-flexible-region-inside{ padding-right: 0; padding-left: 0; } .panels-flexible-"+panelContainerClassNumber+" .panels-flexible-row{ padding: 0 0 0 0; } @media (max-width: 676px) { .panels-flexible-"+panelContainerClassNumber+" .panels-flexible-region{ float: none; width: 100%; } } </style>").appendTo("head");
	};

	jQuery("div").each(function() {

		var thisWidth = 100 * parseFloat(jQuery(this).css('width')) / parseFloat(jQuery(this).parent().css('width'));

		if ( thisWidth == 99 ) {

			jQuery(this).width('100%');
		};
	});

	jQuery("ul").each(function() {

		jQuery(this).removeClass("menu");
	});

	jQuery("li").each(function() {

		jQuery(this).removeClass("leaf");
		jQuery(this).removeClass("expanded");
	});

	// Mobile menu

	var navContainer = jQuery(".nav");

	navContainer.children().addClass("main-nav");

	var mobileMenu = jQuery(".mobile-menu");
	var mainNav = jQuery(".main-nav");
	var mobileIconSecond = jQuery(".mobile-icon-second");
	var mobileIconThird = jQuery(".mobile-icon-third");

	if (jQuery(window).width() < 676 ) {

		navContainer.css({
			"transform":"translate(" + navContainer.outerWidth() + "px, 0px)",
			"-webkit-transform":"translate(" + navContainer.outerWidth() + "px, 0px)"
		});
	}

	jQuery(window).resize(function() {

		if (jQuery(window).width() > 676 ) {

			navContainer.css({
				"transform":"translate(0px, 0px)",
				"-webkit-transform":"translate(0px, 0px)"
			});
		}
	});

	mobileMenu.click(function() {

		if (navContainer.hasClass("position")) {

			navContainer.removeClass("position");

			navContainer.css({
				"transform":"translate(0px, 0px)",
				"-webkit-transform":"translate(0px, 0px)"
			});

			mobileIconSecond.css({"width":"48px"});

			mobileIconThird.css({"width":"48px"});
		} 

		else{

			navContainer.addClass("position");

			navContainer.css({
				"transform":"translate(" + navContainer.outerWidth() + "px, 0px)",
				"-webkit-transform":"translate(" + navContainer.outerWidth() + "px, 0px)"
			});

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

				navContainer.css({"background-color":"rgba(43,169,233,0.3)"});
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

	// responsive iframes

	var iframe = jQuery("iframe");
	var content = jQuery(".wr-node");

	iframe.attr( "width", content.width() );

	jQuery(window).resize(function(){

		iframe.attr( "width", content.width() );
	});

	// responsive height columns

	var panelRow = jQuery(".grid");
	var topPadding = parseInt(content.css('padding-top'));
	var verticalPadding = topPadding * 2;

	if (jQuery(window).width() > 676) {

		panelRow.each(function() {

			var panelRowHeight = jQuery( this ).height();

			jQuery( this ).find( ".wr-node" ).height( panelRowHeight - verticalPadding );
		});
	}
});














