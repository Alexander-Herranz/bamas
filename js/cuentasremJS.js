$(document).ready(function (){
	console.log('cuentas remuneradas');
	
	
	$( "#logoff-btn" ).on( "click", function() {
		console.log('click para salir');
		window.location.replace('http://localhost:8080/');
	});
	
	$( "#logoff-btn-volver" ).on( "click", function() {
		console.log('click para salir');
		window.location.replace('http://localhost:8080/panel-control.html');
	});	

});