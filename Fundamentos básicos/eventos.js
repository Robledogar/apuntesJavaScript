//https://www.w3schools.com/jsref/dom_obj_event.asp


window.onload = function() {
	var btn_1 = document.getElementById("btn-1");
	btn_1.onclick = function() {
		var box_1 = document.getElementById("box-1");
		box_1.innerHTML = "<mark>Has hecho click sobre el botón</mark>";
		//mark sirve para marcar con fondo amarillo el texto
	}

	var campo = document.getElementById("campo");
	campo.onfocus = function() {
		//alert("El campo de texto ha obtenido el foco");
	}

	campo.onkeypress = function(e) {
		var tecla = String.fromCharCode(e.charCode);
		var box_2 = document.getElementById("box-2");
		box_2.innerHTML += tecla;
	}
}

//Un evento interesante es el onmouseover (se activa al pasar el ratón por encima)




