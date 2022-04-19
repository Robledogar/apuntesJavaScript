window.onload = function() {
	document.onmousemove = function(e) {
		var contenedor = document.getElementById("contenedor");
		contenedor.innerHTML = "left: " + e.pageX + " " + "Top: " + e.pageY;//X e Y deben estar en mayuscula

		//con esto posicionamos la caja según la posición del cursor
		contenedor.style.left = e.pageX + "px";
		contenedor.style.top = e.pageY + "px";
	}
}