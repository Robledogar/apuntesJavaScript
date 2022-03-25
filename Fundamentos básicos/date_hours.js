//Date (fechas)

//Date() --> devuelve la fecha en este formato (Fri Mar 25 2022 11:54:51 GMT+0100 (hora estándar de Europa central))

//getDay() --> Retorna el día de la semana a partir de un dígito del 0 al 6 (0 sería el Domingo)

//getDate() --> Retorna el día del mes a partir de un dígito del 1 al 31

//getMonth() --> Retorna el mes del año a partir de un dígito del 0 al 11

//getFullYear --> Retorna el año con 4 dígitos

var fecha = new Date();
//Muy importante poner el "new" sólo con Date no funciona

var diaSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
var mes = ["Enero","Febrero","Marzo","Abril","Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre", "Noviembre","Diciembre"];
var dameFecha = "Hoy " + diaSemana[fecha.getDay()] + ", " + fecha.getDate() + " de " + mes[fecha.getMonth()] + " de " + fecha.getFullYear() + "<br>";
 document.write(dameFecha);

 //Hora:

 //getHours() --> retorna la hora

 //getMinutes() --> Retorna los minutos

 //getSeconds() --> retorna los segundos


 var hora = new Date();
 dameHora = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();

 document.write(dameHora + "<br>");

 if (hora.getHours() == 12) {
 	document.write("La hora está dentro de las doce");
 } else {
 	document.write("no son las 12 y algo");
 }

