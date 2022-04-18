window.onload = function() {
	var btn_radio = document.getElementById("btn_radio");
	btn_radio.onclick = function() {
		var input_radio = document.formulario.input_radio;//esto sería un array con todos los input_radio
		for(x=0 ; x<input_radio.length; x++) {
			if (input_radio[x].checked) {
				alert(input_radio[x].value);//así obtenemos el value del input que esté checked
			}
		}
	}

	var btn_checkbox = document.getElementById("btn_checkbox");
	btn_checkbox.onclick = function() {
		if (document.formulario.input_checkbox.checked) {//nos devuelve true o false
			alert("Ok, has aceptado los términos");
		} else {
			alert("Mal, debes aceptar los términos");
		}
	}
}