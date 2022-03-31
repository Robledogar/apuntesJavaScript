window.onload = function() {
	document.getElementById("box-1").innerHTML = "<strong>Cambiando el contenido con innerHTML</strong>";
	var box_1 = document.getElementById("box-1").innerHTML;
	//alert(box_1);

	
	/*Esto cambiaría el color de la fuente a naranja*/
	var box_2 = document.getElementById("box-2");
	box_2.style.color = "orange";

	/*No hay que poner background-color*/
	box_2.style.backgroundColor = "black";
	box_2.style.fontSize = "25px";

	/*Con esto sacaríamos el valor del campo de texto*/
	var campo = document.getElementById("campo");
	//alert(campo.value);

	/*Esto cambiaría el valor*/
	campo.value = "valor cambiado";

}