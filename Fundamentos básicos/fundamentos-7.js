function coche() {
	/* Objeto que se referencia a sí mismo */

	var self = this;

	self._color = "Azul";
	self._puertas = 5;
	self._velocidad = 200;

	coche.prototype.color = function(color) {
		if (color == undefined) {
			self._color = self._color;
		} else {
			self._color = color;
		}
		return self._color;
	}

	coche.prototype.puertas = function(puertas) {
		if (puertas == undefined) {
			self._puertas = self._puertas;
		} else {
			self._puertas = puertas;
		}
		return self._puertas;
	}

	coche.prototype.velocidad = function(velocidad) {
		if (velocidad == undefined) {
			self._velocidad = self._velocidad;
		} else {
			self._velocidad = velocidad;
		}
		return self._velocidad;
	}
 
	coche.prototype.ruedas = function() {
		var ruedas = 4;
		return ruedas;
	}


}