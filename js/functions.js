$(document).ready(function(){
	
	$("body").hide(0).fadeIn(3000);



	$("#mural2").on("mouseenter", function() {
		$("#label").animate({
			opacity:"1",
		});
	});
	$("#mural2").on("mouseleave", function() {
		$("#label").animate({
			opacity:"0"
		});
	});

});