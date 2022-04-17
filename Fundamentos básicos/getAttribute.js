window.onload = function() {
	var btn_1 = document.getElementById("btn-1");
	btn_1.onclick = obtieneStyle;//el botón activa la función obtieneStyle

	var btn_2 = document.getElementById("btn-2");
	btn_2.onclick = eliminaAtributo;

	var btn_3 = document.getElementById("btn-3");
	btn_3.onclick = crearAtributo;



	function obtieneStyle() {
		var box_style = document.getElementById("box").getAttribute("style");
		alert(box_style);
	}

	function eliminaAtributo() {
		document.getElementById("box").removeAttribute("style");
	}

	function crearAtributo() {
		document.getElementById("box").setAttribute("style", "background: red; color: white; padding: 20px;");//importante poner la coma
	}
}