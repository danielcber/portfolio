//POLITICAL
var political = `
<a target="_blank" href="http://codhez.org.ve/">Comisión de Derechos Humanos del Estado Zulia</a><br>
Development Coordinator<br>
Maracaibo, Venezuela<br>
April 2017 - Present<br><br>

<a target="_blank" href="http://popularresistance.org">Popular Resistance</a><br>
Digital strategist<br>
Remote, Sept 2016 - June 2018<br><br>

<a target="_blank" href="http://ciw-online.org/">Coalition of Immokalee Workers</a><br>
Digital Archivist<br>
Immokalee, FL<br>
Aug 2015 – Aug 2016<br><br>

<a target="_blank" href="http://phlcouncil.com/MariaQSanchez">Office of Councilwoman Quiñones Sánchez</a><br>
Intern<br>
Philadelpa, PA<br>
Sept. Jan – June 2015<br><br>
`

$("#political").on("click", function() {
	$("#textbox").css({"opacity":"0"});
	setTimeout(function(){
		$("h1").text("Political Work");
		$("h3").text("Political Work");
		$("#texto").html(political);
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
<a target="_blank" href="http://codhez.ong/ddhhpavos/">DDHH Pa Vos</a><br> An archive for human rights news from Venezuela<br>
<a target="_blank" href="http://codhez.ong/feria/">Feria de Derechos Humanos</a><br> A promotional website for Codhez's annual Human Rights Fair<br>
<a target="_blank" href="http://coaliciondigital.org/CoalicionDigital/">Coalición Digital</a><br> A digital archiving site made with Omeka for the Coalition of Immokalee Workers<br>
<a target="_blank" href="https://danielcber.github.io/democracy-now/frontpage">Democracy Now!</a><br>A mock site of Democracy Now! made with Angular2<br>
<a target="_blank" href="https://github.com/danielcber/palante">Palante</a><br>My final project for URBE's 8-month Programming course<br>
<a target="_blank" href="http://www.sombrerowayuu.com/">Sombrero Wayuu</a><br> An e-commerce site using Wordpress to sell Wayuu hats (Ongoing)<br>
<a target="_blank" href="http://www.flushthetpp.org/">Trade for People and Planet</a><br> A Wordpress site for the Trade for People and Planet Campaign (Ongoing)<br>

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
var translate = `
Daniel has ample experience translating and interpreting from English to Spanish and Spanish to English in many formats.
He has translated human rights reports to be sent to the United Nations for indigenous peoples and Venezuelan organizations,
articles for the grassroots worker organizations in the United States, political analysis pieces from community voices in 
Venezuela, press releases, flyers, informational pamphlets, and even a feature length indigenous film from Brazil
'Time was Endless'.
`

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
// var write = "Daniel Cooper Bermudez is a political strategist, rising programmer, and translator currently based in Maracaibo, Venezuela. Daniel has also lived and worked in Philadelphia, PA and Immokalee, FL in the past few years. He is an active community member wherever he resides, always seeking to build relationships through shared callings and political organizing. He has worked with the Coalition of Immokalee Workers as a digital archivist and organizer, with Philadelphia Councilwoman María Quiñones Sánchez as an intern, and with Popular Resistance as a writer and on web content."

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
<strong>email</strong> danielcooperbermudez at gmail.com<br>
<strong>mobile</strong><br>Florida: (305) 671 3456<br>Venezuela: +58 (414) 169 8845<br>
<strong>github</strong> <a target="_blank" href="https://github.com/danielcber">danielcber</a><br>
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




