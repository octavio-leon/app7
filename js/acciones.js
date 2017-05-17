// JavaScript Document

$(document).ready(function(e)  {
	document.addEventListener("deviceready", function(){
		
	$('#izquierda').on("swipeleft",function(){
		navigator.notification.alert("Deslizo a la izquierda", function(){"Aplicacion7","Aceptar"});
});

$('derecha').on("swiperight",function(){
	navigator.notification.confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.vibrate(1000);
			break;
			
			case 2:
			navigator.notification.vibrate(1000);
			break;
		}
	},"Aplicacion8","Beep,vibrar,Cancelar");
	
});
	},false);
});
	
	
	
	
	
	
	
	
