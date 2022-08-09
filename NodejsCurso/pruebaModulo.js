/*
sobre la Terminal:
cd
ls
node archivo.js
ctrl + C
npm init (para crear el package.json)
npm install (para instalar la aplicación en una nube)


const os = require("os"); /* Es buena práctica ponerle a la constante el nombre del módulo requerido

console.log(os.platform());
console.log(os.release());
console.log('Free mem: ', os.freemem(), 'bytes');
console.log('Total mem: ', os.totalmem(), 'bytes');

*/

// Este método nos permite interactuar con los archivos




/*const fs = require('fs');

fs.writeFile('./texto2.txt','linea uno', function (err) { //writeFile crea un archivo (recibe parámetros numbre, contenido y un callback (función que se ejecuta al final))
	if (err) {
		console.log(err);
	}
	console.log('Archivo creado');

});

console.log('última línea de código');

//A esto se le llama código asíncrono(node.js delega) (lo contrario sería código bloqueante (hata que este no termine, no avanza el programa)


fs.readFile('./texto.txt', function(err, data) {
	if(err) {
		console.log(err);
	}
	console.log(data.toString()); //Para que no nos devuelva los datos en crudo
});
*/

const http = require('http');
const colors = require('colors');

http.createServer(function(req,res) {
	res.writeHead(200, {'Content-type': 'text/html' });//codigo que significa ok (recordar el 404)
	res.write('<h1>Hola mundo desde Node.js</h1>');
	res.end();
}).listen(3000);















