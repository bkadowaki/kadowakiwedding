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
// CHANGE CONTENT OF KEVIN BOX ON HOVER
$(document).ready(function(){
	$('#kevin').hover(function(){
		$('#display_box').toggleClass('kevin_display');
		$(this).fadeIn(function(){
			$(this).html('kevin');
		});
	});
});
// CHANGE CONTENT OF BRANDON BOX ON HOVER
$(document).ready(function(){
	$('#brandon').hover(function(){
		$('#display_box').toggleClass('brandon_display');
		$(this).fadeIn(function(){
			$(this).html('brandon');
		});
	});
});
// CHANGE CONTENT OF KRISTINA BOX ON HOVER
$(document).ready(function(){
	$('#kristina').hover(function(){
		$('#display_box').toggleClass('kristina_display');
		$(this).fadeIn(function(){
			$(this).html('kristina');
		});
	});
});
// CHANGE CONTENT OF JODELL BOX ON HOVER
$(document).ready(function(){
	$('#jodell').hover(function(){
		$('#display_box').toggleClass('jodell_display');
		$(this).fadeIn(function(){
			$(this).html('jodell');
		});
	});
});
// CHANGE CONTENT OF BARRY BOX ON HOVER
$(document).ready(function(){
	$('#barry').hover(function(){
		$('#display_box').toggleClass('barry_display');
		$(this).fadeIn(function(){
			$(this).html('barry');
		});
	});
});
// CHANGE CONTENT OF JANET BOX ON HOVER
$(document).ready(function(){
	$('#janet').hover(function(){
		$('#display_box').toggleClass('janet_display');
		$(this).fadeIn(function(){
			$(this).html('janet');
		});
	});
});
// CHANGE CONTENT OF LISA BOX ON HOVER
$(document).ready(function(){
	$('#lisa').hover(function(){
		$('#display_box').toggleClass('lisa_display');
		$(this).fadeIn(function(){
			$(this).html('lisa');
		});
	});
});
// CHANGE CONTENT OF IAN BOX ON HOVER
$(document).ready(function(){
	$('#ian').hover(function(){
		$('#display_box').toggleClass('ian_display');
		$(this).fadeIn(function(){
			$(this).html('ian');
		});
	});
});
// CHANGE CONTENT OF YURI BOX ON HOVER
$(document).ready(function(){
	$('#yuri').hover(function(){
		$('#display_box').toggleClass('yuri_display');
		$(this).fadeIn(function(){
			$(this).html('yuri');
		});
	});
});
// CHANGE CONTENT OF KIM BOX ON HOVER
$(document).ready(function(){
	$('#kim').hover(function(){
		$('#display_box').toggleClass('kim_display');
		$(this).fadeIn(function(){
			$(this).html('kim');
		});
	});
});
// CHANGE CONTENT OF KATHLEEN BOX ON HOVER
$(document).ready(function(){
	$('#kathleen').hover(function(){
		$('#display_box').toggleClass('kathleen_display');
		$(this).fadeIn(function(){
			$(this).html('kathleen');
		});
	});
});