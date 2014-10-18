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
//= require_tree .

// NAV HOVER
$(document).ready(function(){
	$('.nav_links').hover(function(){
		$(this).toggleClass('shadow_hoverli');
	});
});

// FADE OUT HEADER TEXT ON SCROLL
$(document).scroll(function(){
	$('#header_text').fadeOut('slow');
});

// HIGHLIGHT HOVER FOR BRIDAL PARTY GRID_BOXES
// $(document).ready(function(){
//    $('.grid_box').mouseover(function(){
//       $(this).addClass('hover');
//    });
//    $('.grid_box').mouseout(function(){
//       $(this).removeClass('hover');
//    });
// });
// CHANGE CONTENT OF BAT BOX ON HOVER
// $(document).ready(function(){
// 	$('#bat').hover(function(){
// 		$('#display_box').toggleClass('bat_display');
// 		$(this).fadeIn(function(){
// 			$(this).html('batman kadowaki');
// 		});
// 	});
// });
// TOGGLE BAT_STYLE AND BAT_STYLE2 CLASSES
$(document).ready(function(){
	$('#bat').hover(function(){
		$(this).toggleClass('bat_style2');
		$('#display_box').toggleClass('bat_display');
	});
});
// TOGGLE KENZ_STYLE AND KENZ_STYLE2 CLASSES
$(document).ready(function(){
	$('#makenzie').hover(function(){
		$(this).toggleClass('kenz_style2');
		$('#display_box').toggleClass('kenz_display');
	});
});
// TOGGLE BRETT_STYLE AND KENZ_STYLE2 CLASSES
$(document).ready(function(){
	$('#brett').hover(function(){
		$(this).toggleClass('brett_style2');
		$('#display_box').toggleClass('brett_display');
	});
});
// TOGGLE GROOMSMAN_STYLE AND KEVIN_STYLE2 CLASSES
$(document).ready(function(){
	$('#kevin').hover(function(){
		$(this).toggleClass('kevin_style2');
		$('#display_box').toggleClass('kevin_display');
	});
});
// TOGGLE GROOMSMAN_STYLE AND BRANDON_STYLE2 CLASSES
$(document).ready(function(){
	$('#brandon').hover(function(){
		$(this).toggleClass('brandon_style2');
		$('#display_box').toggleClass('brandon_display');
	});
});
// TOGGLE BRIDESMAID_STYLE AND KRISTINA_STYLE2 CLASSES
$(document).ready(function(){
	$('#kristina').hover(function(){
		$(this).toggleClass('kristina_style2');
		$('#display_box').toggleClass('kristina_display');
	});
});
// TOGGLE JODELL_STYLE AND JODELL_STYLE2 CLASSES
$(document).ready(function(){
	$('#jodell').hover(function(){
		$(this).toggleClass('jodell_style2');
		$('#display_box').toggleClass('jodell_display');
	});
});
// TOGGLE BARRY_STYLE AND BARRY_STYLE2 CLASSES
$(document).ready(function(){
	$('#barry').hover(function(){
		$(this).toggleClass('barry_style2');
		$('#display_box').toggleClass('barry_display');
	});
});
// TOGGLE JANET_STYLE AND JANET_STYLE2 CLASSES
$(document).ready(function(){
	$('#janet').hover(function(){
		$(this).toggleClass('janet_style2');
		$('#display_box').toggleClass('janet_display');
	});
});
// TOGGLE MARK_STYLE AND MARK_STYLE2 CLASSES
$(document).ready(function(){
	$('#mark').hover(function(){
		$(this).toggleClass('mark_style2');
		$('#display_box').toggleClass('mark_display');
	});
});
// TOGGLE BRIDESMAID_STYLE AND LISA_STYLE2 CLASSES
$(document).ready(function(){
	$('#lisa').hover(function(){
		$(this).toggleClass('lisa_style2');
		$('#display_box').toggleClass('lisa_display');
	});
});
// TOGGLE GROOMSMAN_STYLE AND IAN_STYLE2 CLASSES
$(document).ready(function(){
	$('#ian').hover(function(){
		$(this).toggleClass('ian_style2');
		$('#display_box').toggleClass('ian_display');
	});
});
// TOGGLE GROOMSMAN_STYLE AND MATT_STYLE2 CLASSES
$(document).ready(function(){
	$('#matt').hover(function(){
		$(this).toggleClass('matt_style2');
		$('#display_box').toggleClass('matt_display');
	});
});
// TOGGLE GROOMSMAN_STYLE AND TRAV_STYLE2 CLASSES
$(document).ready(function(){
	$('#travis').hover(function(){
		$(this).toggleClass('travis_style2');
		$('#display_box').toggleClass('travis_display');
	});
});
// TOGGLE BRIDESMAID_STYLE AND YURI_STYLE2 CLASSES
$(document).ready(function(){
	$('#yuri').hover(function(){
		$(this).toggleClass('yuri_style2');
		$('#display_box').toggleClass('yuri_display');
	});
});
// TOGGLE BRIDESMAID_STYLE AND KIM_STYLE2 CLASSES
$(document).ready(function(){
	$('#kim').hover(function(){
		$(this).toggleClass('kim_style2');
		$('#display_box').toggleClass('kim_display');
	});
});
// TOGGLE BRIDESMAID_STYLE AND KATHLEEN_STYLE2 CLASSES
$(document).ready(function(){
	$('#kathleen').hover(function(){
		$(this).toggleClass('kathleen_style2');
		$('#display_box').toggleClass('kathleen_display');
	});
});
// TOGGLE KELLY_STYLE AND KELLY_STYLE2 CLASSES
$(document).ready(function(){
	$('#kelly').hover(function(){
		$(this).toggleClass('kelly_style2');
		$('#display_box').toggleClass('kelly_display');
	});
});
// SMOOTH SCROLLING
$(document).ready(function() {
  $('#bios_link').click(function(){
    $('html, body').animate({
    	scrollTop: $("#bride_bio").offset().top
      }, 2000);
   });
  $('#weddingp_link').click(function(){
    $('html, body').animate({
    	scrollTop: $("#party_grid").offset().top
      }, 2000);
   });
  $('#details_link').click(function(){
    $('html, body').animate({
      scrollTop: $("#details").offset().top
      }, 2000);
   });      
  $('#registry_link').click(function(){
    $('html, body').animate({
      scrollTop: $("#registry").offset().top
      }, 2000);
   });      
  $('#rsvp_link').click(function(){
    $('html, body').animate({
      scrollTop: $("#rsvp").offset().top
      }, 2000);
   });
});


