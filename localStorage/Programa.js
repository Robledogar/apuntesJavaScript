
window.onload = inicio;

function inicio() {
	let datoGuardado =  parseInt(localStorage.getItem("datoRecogido")); //de esta manera convertimos un string en número (localStorage siempre guarda string)
	document.getElementById("boton").onclick = guardarDato;
	document.getElementById("borrado").onclick = borrarDato;
	document.getElementById("cajetin").value = localStorage.getItem("datoRecogido");

	alert(datoGuardado + 4000);
	
}

function guardarDato() {
	let dato = document.getElementById("cajetin").value;
	localStorage.setItem("datoRecogido",dato);
}

 
 function borrarDato() {
 	localStorage.removeItem("datoRecogido");
 }






