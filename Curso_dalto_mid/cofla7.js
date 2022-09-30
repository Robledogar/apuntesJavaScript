//Sistema que nos indique el alto y el ancho máximo de la pantalla
/*
let alto = window.screen.availHeight; //alto total de la pantalla (screen.height sería para el ancho máximo de ventana maximizada)
let ancho = window.screen.availWidth; //ancho total de la pantalla


comprar = confirm(`el alto es: ${alto}, el ancho es: ${ancho}`);


if (comprar) {
	alert("Compra realizada exitosamente");
} else {
	alert ("Compra cancelada");
}
*/



//Sistema que nos permita ver estos datos pero con la pantalla completa

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `Hostname: <b>${hostname}</b><br>`;
html += `Pathname: <b>${pathname}</b><br>`;
html += `URL Completa: <b>${href}</b><br>`;

document.write(html);