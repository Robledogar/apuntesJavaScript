var nombres = ["Pepe", "Jose", "Mario", "Antonio"];
document.write(nombres[0] + "<br>")
document.write(nombres[1] + "<br>")
document.write(nombres[2] + "<br>")
document.write(nombres[3] + "<br>")

/*Array asociativo */

let moneda = {
	España:"Euro",
	EEUU:"Dolar",
	Argentina:"Peso",
	Chile:"Pesos"
}

document.write(moneda["España"] + "<br>") ;

/* Array multidimensional (arrays dentro de arrays)*/

let usuarios = [["Pepe", 23], ["Manuel", 30], ["Fernándo", 20]];
document.write("Nombres: " + usuarios [0] [0] + " <br> Edad: " + usuarios [0] [1]);