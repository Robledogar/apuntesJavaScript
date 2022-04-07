//Acceso a los elementos con la misma etiqueta html (crea un array)

window.onload = function() {
	var div = document.getElementsByTagName("div");
	//alert(div[1].innerHTML); //Esto accede al contenido html

	div[1].style.backgroundColor = "red";//cambia el fondo del div indicado, a rojo
	div[1].style.color = "blue";
	div[1].style.padding = "20px";
	div[1].style.margin = "20px";

	var div3 = div[2];
	div3.innerHTML = "<mark>Contenido cambiado</mark>";//contenido cambiado y subrayado


}
