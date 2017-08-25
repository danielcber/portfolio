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
var webdev = `
<p>Fluent in HTML, CSS<br>
Intermediate in Javascript, JQuery, Ajax, PHP<br>
Beginner Laravel, Angular 2, and NodeJS<br>
Experience with WordPress, Joomla, Wix, Omeka, Salesforce, and MailChimp
</p>

<h3>Projects</h3>
<a target="_blank" href="http://coaliciondigital.org/CoalicionDigital/">Coalición Digital</a><br> A digital archiving site made with Omeka for the Coalition of Immokalee Workers<br>
<a target="_blank" href="https://danielcber.github.io/democracy-now/frontpage">Democracy Now!</a><br>A mocke site of Democracy Now! made with Angular2<br>
<a target="_blank" href="https://github.com/danielcber/palante">Palante</a><br>My final project for URBE's 8-month Programming course<br>
<a target="_blank" href="http://www.sombrerowayuu.com/">Sombrero Wayuu</a><br> An e-commerce site using Wordpress (Ongoing)<br>

<h3>Website manager</h3>
<a target="_blank" href="http://codhez.org.ve/"> Codhez on Joomla</a> Human rights group in Venezuela<br>
<a target="_blank" href="http://flushthetpp.org"> Flush the TPP on Wordpress</a> Trade justice organization<br>
`

$("#webdev").on("click", function() {
	$("#textbox").css({"opacity":"0"});
	setTimeout(function(){
		$("h1").text("Web Development");
		$("h3").text("Skills");
		$("#texto").html(webdev);
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
// var write = "Daniel Cooper Bermudez is a political scientist, aspiring programmer, and translator currently based in Maracaibo, Venezuela. Daniel has also lived and worked in Philadelphia, PA and Immokalee, FL in the past few years. He is an active community member wherever he resides, always seeking to build relationships through shared callings and political organizing. He has worked with the Coalition of Immokalee Workers as a digital archivist and organizer, with Philadelphia Councilwoman María Quiñones Sánchez as an intern, and with Popular Resistance as a writer and on web content."

// $("#writing").on("click", function() {
// 	$("#textbox").css({"opacity":"0"});
// 	setTimeout(function(){
// 		$("h1").text("Writings");
// 		$("h3").text("With heart, always");
// 		$("#texto").text(write);
// 	}, 500);
// 	setTimeout(function(){
// 		$("#textbox").animate({opacity:"1"});
// 	}, 500);
// });

//CONTACT
var contact = `
<strong>email</strong> dcooper2408@gmail.com<br>
<strong>mobile</strong> +58 (414) 169 8845<br>
<strong>github</strong> <a target="_blank" href="https://github.com/danielcber">danielcber</a><br>
<strong>address</strong> 9627 Singers Glen Road<br>
Singers Glen, VA 22850<br>
`

$("#contact").on("click", function() {
	$("#textbox").css({"opacity":"0"});
	setTimeout(function(){
		$("h1").text("Contact");
		$("h3").text("Let's get in touch");
		$("#texto").html(contact);
	}, 500);
	setTimeout(function(){
		$("#textbox").animate({opacity:"1"});
	}, 500);
});



