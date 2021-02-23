gameState = 1;
var database;
var cross;
var x = 0;
var y = 0;
var makeImg;
var missImg;


function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
    
  if (windowWidth>= 1200) {
      screen1 = new Screen();
      screen1.display();
    }
  else if (windowWidth>=768 && windowWidth<992 && windowWidth<windowHeight){
    screen2 = new Screen2();
    screen2.display();
  }
    
  
  
  
}

function draw() {
  console.log(x+" and "+y);
}