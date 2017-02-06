//POLITICAL
var political = "Daniel Cooper Bermudez is a political scientist, aspiring programmer, and translator currently based in Maracaibo, Venezuela. Daniel has also lived and worked in Philadelphia, PA and Immokalee, FL in the past few years. He is an active community member wherever he resides, always seeking to build relationships through shared callings and political organizing. He has worked with the Coalition of Immokalee Workers as a digital archivist and organizer, with Philadelphia Councilwoman María Quiñones Sánchez as an intern, and with Popular Resistance as a writer and on web content."

$("#political").on("click", function() {
	$("#textbox").css({"opacity":"0"});
	setTimeout(function(){
		$("h1").text("Political Work");
		$("h3").text("Political Work");
		$("#texto").text(political);
	}, 1000);
	setTimeout(function(){
		$("#textbox").css({"opacity":"1"});
	}, 1000);
});

//WEB DEV
var webdev = "Daniel Cooper Bermudez is a political scientist, aspiring programmer, and translator currently based in Maracaibo, Venezuela. Daniel has also lived and worked in Philadelphia, PA and Immokalee, FL in the past few years. He is an active community member wherever he resides, always seeking to build relationships through shared callings and political organizing. He has worked with the Coalition of Immokalee Workers as a digital archivist and organizer, with Philadelphia Councilwoman María Quiñones Sánchez as an intern, and with Popular Resistance as a writer and on web content."

$("#webdev").on("click", function() {
	$("#textbox").css({"opacity":"0"});
	setTimeout(function(){
		$("h1").text("Web Development");
		$("h3").text("Web Dev Work");
		$("#texto").text(webdev);
	}, 500);
	setTimeout(function(){
		$("#textbox").animate({opacity:"1"});
	}, 500);
});

//WEB DEV
var translate = "Daniel Cooper Bermudez is a political scientist, aspiring programmer, and translator currently based in Maracaibo, Venezuela. Daniel has also lived and worked in Philadelphia, PA and Immokalee, FL in the past few years. He is an active community member wherever he resides, always seeking to build relationships through shared callings and political organizing. He has worked with the Coalition of Immokalee Workers as a digital archivist and organizer, with Philadelphia Councilwoman María Quiñones Sánchez as an intern, and with Popular Resistance as a writer and on web content."

$("#translate").on("click", function() {
	$("#textbox").css({"opacity":"0"});
	setTimeout(function(){
		$("h1").text("Translation & Interpretation");
		$("h3").text("Quality Culturally and Community Relevant");
		$("#texto").text(translate);
	}, 500);
	setTimeout(function(){
		$("#textbox").animate({opacity:"1"});
	}, 500);
});

//WRITING
var write = "Daniel Cooper Bermudez is a political scientist, aspiring programmer, and translator currently based in Maracaibo, Venezuela. Daniel has also lived and worked in Philadelphia, PA and Immokalee, FL in the past few years. He is an active community member wherever he resides, always seeking to build relationships through shared callings and political organizing. He has worked with the Coalition of Immokalee Workers as a digital archivist and organizer, with Philadelphia Councilwoman María Quiñones Sánchez as an intern, and with Popular Resistance as a writer and on web content."

$("#writing").on("click", function() {
	$("#textbox").css({"opacity":"0"});
	setTimeout(function(){
		$("h1").text("Writings");
		$("h3").text("With heart, always");
		$("#texto").text(write);
	}, 500);
	setTimeout(function(){
		$("#textbox").animate({opacity:"1"});
	}, 500);
});

//CONTACT
var contact = "Daniel Cooper Bermudez is a political scientist, aspiring programmer, and translator currently based in Maracaibo, Venezuela. Daniel has also lived and worked in Philadelphia, PA and Immokalee, FL in the past few years. He is an active community member wherever he resides, always seeking to build relationships through shared callings and political organizing. He has worked with the Coalition of Immokalee Workers as a digital archivist and organizer, with Philadelphia Councilwoman María Quiñones Sánchez as an intern, and with Popular Resistance as a writer and on web content."

$("#contact").on("click", function() {
	$("#textbox").css({"opacity":"0"});
	setTimeout(function(){
		$("h1").text("Contact");
		$("h3").text("My infoooo");
		$("#texto").text(contact);
	}, 500);
	setTimeout(function(){
		$("#textbox").animate({opacity:"1"});
	}, 500);
});



