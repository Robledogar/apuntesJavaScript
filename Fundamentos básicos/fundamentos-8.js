// Accediendo a un determinado carácter de un String
var string = "coche";
var caracter = string[4];
document.write(caracter + "<br>");

// Inclusión de comillas en un String
var string = 'Hola "mundo"';
document.write(string + "<br>");

//Obtener la longitud de un String (propiedad length)
var string = "Cuéntame";
var longitud = string.length;
document.write(longitud + "<br>");

// Encontrar la primera posición dentro de un string .indexOf()
var string = "Busca la primera posición de un string";
var posicion = string.indexOf("un");
document.write(posicion + "<br>");

// Realizar una búsqueda en un String con match()
var string = "Buscando en este string";
if (string.match("este")) {
	document.write("Encontrado <br>");
} else {
	document.write("No encontrado <br");
}

// Reemplazar Strings con el método replace()
var string = "Reemplázame";
var reemplazar = string.replace("Reemplázame", "Reemplazado <br>")
document.write(reemplazar + "<br>");

// Reemplazar Strings con el método replace() //Para reemplazarlos todos
var string = "Reemplázame Reemplázame Reemplázame Reemplázame " ;
var reemplazar = string.replace(/Reemplázame/g, "Reemplazado <br>")
document.write(reemplazar + "<br>");

// Reemplazar Strings con el método replace() 
//Para reemplazarlos todos ignorando mayúsculas y minúsculas
var string = "Reemplázame Reemplázame Reemplázame Reemplázame REEMPLÁZAME" ;
var reemplazar = string.replace(/Reemplázame/gi, "Reemplazado <br>")
document.write(reemplazar + "<br>");

// Convertir un String de minúsculas a mayúsculas con toUpperCase()
var string = "Este string estaba originalmente en minúsculas";
document.write(string.toUpperCase() + "<br>");

// Convertir un String de mayúsculas a minúsculas con toLowerCase()
var string = "ESTE STRING ESTABA ORIGINALMENTE EN MAYÚSCULAS";
document.write(string.toLowerCase() + "<br><br>");

// Convertir un String en un Array con split()
var numeros = "uno dos tres cuatro cinco";
var array = numeros.split(" ");
// hay que indicar el separador (en este caso sería el espacio en blanco)

for(var x = 0; x <= array.length -1; x++) {
	document.write(array[x] + "<br>");
}

// Buscar substrings dentro de un string con substr()
var string = "Hola mundo";
var substring = string.substr(0, 7);
// corta el string entre el 0 (incluido) y el 7 (no incluido)
//si ponemos un número negativo, empezaría a cortar de derecha a izquierda
document.write(substring + "<br>");














//