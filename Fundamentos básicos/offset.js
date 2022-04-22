//Esta propiedad nos indica la posición de un objeto. (Es este caso del div)


window.onload = inicio;

function inicio() {
	var contenedor = document.getElementById("contenedor");
	var left = contenedor.offsetLeft;
	var top = contenedor.offsetTop;

	alert("Left: " + left + " Top: " + top);
}