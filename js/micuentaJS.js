$(document).ready(function (){
	console.log('mi cuenta');

	$( "#logoff-btn" ).on( "click", function() {
		console.log('click para salir');
		window.location.replace('http://localhost:8080/');
	});
		
	$( "#logoff-btn-volver" ).on( "click", function() {
		console.log('click para salir');
		window.location.replace('http://localhost:8080/panel-control.html');
	});	
	
	$( "#login-btn-about" ).on( "click", function() {
	//$( "#public-site" ).load( "pages/panel-control.html" );
	window.location.replace('http://localhost:8080/about.html');
	});
	
	$( "#login-btn-about-1" ).on( "click", function() {
	//$( "#public-site" ).load( "pages/panel-control.html" );
	window.location.replace('http://localhost:8080/about.html');
	});
	
	$( "#login-btn-about-2" ).on( "click", function() {
	//$( "#public-site" ).load( "pages/panel-control.html" );
	window.location.replace('http://localhost:8080/about.html');
	});
	
	$( "#login-btn-about-3" ).on( "click", function() {
	//$( "#public-site" ).load( "pages/panel-control.html" );
	window.location.replace('http://localhost:8080/about.html');
	});
	
	$( "#login-btn-cuentas-nav" ).on( "click", function() {
	//$( "#public-site" ).load( "pages/panel-control.html" );
	window.location.replace('http://localhost:8080/cuenta-remunerada.html');
	});
	
	$( "#login-btn-cuentas-nav-2" ).on( "click", function() {
	//$( "#public-site" ).load( "pages/panel-control.html" );
	window.location.replace('http://localhost:8080/cuenta-remunerada.html');
	});
});