const PI = 3.14;

export function area(radio) {
	return PI * radio**2;
}


//export{area}; // Esta es otra de las formas de exportar

// Esta sería otra forma, mediante un export default (para poder cambiarle el nombre en el importExport.js) :
/*export default function area(radio) { // sólo un default por documento
	return PI * radio**2;
}
*/

// Prueba para un array:

export let numeros = [1,2,3,4,5,6,7,8,9,10];