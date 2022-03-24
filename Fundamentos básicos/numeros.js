// El objeto Math

//Propiedad para obtener el número PI
const pi = Math.PI;
document.write(pi + "<br>");

//Obtener la raíz cuadrada de un número
var raizCuadrada = Math.sqrt(4);
document.write(raizCuadrada + "<br>");

//Redondear un número en base a su parte decimal
var numero = Math.round(3.45);
document.write(numero + "<br>");

//Quitar la parte decimal de un número
var numero = Math.floor(4.15);
document.write(numero + "<br>");

//Limitar el número de decimales
var decimal = 6.125567565845768945768097;
document.write(decimal.toFixed(2) + "<br>");

//Obtener un número aleatorio(en este caso saldrá un número entre 1 y 10)
var aleatorio = Math.floor(Math.random()*10) + 1;
document.write(aleatorio + "<br>");

//Convertir un nñumero decimal a integer
var decimal = 4.15;
var integer = parseInt(decimal);
document.write(integer + "<br>");

//Sumar dos números decimales y obtener un valor integer (usar parseFloat para sumar los decimales)
var decimal1 = 12.12;
var decimal2 = 12.45;
var total = parseInt(decimal1 + decimal2);
document.write(total + "<br>");

//Prioridad en las operaciones matemáticas
var operacion = 12 + 12 / 2;
document.write(operacion + "<br>");

var operacion = (12 + 12) / 2;
document.write(operacion + "<br>");


