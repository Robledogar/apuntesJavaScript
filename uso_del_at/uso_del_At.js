//.at() es mucho más versatil que el selector normal de strings y arrays

let string = "Hola este es un string para probar el uso de at";
let arrayFrutas = ["Limón", "Pera", "Manzana", "Naranja"];


document.write(string.at(1) + "<br>");//Esto muestra sólo la letra "o";

document.write(string.at(-4) + "<br>");//Esto muestra sólo la letra "e" (empieza por el final);

document.write(arrayFrutas.at(1) + "<br>");//Esto muestra "Pera";

document.write(arrayFrutas.at(-1) + "<br>");//Esto muestra "Naranja";
