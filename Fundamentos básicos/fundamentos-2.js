/* Operadores aritméticos

Suma +
Resta -
Multiplicación *
División /
Resto %

*/

var numero1 =12;
var numero2 = 5;

var total = numero1 + numero2;
 document.write("El total de " + numero1 + " y " + numero2 + " es igual a " + total + "<br>");

 numero1 = 15;
 numero1 += 1; //esto equivale a numero1 = numero1 + 1;
 document.write(numero1 + "<br>");

 /* Operadores relacionales
 > Mayor que
 >= mayor o igual
 < menor que
 == igual
 != distinto
 */

 var numero1 = 12;
 var numero2 = 11;

 if (numero1 == numero2) {
 	document.write("Son iguales");

 } else {
 	document.write("Son diferentes" + "<br>");

 }


 /* Operadores lógicos

 AND && (ambas condiciones son ciertas)
 OR || (al menos una de las condiciones es cierta)
 Negación ! (La condición no es cierta)
 */

 var numero1 = 12;
 var numero2 = 12;
 var numero3 = 10;
 var numero4 = 8;

 if (numero1 == numero2 || numero3 < numero4) {
 	document.write ("Es correcto");

 } else {
 	document.write ("no es correcto");

 }
