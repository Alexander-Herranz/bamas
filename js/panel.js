$(document).ready(function (){
	console.log('panel control');

	$( "#logoff-btn" ).on( "click", function() {
		console.log('click para salir');
		window.location.replace('http://localhost:8080/');
	});
	
	$( "#login-btn-1" ).on( "click", function() {
	//$( "#public-site" ).load( "pages/panel-control.html" );
	window.location.replace('http://localhost:8080/mi-cuenta.html');
	});
	
	$( "#login-btn-2" ).on( "click", function() {
	//$( "#public-site" ).load( "pages/panel-control.html" );
	window.location.replace('http://localhost:8080/invertir.html');
	});
	
	$( "#login-btn-3" ).on( "click", function() {
	//$( "#public-site" ).load( "pages/panel-control.html" );
	window.location.replace('http://localhost:8080/cuenta-remunerada.html');
	});
	
	$( "#login-btn-cuentas-nav" ).on( "click", function() {
	//$( "#public-site" ).load( "pages/panel-control.html" );
	window.location.replace('http://localhost:8080/cuenta-remunerada.html');
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

	
});