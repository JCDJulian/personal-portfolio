$(document).ready(function(){
	$('#banner').css("opacity","0");
});

$(window).load(function(){
	$('#banner').hide();
	$('#banner').css("opacity","1");
  	$('#banner').fadeIn(1500);
});