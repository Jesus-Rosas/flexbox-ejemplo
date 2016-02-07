$(document).ready(init);
function init(){
	//var altura = window.height;
	var altura = window.innerHeight;
	var anchura = window.innerWidth;

	//image principal
	$('.principal').css({
		'width': 100 + "%",
		'height': 100 + "%"
	});
	
	//fondo negro

	$('.container-flex').css({
		'width' : 100 + "%",
		'height' : altura + "px"
	});
	
}