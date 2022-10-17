/*
Los datos de cofla y de otros alumnos fueron recibidos y están almacenados, ahora
ahora hay que crear un sistema que muestre esa información y se pueda 
asignar cuando rinde.
- La interfaz debe ser agradable y atractiva
- Debe contener todos los datos de manera estructurada
- El profesor puede seleccionar en cual de las 2 semanas rinde el usuario
- Si el profesor confirma, los datos se deben actualizar y reemplazar el
espacio de selección de semana por la semana seleccionada. 
*/


let alumnos = [{ //Esto es un array con muchos objetos
	nombre: "Lucas Dalto",
	email: "soydalto@gmail.com",
	materia: "Física"
},{
	nombre: "Luis Martinez",
	email: "LuisM@gmail.com",
	materia: "Matemáticas"
},{
	nombre: "Andrea Julia",
	email: "Andre@gmail.com",
	materia: "Lengua"
},{
	nombre: "David Perez",
	email: "perez@gmail.com",
	materia: "Plástica"
},{
	nombre: "Margarita",
	email: "marga@gmail.com",
	materia: "Ingles"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");


/*Nos mostraría todos los objetos
for (alumno in alumnos) {
	console.log(alumnos[alumno])
}
*/


for (alumno in alumnos) {
	let datos = alumnos[alumno];
	let nombre = datos["nombre"];
	let email = datos["email"];
	let materia = datos["materia"];
	let htmlCode = `<div class="grid-item nombre">${nombre}</div>
		<div class="grid-item email">${email}</div>
		<div class="grid-item materia">${materia}</div>
		<div class="grid-item semana">
			<select class="semana-elegida">
				<option value="Sem 1">Semana 1</option>
				<option value="Sem 2">Semana 2</option>
			</select>
		</div>`;

	contenedor.innerHTML += htmlCode;

}


boton.addEventListener("click", ()=>{
	let confirmar = confirm("¿Realmente quieres confirmar las mesas"); //Con confirm sale una pregunta para pedir confirmación
	if (confirmar){
		document.body.removeChild(boton); //esto elimina el botón
		let elementos = document.querySelectorAll(".semana");
		let semanas_elegidas = document.querySelectorAll(".semana-elegida");
		for (elemento in elementos){
			semana = elementos[elemento];
			semana.innerHTML = semanas_elegidas[elemento].value;
	}
	

	}
})



