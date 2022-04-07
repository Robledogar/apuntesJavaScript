window.onload = function() {
	var btn = document.getElementById("btn");
	btn.onclick = function() {
		var clase = document.getElementsByClassName("clase");

		for(x=0; x<clase.length; x++) {
			clase[x].style.backgroundColor="green";
			clase[x].style.color="white";
		}
	}
}