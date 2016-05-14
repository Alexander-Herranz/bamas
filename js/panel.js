$(document).ready(function (){
	console.log('panel control');

	$( "#logoff-btn" ).on( "click", function() {
		console.log('click para salir');
		window.location.replace('http://localhost:8080/');
	});

});