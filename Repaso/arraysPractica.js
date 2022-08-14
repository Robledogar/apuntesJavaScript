let armas = ["Espada", "Hacha", "Ballesta", "Pica", "Arco", "Mandoble"];
let valorFuerza = [23,34,47,588,69,70];

document.getElementById("contenedor1").innerHTML = "Contenedor 1"
document.getElementById("contenedor2").innerHTML = "Contenedor 2"
document.getElementById("contenedor3").innerHTML = "Contenedor 3"
document.getElementById("contenedor4").innerHTML = "Contenedor 4"

//Función que devuelve un elemento aleatorio del array tras indicarle el array como parámetro
function generarNumeroRandom(array) {
	let numeroRandon = Math.floor(Math.random()* array.length);
	return array[numeroRandon];
}


document.getElementById("contenedor1").innerHTML = generarNumeroRandom(armas);
document.getElementById("contenedor2").innerHTML = generarNumeroRandom(valorFuerza);




document.getElementById("contenedor1").insertAdjacentHTML("beforeend",
		`<div class="carta">
			<button id="meterDato">Meter dato</button>
			<input id="dato" type="text" placeholder="Introducir dato">
				
		</div>`);

document.getElementById("meterDato").onclick = meterEnArray;

function meterEnArray() {
	armas.push(document.getElementById("dato").value);
	document.getElementById("contenedor3").innerHTML = "";
	
	for(let i=0; i<armas.length; i++) {

		document.getElementById("contenedor3").innerHTML += `<div>${armas[i]}</div>`;
	}
	document.getElementById("dato").value = "";

	document.getElementById("contenedor2").innerHTML = "";
armas.forEach(element => document.getElementById("contenedor2").innerHTML += element + '<br>' + '<br>');
}

const juegosDeMesa = [
	{
		nombre: "Colonos de Catan",
		precio: 45,
		puntuacion: 7.7,
		jugadores: 4
	},

	{
		nombre: "Carcassonne",
		precio: 30,
		puntuacion: 7,
		jugadores: 5
	},

	{
		nombre: "7 Wonders Duel",
		precio: 25,
		puntuacion: 8.8,
		jugadores: 2
	},

	{
		nombre: "Dominant Species",
		precio: 60,
		puntuacion: 9,
		jugadores: 6
	},
	{
		nombre: "Dixit",
		precio: 40,
		puntuacion: 6,
		jugadores: 8
	},

];
document.getElementById("contenedor4").innerHTML = "";
//document.getElementById("contenedor4").innerHTML = juegosDeMesa[0].puntuacion;
console.log(juegosDeMesa);




juegosDeMesa.push({nombre: "Fresco",precio: 55, puntuacion: 9.5, jugadores: 4});

for (let x of juegosDeMesa) {
	document.getElementById("contenedor4").innerHTML += `<div> Nombre: ${x.nombre} <br> Precio:${x.precio} <br> Puntuación BGG: ${x.puntuacion} <br> Nº máximo de jugadores: ${x.jugadores}</div>`
}