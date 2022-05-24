/*// Esto sería un dato primitivo
console.log(100);
console.log("Hola");
console.log(true);

//Esto serían objetos
console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date());
console.log(typeof new Number(100));
console.log(typeof new String("Hola"));
console.log(typeof new Boolean(true));
*/

//console.log({ }) //Esto es un objeto literal

//Un objeto está compuesto por propiedades. Pero para Javascript son pares "clave-valor"


/*const user = {
	name: "Ryan", //name, lastname y age son "keys" (claves)
	lastname: "Ray",
	age: 30,
	hobbies: ["leer", "programar", "run"],
	direccion: {// Esto es otro objeto
		calle: "Chile",
		ciudad: "gijon"
	}
}

console.log(user);
*/


/*function mostrarNombreCompleto() {
	return "Jose Robledo"
}

const usuario = {
	nombre: "Jose",
	Apellido: "Robledo",
	Edad: 43,
	mostrarNombre: mostrarNombreCompleto
}

console.log(usuario.mostrarNombre());
*/



// Cuando una propiedad tiene una function, ya pasa a llamarse "Método".

/*const coche = {
	modelo: "Audi",
	precio: 50000,
	avanzar: function(){ },
	retroceder: function(){ },
	claxon() { }// también puede ponerse así

}
*/

/*const usuario = {
	nombre: "Jose",
	apellido: "Robledo",
	edad: 43,
	mostrarNombre() {
		//console.log(this.nombre)//este "this" hace referencia a "este" objeto
		return this.nombre +  " " + this.apellido;
	}
}


console.log(usuario.mostrarNombre());
*/


/*const account = {
	number:"1234567890",
	amount: 100,
	deposit(cantidad) {
		this.amount += cantidad
		console.log(this.amount);
	},
	retirar(retiro) {
		this.amount -= retiro
	}
}
account.deposit(50);
account.deposit(25);
account.deposit(300);
console.log(account);

account.retirar(50);
account.retirar(10);
console.log(account);

*/

/* Esta sería una forma muy poco práctica de crear 3 objetos "usuario"
const usuario1 = {
	nombre: "Jose",
	apellido: "Robledo",
	edad: 43,
	mostrarNombre() {
		//console.log(this.nombre)//este "this" hace referencia a "este" objeto
		return `${this.nombre} ${this.apellido}`;
	}
}

const usuario2 = {
	nombre: "Luis",
	apellido: "Martinez",
	edad: 54,
	mostrarNombre() {
		//console.log(this.nombre)//este "this" hace referencia a "este" objeto
		return `${this.nombre} ${this.apellido}`;
	}
}

const usuario3 = {
	nombre: "Silvia",
	apellido: "Fernández",
	edad: 40,
	mostrarNombre() {
		//console.log(this.nombre)//este "this" hace referencia a "este" objeto
		return `${this.nombre} ${this.apellido}`;
	}
}*/
       
/*
// Un constructor es una función que nos permite crear objetos (la primera letra debe ser mayúscula)

function Persona() {
	this.nombre = ""
	this.apellido = ""
	this.edad = ""
	this.mostrarNombre = function() {
		return `${this.nombre} ${this.apellido}`
	}

}


const usuario1 = new Persona()
usuario1.nombre = "Lucas"
usuario1.apellido = "Dalto"
usuario1.edad = "30"
console.log(usuario1);


const usuario2 = new Persona() //Es obligatorio añadir el new
const usuario3 = new Persona()
const usuario4 = new Persona()

console.log(usuario2, usuario3, usuario4)
*/


/*
const persona = new Object() // Este sería un objeto literal

const persona = {} //Este también sería un objeto literal(esta es una forma más óptima)
*/


/* Uso del constructor Object de JavaScript
const user = {
	name: "Luis",
	lastName: "García",
	age: 45,
	showName() {
		return this.name;
	}
}

console.log(Object.values(user));

*/


/* PROTOTYPE (variaciones en en constructor)

function Person(name,lastname) {//podemos pasarle parametros a nuestro objeto
	this.name = name//aquí le indicamos que el parametro name, corresponde a this.name
	this.lastname = lastname
	this.displayName = function() {
		return `${this.name} ${this.lastname}`
	}
}

const john = new Person("John", "Mcmillan");
john.name = "Joe";//también pueden cambiarse los valores
console.log(john.displayName());
const mario = new Person("Mario", "Rossi");
console.log(mario.displayName());


const maria = new Person("María", "Perez");
const jose = new Person("Jose", "Perez");


john.saludar = function() {// Así añadiría un nuevo método al objeto john
	return `Hola soy ${this.name}`
}

console.log(john);
console.log(mario);
console.log(maria);
console.log(jose);

//Así podemos añadir un método que sea común para todos, usando prototype que se lo añadimos directamente al constructor:
Person.prototype.decirHola = function() {
	return "Hola a todos"
}

console.log(maria.decirHola());// aunque no se muestre dentro del objeto, sí que está presente y funcional
//tambíen se podría cambiar los constructores que ya trae JavaScript

*/

/* CLASS

//Es lo mismo hacerlo de las dos siguientes formas:

function Person(name, lastname) {
	this.name = name;
	this.lastname = lastname;
}


class Person {//Esta forma es mas bonita de codificar y más fácil de entender
	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
	}
	greet() {//así se añadiría este método pero al constructor
		return "Hello"
	}
}

const user = new Person("Joe", "Ray");
const user2 = new Person("Ryan", "Ray");

console.log(user,user2);

*/

/* PRINCIPIOS OOP 

 - Principal propósito: crear código modular y reutilizable

 - Capacidad de modular problemas a través de objetos:
   - Asociación (objetos con capacidad de referir a otros objetos)
   - Agregación (un objeto pequeño que es parte de un objeto grande, puede ser utilizado también)
   - Composición (La capacidad de un objeto de referir a otro dependiente)

- Principios que garanticen la modularidad y la reutilidad del código:
   - Encapsulación (codigo encapsulado)
   - Herencia (mecanismo mediante el cual un objeto adquiere caracteristicas de otros objetos)
   - Polimorfismo (Capacidad de procesar objetos distintos para que nos den una respuesta)

*/

/* ASOCIACIÓN 

class Person {
	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
	}
}

const john = new Person("John", "Ray");
const maria = new Person("María", "Perez");

maria.parent = john; //Le estoy añadiendo una relacción a través de una propiedad
console.log(maria);
console.log(john);

*/

/* AGREGACIÓN (asocia objetos que entre sí tienen un rol mayor que otros)
Agregate-> rol mayor
Component-> dentro del de rol mayor


const company = {
	name: "fazt tech",
	employees: []
}


class Person {
	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
	}
}

const john = new Person("John", "Ray");
const maria = new Person("María", "Perez");

company.employees.push(john);
company.employees.push(maria);

console.log(company);

*/

/* COMPOSICIÓN (las partes no son independientes)

const Person = {
	name: "Ryan",
	lastname: "Ray",
	addres: {//objeto fuertemente relaccionado con el objeto contenedor, no tendría sentido sin él
		street: "123 baker street",
		city: "London",
		country: "United Kingdom"
	}
}

console.log(Person);

*/

/* ENCAPSULACIÓN (concentrar datos y funciones ocultando detalles internos)

Razones:
 - simplificar el uso de un objeto
 - simplificar los cambios
 


//La encapsulación consiste en dar métodos para que otro desarrollador no tenga que acceder directamente al objeto que necesite cambiar

function Company(name) {
	let employees = []//Esto es una variable que tendrá el constructor
	this.name = name

	this.getEmployees = function() {
		return employees;
	}

	this.addEmployees = function(nuevoEmpleado) {
		employees.push(nuevoEmpleado);
	}
}

const company = new Company("Coca Cola");
const company2 = new Company("Pepsi");

console.log(company);
console.log(company2);

company.addEmployees({name: "Lucas"});// podría añadirse simplemente "Lucas" ,pero para añadir un objeto en vez de sólo un string, sería así




console.log(company.getEmployees());
console.log(company2.getEmployees());

*/

/* HERENCIA (nos permite crear objetos a partir de uno más genérico

function Person() {
	this.name = ""
	this.lastname = ""
}

function Programmer() {
	this.language = ""
}

Programmer.prototype = new Person();//aquí se le indica la herencia

console.log(Programmer);
console.log(Person);

const programmer = new Programmer();
programmer.name = "Ryan"
programmer.lastname = "Ray"
programmer.language = "javascript"

console.log(programmer)

//Mismo ejemplo utilizando class (es más fácil de entender el código)


class Person {
	constructor(name,lastname,age) {
		this.name = name
		this.lastname = lastname
		this.age = age;

	}
}

class Programmer extends Person{ //Usando class, la herencia se indica aquí
	constructor(language, name, lastname,age) {
		super(name, lastname, age);//imprescindible usar este método para la herencia. Puede recibir los parámetros para añadirlos al constructor
		this.language = language
	}
}

const person = new Person("María", "Perez",25)
const programmer = new Programmer("C++","Jose", "Robledo",43)

console.log(person);
console.log(programmer);

*/

/*POLIMORFISMO (capacidad de algunos objetos de manipular distintos tipos de datos de manera uniforme)*/

/* POLIMORFISMO SOBRECARGA (Un método que puede procesar distintos tipos de datos sin problema)



function countItems(x) {
	return x.toString().length;
}



console.log(countItems(10000));
console.log(countItems("Hola mundo"));

function sum(x=0, y=0, z=0) {//estos son valores por defecto
	return x + y + z
}

console.log(sum(10,20));
console.log(sum(10,20,30));
*/

/*POLIMORFISMO PARAMETRICO (capacidad de un método para trabajar con parametros de cualquir tipo (a este tipo de datos se le conoce cómo generics))*/


function Stack() {
	this.items = []

	this.push = function(item) {
		this.items.push(item)
	}


}

const stack = new Stack();
stack.push("esto es un string");

const stack2 = new Stack();
stack2.push(1000);

console.log(stack);
console.log(stack2);




















