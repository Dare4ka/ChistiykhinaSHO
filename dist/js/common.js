$(document).ready(function() {


	$('.scroll').click( function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1000);
    });

	$('.menu-open').click(function () {
    	$('.menu-open__global_top').toggleClass('menu-open__global_top_open');
    	$('.menu-open__global_middle').toggleClass('menu-open__global_middle_open');
    	$('.menu-open__global_bottom').toggleClass('menu-open__global_bottom_open');
    	
    	$('.menu__block').slideToggle(200);
    });

    $(window).scroll(function () {
    	if ($(window).height() > 650 && $(window).width() > 650) {
			if ($(this).scrollTop() > $(window).height()) {
				$('.menu').css({'position':'fixed'});
				$('.logo').css({'position':'fixed'});
			} 
			if ($(this).scrollTop() < $(window).height()) {
				$('.menu').css({'position':'static'});
				$('.logo').css({'position':'absolute'});
			}
		}
	});
})