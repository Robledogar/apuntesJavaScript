// length: regresa el número total de elementos de un array
var array = ["uno", "dos", "tres", "cuatro"];
var total = array.length;

document.write(total + "<br>");

//indexOf: busca la posición de un elemento
var array = ["raul", "fernando", "manuel"];
var posicion = array.indexOf("fernando");
document.write(posicion + "<br>");

//join: Une todos los elementos de un array en un string a partir
//del pegamento indicado
var array = ["rojo", "azul", "verde"];
var string = array.join("-");
document.write(string + "<br>");

//pop: Elimina el último elemento de un array
var array = ["uno", "dos", "tres", "eliminar"];
array.pop();
for (var x = 0; x < array.length; x++) {
	document.write(array[x] + "<br>");
}

// push: Añade un nuevo elento al final del array
var array = ["uno", "dos", "tres", "ultimo"]; 
array.push("añadido");
for (var x = 0; x < array.length; x++) {
	document.write(array[x] + "<br>");
}

//shift: Elimina el primer elemento de un array
var array = [1,2,3,4,5,6,7,8];
array.shift();
for (var x = 0; x < array.length; x++) {
	document.write(array[x] + "<br>");
}

//unshift: añade un nuevo elemento al principio de un array
var array = [1,2,3,4,5,6,7,8];
array.unshift(0);
for (var x = 0; x < array.length; x++) {
	document.write(array[x] + "<br>");
}

//sort: Ordena los elementos de un array
var array = ["alvaro", "manuel", "lucas", "marta", "Pedro"];
array.sort();
for (var x = 0; x < array.length; x++) {
	document.write(array[x] + "<br>")
}

//ordenar números (sin la función pcolocaría el 1000 el primero)
var array = [9,3,2,6,8,1000];
array.sort(function(a, b){return a-b});
for (var x = 0; x < array.length; x++) {
	document.write(array[x] + "<br>");
}

//toString: convierte un array en un string
var array = ["uno", "dos", "tres", "cuatro", "cinco"];
var string = array.toString();
document.write(string + "<br>");

//reverse: Invierte las posiciones de los elementos de un array
var array = [9,8,7,6,5,4,3,2,1];
array.reverse();
for (var x = 0; x < array.length; x++) {
	document.write(array[x] + "<br>");
}










