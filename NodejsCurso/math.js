/*Esto sería un módulo (divisiones de nuestra aplicación para mantenerlas separadas)*/
const Math = {}; /*creamos el módulo como un objeto*/

function add(x1, x2) {
	return x1 + x2;
}

function substract(x1, x2) {
	return x1 - x2;
}

function multiply(x1, x2) {
	return x1 * x2;
}

function divide(x1, x2) {
	if(x2==0) {
		console.log("No se puede dividir por 0")
	} else {
		return x1 / x2;
	}
}

/*
exports.sumar = add;  hay que usar exports para que esta función pueda usarse fuera
exports.restar = substract;
exports.multiplicar = multiply;
exports.dividir = divide;
*/

/* Estas serían propiedades del objeto: */
Math.sumar = add;
Math.restar = substract;
Math.multiplicar = multiply;
Math.dividir = divide;

module.exports = Math; /* Así exportamos el módulo completo (puede ser objeto, variable, función, etc)*/


