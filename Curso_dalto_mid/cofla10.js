/*
A) Las mesas de examen ya finalizaron y el profesor le tomó un último 
examen a Cofla, ya Cofla hizo 2 pruebas más, pero lamentablemente se rompió
el sistema de inscripción de notas, por ende habrá que crear una solución a 
este problema, desarrollando una web que sea capaz de simular su funcionamiento.

- Crear mini interfaz para introducir nota
- Validar que no haya errores
- Se debe promediar la nota del profesor, con otras 2 notas de trabajos
- Si el promedio es mayor a 7/10 -> Aprobó la asignatura
*/

const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click", ()=>{
	let resultado,mensaje;
	

	try {
		prevRes = parseInt(document.getElementById("nota").value);// parseInt para convertir a entero
		if (isNaN(prevRes)) {
			throw "Gracioso";
		}
			
		mensaje = definirMensaje(prevRes);	
		resultado = verificarAprobación(8,8,prevRes);


	} catch(e) {
		resultado = "¿Eres gracioso?";
		mensaje = "He descubierto que intentaste hackear mi web"
	}
	abrirModal(resultado,mensaje);
});

const verificarAprobación = (nota1,nota2,prevRes)=>{
	let promedio = (nota1 + nota2 + prevRes) / 3;
	if(promedio >= 7) {
		return "<span class='green'>APROBADO</span> ";
	}
	return "<span class='red'>SUSPENDIDO</span> ";

}

const definirMensaje = (pr)=> {
	let resultado;
	switch (pr) {
		case 1: resultado = "No puedes ser más inútil"
		break;
		case 2: resultado = "Sacaste un 2"
		break;
		case 3: resultado = "Sacaste un 3"
		break;
		case 4: resultado = "Sacaste un 4"
		break;
		case 5: resultado = "Sacaste un 5"
		break;
		case 6: resultado = "Sacaste un 6"
		break;
		case 7: resultado = "Sacaste un 7"
		break;
		case 8: resultado = "Sacaste un 8"
		break;
		case 9: resultado = "Sacaste un 9"
		break;
		case 10: resultado = "Sacaste un 10"
		break;
		default: resultado = null;
	}
	return resultado;
}




const abrirModal = (res,msg)=>{
	document.querySelector(".resultado").innerHTML = res;
	document.querySelector(".mensaje").innerHTML = msg;
	let modal = document.querySelector(".modal-background");
	modal.style.animation = "aparecer 1s forwards";
	modal.style.display = "flex";
}

