/* Un bucle es especialmente útil para recorrer los elementos de los Arrays*/

/* For */

let paises = ["España", "Argentina", "Colombia", "Uruguay", "Peru"];

for (var x = 0; x <= paises.length-1; x++) {
	document.write(paises[x] + "<br>");
}

/* For in */

let productos = {
	zapatos: 30,
	camisas: 15,
	pantalones: 50
}

for (var llave in productos) {

	document.write(llave + " : " + productos [llave] + "€" + "<br>");
}

/* While */

var nombres = ["Pepe", "Manuel", "María"];
var x = 0;

while (x <= nombres.length-1) {
	document.write(nombres[x] + "<br>");
	x++;

	if (x == 1) {
		
		break;
	}
}