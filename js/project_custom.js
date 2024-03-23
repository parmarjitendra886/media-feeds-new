$ = jQuery;

jQuery(document).ready(function() {

	'use strict';

	var $menu = $("#mobile_menu");
	  $menu.mmenu({
			extensions: ["pageshadow" , "border-full" , "effect-listitems-slide" , "position-right" ],	
			offCanvas: {
				position: "right"
			}
			}, {
		// configuration
			classNames: {	
		fixedElements: {
	   	fixed: "abc"
		}
			}
	  });

	  var API = $("#mobile_menu").data("mmenu");
		var api = $("#mobile_menu").data("mmenu");
		api.bind( "closed", function() {
		api.closeAllPanels();
	});

	
	
	/* Sticky Header */
	jQuery(window).scroll(function() {
		if (jQuery(window).scrollTop() > 130) {
			jQuery('.main_header').addClass('sticky');
			jQuery('.main_header').removeClass('non_sticky');
		}
		else {
			jQuery('.main_header').removeClass('sticky');
			jQuery('.main_header').addClass('non_sticky');
		}
	});


	// browser window scroll (in pixels) after which the "back to top" link is shown

	var offset = 500,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $(".back-top");

	$(window).scroll(function() {
		$(this).scrollTop() > offset
			? $back_to_top.addClass("back-is-visible")
			: $back_to_top.removeClass("back-is-visible back-fade-out");

		if ($(this).scrollTop() > offset_opacity) {
			$back_to_top.addClass("back-fade-out");
		}
	});

	//smooth scroll to top

	$back_to_top.on("click", function(event) {
		event.preventDefault();
		$("body,html").animate(
			{
				scrollTop: 0
			},
			scroll_top_duration
		);
	});

	// nice-select
	$('.filter_band select').niceSelect();


	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.element-item',
	   percentPosition: true,
		  masonry: {
		    columnWidth: '.element-item'
		  }
	});
	// filter functions
	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
	    var number = $(this).find('.number').text();
	    return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
	    var name = $(this).find('.name').text();
	    return name.match( /ium$/ );
	  }
	};
	// bind filter button click
	$('.filters-button-group').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});



	// popup box

	// .popup_box

	$(".userbutton").click(function(){
		$(".popup_overlay").remove();
		$('body').prepend($('<div class="popup_overlay"></div>'));
		$(".popup_box").addClass("open_popup");
		$("body").css("overflow","hidden");
	});

	$(".close_btn").click(function(){
		$(".popup_box").removeClass("open_popup");
		$('body .popup_overlay').remove();
		$("body").css("overflow","visible");
	});

	$("body").on('click', '.popup_overlay', function() {
		$(".popup_box").removeClass("open_popup");
		$(this).remove();
		$("body").css("overflow","visible");
	});


	$("#registered_form").click(function(){
		$("#login").css({"opacity":"0","visibility":"hidden","display":"none"});
		$("#signup").css({"opacity":"1","visibility":"visible", "display":"block"});
	});
	$("#login_form").click(function(){
		$("#login").css({"opacity":"1","visibility":"visible", "display":"block"});
		$("#signup").css({"opacity":"0","visibility":"hidden" , "display":"none"});
	});

	$("#reset_password_form").click(function(){
		$("#login").css({"opacity":"1","visibility":"visible", "display":"block"});
		$("#reset_password").css({"opacity":"0","visibility":"hidden" , "display":"none"});
	});

	$("#forgot_password").click(function(){
		$("#login").css({"opacity":"0","visibility":"hidden", "display":"none"});
		$("#reset_password").css({"opacity":"1","visibility":"visible" , "display":"block"});
	});


	//Horizontal Tab
	$('#parentHorizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		tabidentify: 'hor_1', // The tab groups identifier
	});



	
	
});




