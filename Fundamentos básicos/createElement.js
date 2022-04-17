//Agrega nuevos elementos

window.onload = function() {
	var button = document.createElement("button");
	button.innerHTML = "CreateElement";
	button.setAttribute("id","btn");

	//document.body.appendChild(button); esto lo agregaría al body
	document.getElementById("contenedor").appendChild(button); //esto lo agregaría al "contenedor"


	button.onclick = function() {
		//document.body.removeChild(button); esto lo borraría del body
		document.getElementById("contenedor").removeChild(button); // Esto lo borraría del div "contenedor"
	}
}



