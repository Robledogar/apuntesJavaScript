// https://www.w3schools.com/jsref/obj_window.asp

var width = window.screen.width;
var height = window.screen.height;
window.document.write(width + " x " + height + "<br>");

var navegador = window.navigator.userAgent;
window.document.write(navegador + "<br>");

//Redirecciones:
/*
window.location.href = "https:/www.google.com";
*/

//para abrir una ventana emergente(si sólo dejamos lo de Google abre otra ventana)
/*function openWindow() {
	var ventana = window.open("https:/www.google.com", "_blank", "width=500, height=700");
}
*/


//Esta funcion abre una ventana y añade un párrafo en ella
function createWindow () {
	var ventana = window.open("","","width=300, height=400");
	ventana.document.write("<p> Hola estoy abriendo una ventana</p>")

}



