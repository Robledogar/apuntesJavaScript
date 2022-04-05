window.onload = function() {

	var campo = document.getElementsByName("campo");
	//alert(campo.length); nos devuelve cuantos hay con el nombre "campo"

	var btn_1 = document.getElementById("btn-1");
	btn_1.onclick = function() {
		alert(campo[0].value);

		campo[0].style.height ="30px";
		//Esto modificaría el estilo del primer campo

	}
	
	var btn_2 = document.getElementById("btn-2");
	btn_2.onclick = function() {
		alert(campo[1].value);

	}

	var campo3 = document.formulario.campo3;
	alert(campo3.value);



	}