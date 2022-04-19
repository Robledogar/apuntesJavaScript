window.onload = function() {
	window.onscroll = function(e) {
	var contenedor = document.getElementById("contenedor");
	contenedor.innerHTML = "Top: " + e.pageY;

	if (e.pageY > 50) {
		document.getElementById("regresar").style.display ="block";//para que se haga visible
	} else {
		document.getElementById("regresar").style.display ="none";
	}
}


var regresar = document.getElementById("regresar");
regresar.onclick = function() {
	window.scrollTo(0,0);
}
}

//por alguna razón no funciona el evento onscroll




/*window.onload = function() {
	document.onscroll = function(e) {
		var contenedor = document.getElementById("contenedor");
		contenedor.innerHTML = "Top: " + e.pageY;
	}
}*/