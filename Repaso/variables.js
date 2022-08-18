//Contenedor de un valor
//Guarda sólo en la RAM
/*
var nombre;

nombre = prompt("Ingresa tu nombre", "Valor");
edad = 43;

document.write(nombre + " " + edad);
*/

// Diferencia entre const var y let:

/*function foo() {
	
	console.log(a);
	var a = 5;

}

foo();
*/

// const no permite cambios durante el programa

// var permite crear variables con alcance a su función más cercana.
// además inicia como undefined si no le damos un valor al iniciarla.

// let permite definir variables con un alcance a su bloque más cercano.
// let necesita tener un valor definido al iniciarlo.



function foo() {
	for(var i=0; i<10; i++) {
		var mensaje = "Hola"; // En este caso, el console.log imprimirá la variable (Se expande a toda la función (Más allá de la función, no)). Con let no lo haría (let restringe a la estructura contenedora que lo contiene).
		console.log(i);
	}

	console.log(mensaje);
	

}
console.log(mensaje);

foo();









