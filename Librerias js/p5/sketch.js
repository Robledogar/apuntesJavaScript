/*function setup() {
  createCanvas(600, 600);
  stroke(255);
  strokeWeight(7);
}


function draw() {
  background(100);
  point(300,200);
  line(300,0, 300,600);
  triangle(100,500, 300,100 ,500,500);
  quad(100,100 ,200,100 ,180,300, 80,300);
  rect(300,300 ,200,100);
  ellipse(100,50,50,50);
  arc(520,420,100,100,radians(40),radians(320));
}



/*if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 3, 3);
  }

  function setup() {
  createCanvas(400, 400);
  strokeWeight(8);
}
function draw() {
  background(204);
  line(mouseX, mouseY, pmouseX, pmouseY);
}


function setup() {
  createCanvas(500, 500);
  fill(0, 102);
  background(204); // Draw once to give a little color
}
function draw() {
} // Empty draw() keeps the program running
function mousePressed() {
  rect(mouseX-15, mouseY-15, 33, 33);
}



function setup() {
  createCanvas(500, 500);
  noLoop();/*Desactiva el bucle automático de la función draw()
}
function draw() {
  background(204);
  line(mouseX, 0, mouseX, 500);
  line(0, mouseY, 500, mouseY);
}
function mousePressed() {
  redraw(); // Run the code in draw one time
}


function setup() {
  createCanvas(600, 600);
  
}
function draw() {
  background(100);
  strokeWeight(20);
  strokeJoin(ROUND);/*O BEVEL para figuras
  strokeCap(SQUARE);/*Para lineas
  rectMode(CORNERS); /*Cambia la interpretación de los parámetros(CENTER,CORNERS,RADIUS) 
  ellipseMode();/*Como la anterior pero para elipses

  line(100,100,200,200);
}
*/

/*--------------------------VARIABLES Y ARRAYS------------------------*/
let img;
let memoriaX;
let memoriaY;


/*--------------------------PRELOAD------------------------*/
function preload() {
  img = loadImage('mapa.png');
}

/*--------------------------FUNCIONES BÁSICAS P5.JS------------------------*/
function setup() {
  createCanvas(820, 650);
  image(img, 0, 0);
}


function draw() {

    
    if (mouseIsPressed) {
      fill(0);
      ellipse(mouseX, mouseY, 10, 10);
      memoriaX = mouseX;
      memoriaY = mouseY;
    }   
    
}

/*--------------------------FUNCIÓN DE BORRADO------------------------*/

function keyTyped() {

   if (key === 'c') {

    image(img, 0, 0);
    ellipse(memoriaX, memoriaY, 10, 10);

  }
}


  


  













