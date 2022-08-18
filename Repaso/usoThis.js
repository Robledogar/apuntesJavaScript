// THIS es un objeto que hace referencia al contexto en el que se está ejecutando la función.

/* script que no entendí:
var obj = {
	foo: function () { return 'foo'},
	bar: function () {
		document.addEventListener('click', event => this.foo());
	}
}
*/

// Explicación de JAB:



/* Esta sería la idea de la manera tediosa de hacerlo (49 veces esto)
window.onload = inicio;

function inicio() {
	
	for (let i=0; i<40; i++) {
		document.querySelector("#caja").innerHTML += `<div class="cuadro">${i+1}</div>`;
		document.querySelectorAll(".cuadro")[0].onclick=colorear;
	}


}

function colorear() {
	document.querySelectorAll(".cuadro")[0].style.backgroundColor="red";
	document.querySelectorAll(".cuadro")[0].style.color="white";
}
*/

//Forma óptima usando this:

window.onload = inicio;

function inicio() {
	
	for (let i=0; i<49; i++) {
		document.querySelector("#caja").innerHTML += `<div class="cuadro">${i+1}</div>`;
		document.querySelectorAll(".cuadro")[0].onclick=colorear;
	}

	for (let i=0; i<49; i++) {
		document.querySelectorAll(".cuadro")[i].onclick = colorear;
	}


}

function colorear() {
	if (this.style.color!="white") {
		this.style.backgroundColor="red"; //this equivale al elemento sobre el que he hecho click
		this.style.color="white";
		let numero = this.innerHTML;
		document.querySelector("body").insertAdjacentHTML('beforeend',`<div class="cuadro">${numero}</div>);

	} else {
		this.style = null; //Este null elimina cualquier propid¡edad creada con JavaScript y cogería las del CSS
	}
	
}












