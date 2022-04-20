
	
	function validar() {
	var nombre = document.formulario.nombre;
	if (nombre.value == "") {
		document.getElementById("eNombre").innerHTML = " El campo nombre es requerido";
		return;//este return es para que no continue importante al usar else if
	} else if (nombre.value.length < 3 || nombre.value.length > 25) {
		document.getElementById("eNombre").innerHTML = " El campo nombre debe contener entre 3 y 25 caracteres";
		return;
	} else if (!nombre.value.match(/^[a-z]+$/)) {
		document.getElementById("eNombre").innerHTML = " El campo nombre sólo acepta letras a-z";
		return;
	} else {
		document.getElementById("eNombre").innerHTML = "";
		return;
	}

	//En este ejemplo sólo se está haciendo la parte del campo "nombre"

	//una vez hecho todo, lo enviaríamos con: document.formulario.submit();



}

	window.onload = function() {

		var btn = document.getElementById("btn");
		btn.onclick = function() {
		validar();
	}

}





