window.onload = inicio;




function inicio() {
	var btn = document.getElementById("btn");
	btn.onclick =function() {

		var imagen = document.getElementById("imagen").files;//será un array con todos los archivos que se estén subiendo

		if (imagen.length == 0) {
			alert("La subida de imágenes es requerida");
		} else {
			for (x = 0; x < imagen.length; x++) {
				if(imagen[x].type != "image/png" && imagen[x].type != "image/jpg") {
					alert("El archivo " + imagen[x].name + " no es una imagen");
					return;
				}
			}
		}



		document.formulario.submit();
	}
}