// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");

// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]

// Podemos tener varios conjuntos de datos:
const datosVentas2018 = {
    label: "Ventas 2018",
    data: [500, 900, 134, 2000], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(211,93,110, 0.2)',// Color de fondo
    borderColor: 'rgba(211,93,110, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};
const datosVentas2019 = {
    label: "Ventas 2019",
    data: [700, 700, 4500, 2500], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(209,234,163,0.5)',// Color de fondo
    borderColor: 'rgba(209,234,163,1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

const datosVentas2020 = {
    label: "Ventas 2020",
    data: [5000, 1500, 8000, 5102], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 2,// Ancho del borde
};

const datosVentas2021 = {
    label: "Ventas 2021",
    data: [10000, 1700, 5000, 5989], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Color de fondo
    borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};


new Chart($grafica, {
    type: 'line',// Tipo de gráfica (line, bar)
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2018,
            datosVentas2019,
            datosVentas2020,
            datosVentas2021
            // Aquí más datos...
        ]
    },
    options: {

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true // Para que empiece en el 0
                }
            }],
        },
    }
});


let numero = 5000;
// Gráficas circulares:
// Obtener una referencia al elemento canvas del DOM
const $grafica2 = document.querySelector("#grafica2");
// Las etiquetas son las porciones de la gráfica
const etiquetas2 = ["Ventas", "Donaciones", "Trabajos", "Publicidad"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: [1500, 400, numero, 7000], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgba(163,221,203,0.4)',
        'rgba(232,233,161,0.4)',
        'rgba(230,181,102,0.4)',
        'rgba(229,112,126,0.4)',
    ],// Color de fondo
    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
    ],// Color del borde
    borderWidth: 0,// Ancho del borde
};
new Chart($grafica2, {
    type: 'pie',// Tipo de gráfica. Puede ser doughnut o pie
    data: {
        labels: etiquetas2,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
    },

});


  








