// Objeto para guardar una colección de información

let numbers = [1,2,3,4,5,6,7,8,9,211];
let beers = ["Erdinger", "Corona", "Delirium"];
let wines = ["Chardonnay", "Merlot", "Cabernet"];

console.log(numbers.length); //length da la longitud
console.log(numbers[1]);//segunda posición del array
console.log(numbers[numbers.length-1]); //última posición del array
console.log(numbers.at(-2)); //at acepta negativos para empezar por el final

//-------------RECORRER TODO EL ARRAY-------------
console.log("//---------- recorrer todo el array -----------//");
for(let i=0; i<numbers.length; i++) { // o (let i=numbers.length -1; i>=0; i--)
	console.log(numbers[i]);
} 

//También puede hacerse mediante una función:
console.log("//---------- recorrer todo el array con función -----------//");
function show(arr) {
	for(let i=0; i<arr.length; i++) {
		console.log(arr[i]);
	}
}
//llamada a la función
show(numbers);
show(beers);

// Lo muestra en pantalla
function showDom(element, arr) {
	document.getElementById(element).innerHTML = "";
	for(let i=0; i<arr.length; i++) {
		document.getElementById(element).innerHTML += `<div>${arr[i]}</div>`; // Así se añade (+=)
	}
}

showDom("array1",numbers);


//Familiarizarse con el concepto de "Inmutabilidad" (la variable en vez de cambiar crea una copia y te la devuelve) y con el de "Función pura"

console.log("//---------- Métodos Mutables -----------//");
beers.push("Heinekken");//añade al final del array
beers.unshift("Modelo especial");// este método lo añade al principio
beers.splice(2,0,"Fullers");//añade justo en la posición del primer valor y elimina las del segundo valor


//Métodos para eliminar:
let b = beers.pop();//Elimina la última y la retorna
let b2 = beers.shift();// Elimina el primero y lo retorna


showDom("array2",beers);
show(beers);

console.log("Borra y retorna " + b);
console.log("Borra y retorna " + b2);

console.log("//---------- Métodos Inmutable -----------//");
const alcoholicDrinks = beers.concat(wines);// concat() crea un nuevo array con la suma de los dos. Los dos anteriores permanecen inmutables y el nuevo es también independiente

showDom("array1", beers);
showDom("array2", alcoholicDrinks);
show(beers);
show(alcoholicDrinks);

// Puede usarse const con los arrays y luego puede modificarse sin problema


console.log(beers.indexOf("Corona"));// Nos devuelve la posición que ocupa "Corona" dentro de beers. Si no existe nos devuenve -1 (útil para busquedas) (Ojo porque la búsqueda en de tipo extricto)
 
if (beers.indexOf("Coronita") == -1) {
	console.log("No está incluida en la lista");

} else {
	console.log("Está en la lista");
}

const beers2 = beers.slice(0,2);// beers2 será como beers pero sólo las posiciones comprendidas entre la 0 y la 2(incluyendo la 0 pero sin incluir la 2) (pueden usarse negativos para hacerlo al revés)

//beers.fill("pato", 0, 1);// fill es un método mutable(cambia el array original. Sirve para rellenar)

showDom("array1", beers);
showDom("array2",beers2);


console.log("//---------- Uso del operador spread (...) -----------//");
const numbers2 = [1,2,3,4];

function sum(a,b,c,d) {
	return a+b+c+d;
}
console.log(sum(...numbers2));

const arr = [...numbers2, ...beers, "Perro", "Gato", ...numbers, ...beers];// También puede usarse para concatenar de forma mucho más flexible que con concat()
console.log(arr);

const numberCopia = [...numbers2];//Así hacemos una copia totalmente independiente, usando spread
console.log(numberCopia);

numbers2.push(25);
console.log(numberCopia);
console.log(numbers2);



console.log("//---------- Arrays con objetos -----------//");

const cervezas = [{
	name: "Heineken",
	price: 3.50,
	alcohol: 4.5
},

{
	name: "Stella Artois",
	price: 5.50,
	alcohol: 5.0
},

{
	name: "Corona",
	price: 2.50,
	alcohol: 4.5
},

{
	name: "Budweiser",
	price: 6,
	alcohol: 6.5
},

];


function showDom2(element, arr) {
	document.getElementById(element).innerHTML = "";
	for(let i=0; i<arr.length; i++) {
		document.getElementById(element).innerHTML += `<div>${arr[i].name} ${arr[i].price} ${arr[i].alcohol}</div>`; // Así se añade (+=)
	}
}

showDom2("array1", cervezas);
console.log(cervezas);


console.log("//---------- Funciones de primer orden y de orden superior(...) -----------//");
// Una función de primer orden es una función que se puede mandar por parámetros
// Una función superior es una función que puede recibir otras funciones como parámetros


let fn = function() { // Esta es una función de primer orden
	console.log("Hello");
}

fn();// Llamada a la función a mediante la variable que la contiene


function some(f) {//Acepta una función como parámetro(por eso esta es una función de orden superior)
	console.log("algo antes");
	f();
	console.log("algo después");
}

some(fn); //Llamamos a la función some y le pasamos como parámetro la variable que contiene la función que dice Hello


console.log("//---------- Ejemplo de función flecha -----------//");

let variableF = () => console.log("Esta es una función flecha"); // Si llevase más lineas de código habría que ponerlas todas entre llaves

variableF();


console.log("//---------- USO DEL FOR OF PARA ITERACIONES -----------//");
//for of se usa para iterar objetos de forma mucho más simple

function showDom3(element, arr) {
	document.getElementById(element).innerHTML = "";
	for(let e of arr) {//sólo hay que indicar el nombre de la variable y el array a iterar
		document.getElementById(element).innerHTML += `<div>${e.name} ${e.price} ${e.alcohol}</div>`; // Así se añade (+=)
	}
}

showDom3("array2", cervezas);
console.log(cervezas);

console.log("//---------- USO DEL ForEach PARA ITERACIONES -----------//");

cervezas.forEach((ele)=>console.log(ele));

console.log("//---------- USO DEL sort() PARA ORDENAR UN ARRAY -----------//");
//sólo para números
const num = [2,4,51,3,66,];

num.sort();

show(num);

// Para ordenar un array de objetos sería así:

cervezas.sort((a,b) => a.price - b.price);//ejemplo de orden por la propiedad precio
show(cervezas);

//para hacerlo con nombres sería así:

cervezas.sort((a,b) => {
	if (a.name > b.name) {
		return 1;
	}
	if (a.name < b.name) {
		return -1;
	}

	return 0;
});

show(cervezas);

console.log("//---------- USO DEL find() PARA BÚSQUEDAS -----------//");
//Devuelve el objeto completo o undefined
const beer = cervezas.find(element => element.name === "Corona"); // (element => element.alcohol < 8); así nos buscaría el primer elemento con menos de 8 grados de alcohol
console.log(beer);

console.log("//---------- USO DEL filter() PARA BÚSQUEDAS -----------//");
//Devuelve todos los objetos que cumplan o undefined

const cerveza = cervezas.filter(element => element.alcohol === 4.5); // (element => element.alcohol < 8); así nos buscaría el primer elemento con menos de 8 grados de alcohol
console.log(cerveza);

console.log("//---------- USO DEL every() PARA SABER SI TODOS CUMPLEN LA CONDICIÓN -----------//");

let foo = (e) => e.price > 3;
console.log(cervezas.every(foo));

console.log("//---------- USO DEL some() PARA SABER SI AL MENOS UNO CUMPLE -----------//");

let fn2 = (e) => e.price == 2.5;
console.log(cervezas.some(fn2));

console.log("//---------- USO DEL reverse() PARA INVERTIR EL ARRAY -----------//");
cervezas.reverse();
console.log(cervezas);

console.log("//---------- USO DEL map() PARA ITERAR, HACER CAMBIOS Y DEVOLVER OTRO ARRAY CAMBIADO  -----------//");
//es un método inmutable
const beerMap = cervezas.map(element=> {
	return {
		name: element.name,
		price: element.price * 2,//Aquí está el cambio, *2
		alcohol: element.alcohol
	}
});

show(beerMap);

console.log("//---------- USO DEL reduce() PARA HACER ALGO Y DEVOLVER UN SOLO VALOR -----------//");

const suma = beerMap.reduce((acc, curr)=> acc + curr.price, 0); //acc=acumulado curr=actual
console.log(suma);//sumaría todos los precios

console.log("//---------- FUNCIONES DENTRO DE UN ARRAY -----------//");

const fns = [
	()=>console.log("soy la primera función"),
	()=>console.log("soy la segunda función"),
	()=>console.log("soy la tercera función"),
];

fns.forEach(element => element());
fns