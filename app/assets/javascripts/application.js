// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// FADE OUT BATS; DELETE LATER
$(document).ready(function(){
	$('.frenchie_img').click(function(){
		$('.frenchie_img').fadeOut();
	});
});

// FADE OUT HEADER TEXT ON SCROLL
$(document).scroll(function(){
	$('#header_text').fadeOut('slow');
});

// HIGHLIGHT HOVER FOR BRIDAL PARTY GRID_BOXES
$(document).ready(function(){
   $('.grid_box').mouseover(function(){
      $(this).addClass('hover');
   });
   $('.grid_box').mouseout(function(){
      $(this).removeClass('hover');
   });
});
// CHANGE CONTENT OF BAT BOX ON HOVER
$(document).ready(function(){
	$('#bat').hover(function(){
		$('#display_box').toggleClass('bat_display');
		$(this).fadeIn(function(){
			$(this).html('batman');
		});
	});
});
// CHANGE CONTENT OF MAKENZIE BOX ON HOVER
$(document).ready(function(){
	$('#makenzie').hover(function(){
		$('#display_box').toggleClass('kenz_display');
		$(this).fadeIn(function(){
			$(this).html('makenzie');
		});
	});
});
// CHANGE CONTENT OF BRETT BOX ON HOVER
$(document).ready(function(){
	$('#brett').hover(function(){
		$('#display_box').toggleClass('brett_display');
		$(this).fadeIn(function(){
			$(this).html('brett');
		});
	});
});