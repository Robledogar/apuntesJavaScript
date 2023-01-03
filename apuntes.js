let nombre = "Pedro";

const promesa = new Promise((resolve,reject)=>{
	if (nombre !== "Pedro") reject ("Lo siento el nombre no es Pedro");
	else resolve(nombre)


});

console.log(promesa);

// Las promesas tienen los datos encapsulados

promesa.then() // así sí accederíamos