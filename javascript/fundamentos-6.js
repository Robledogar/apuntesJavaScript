mensaje = function() {
	return "Hola soy una funcion";
}

document.write(mensaje() + "<br>");


function otro_mensaje() {
	var string = "Hola soy otra funcion";
	return string + "<br>";
}

document.write(otro_mensaje());

function suma(numero1, numero2) {
	var sumar = numero1 + numero2;
	return sumar;

}

document.write(suma(12, 12) + "<br>");


/* Parámetros opcionales */

function multiplicar(numero, opcional) {

	if (opcional == undefined) {
		opcional = 2;

	}
	return numero * opcional;
}

document.write(multiplicar(2, 10) + "<br>");



function imprime_array(array) {
	var elementos = '';

	for (var x = 0; x <= array.length-1; x++) {
		elementos += array[x] + "<br>"
	}
	return elementos;
}

document.write(imprime_array(["Uno", "Dos", "Tres", "Cuatro"]) + "<br>");