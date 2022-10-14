/*
EVENTOS
	- Definición (cambios que suceden en la página)
	- De eventos o Event Handlers (manejador de eventos) (en desuso)
	- Escucha de eventos o Event Listeners
	- El objeto Event
	- Flujo de eventos o Event flow (se ejecuta primero el más específico por defecto)
	- Event bubbing vs Event Capturing (1º el más específico vs 1º el menos específico) (al que se le da true, va primero)
	- event_stopPropagation (detiene la propagación (si hay varios divs) hay que poner e.stopPropagation())

EVENTOS DEL MOUSE
	- click (ocurre con un click)
	- dbclick (con un doble click)
	- mouseover (cuando el puntero se mueve sobre un elemento o sobre sus hijos)
	- mouseout (cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios)
	--- otros----
	- contextmenu (ocurre con un click en el botón derecho en un elemento para abrir un menú contextual)
	- mouseenter (cuando el punterose mueve sobre un elemento)
	- mouseleave (cuando el puntero se mueve fuera de un elemento)
	- mousedown (ocurre cuando se apreta un botón del mouse sobre un elemento)
	- mouseup (cuando un usuario suelta un botón del mouse sobre un elemento)
	- mousemove (cuando el puntero se mueve mientras está sobre un elemento)

EVENTOS DE TECLADO
	- keydown (cuando una tecla se deja de presionar)
	- keypress (cuando se presiona una tecla y se suelta en el mismo elemento)
	- onekeyup (ocurre después de que los dos eventos anteriores hayan concluido consecutivamente)

EVENTOS DE LA INTERFAZ
	- error (cuando sucede un error durante la carga de un archivo multimedia)
	- load (cuando un objeto se ha cargado)
	- beforeload (ocurre antes de que el documento está a punto de descargarse)
	- unload (ocurre una vez que se ha descargado una página)
	- resize (ocurre cuando se cambia el tamaño de la vista del documento)
	- scroll (ocurre cuando se desplaza la barra de deslizamiento de un elemento)
	- select (ocurre después de que el usuario selecciona algún texto de <input> o <textarea>)

TIMMERS (temporizadores)
	- setTimeout()
	- setInterval()
	- clearTimeout()
	- clearInterval()

*/



/* Esta manera ya no se usa

const button = document.querySelector(".button");

button.onclick = () => {
	alert("hola");
}
*/


//Se hace así (1º manera)
/*
const button = document.querySelector(".button");

button.addEventListener("click", saludar);

function saludar() {
	alert("Hola a todos");
}
*/


// (2ºmanera)
/*
const button = document.querySelector(".button");

button.addEventListener("click", ()=>{
	alert("pedro");
});
*/

/*
const button = document.querySelector(".button");

button.addEventListener("click", saludar);

function saludar() {
	alert("Hola a todos");
	button.removeEventListener("click", saludar); // así le sacamos la escucha al botón
}
*/

/*
const button = document.querySelector(".button");

button.addEventListener("click", (e)=>{
	console.log(e.target);
});
*/


// EVENTOS DEL MOUSE

/*Doble click
const button = document.querySelector(".button");

button.addEventListener("dblclick", ()=>{
	alert("Has hecho doble click");
});
*/


/* mouseover
const button = document.querySelector(".button");

button.addEventListener("mouseover", ()=>{
	alert("ratón sobre el botón");
});
*/


// EVENTOS DEL MOUSE
/*
const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const input = document.querySelector(".input-prueba");


input.addEventListener("keydown", (e)=>{
	console.log("Una tecla fue presionada");
});


input.addEventListener("keypress", (e)=>{
	console.log("Un usuario presionó una tecla y la soltó");
});


input.addEventListener("keyup", (e)=>{
	console.log("Una tecla fue soltada");
});
*/

// EVENTOS DE LA INTERFAZ

/*error 
const img = document.querySelector(".img-prueba");


img.addEventListener("error", ()=>{
	console.log("Ha sucedido un error");
});
*/

/* con load verificamos si un sitio se ha cargado correctamante
window.addEventListener("load", ()=>{
	console.log("Ha cargado el body");
})
*/

/* resize
window.addEventListener("resize", ()=>{
	console.log("Se ha cambiado la resolución");
})
*/

/*
window.addEventListener("scroll", ()=>{
	console.log("Se ha hecho scroll");
})
*/


/* --------- UTIL PARA SABER QUÉ SE SELECCIONÓ ------------
const input = document.querySelector(".input-prueba");
const contenedor = document.querySelector(".seleccionado");

input.addEventListener("select", (e)=>{
	let start = e.target.selectionStart;
	let end = e.target.selectionEnd;
	let textoCompleto = input.value;

	contenedor.innerHTML = textoCompleto.substring(start,end);
});
*/


// -------UTIL PARA SABER CUAL FUE LA ÚLTIMA TECLA PULSADA---------
/*
const input = document.querySelector(".input-prueba");
const contenedor = document.querySelector(".seleccionado");

input.addEventListener("keyup", (e)=>{
	let tecla = e.key;
	let nuevoContenido = `La última tecla presionada fue: <b>${tecla}</b>`;

	let listado = [];// este array guarda todas las teclas pulsadas


	contenedor.innerHTML = nuevoContenido;

	listado.push(nuevoContenido);
	console.log(listado);
});
*/

// TEMPORIZADORES

setTimeout(()=>{
	document.write("Hola" + "<br>");
}, 1000);


setInterval(()=>{
	document.write("Hola otra vez"  + "<br>");
}, 2000);


































