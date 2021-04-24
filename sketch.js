var database;
var gameState = 0,playerCount; // playerCount & gameState
var game,player,form;
var allPlayers;
var car1, car2, car3, car4, cars;
var car1Img, car2Img, car3Img, car4Img, carsAtEnd;
var trackImg, groundImg;

function preload(){
    car1Img = loadImage("./images/car1.png");
    car2Img = loadImage("./images/car2.png");
    car3Img = loadImage("./images/car3.png");
    car4Img = loadImage("./images/car4.png");
    trackImg = loadImage("./images/track.jpg");
    groundImg = loadImage("./images/ground.png");
}


function setup(){
  database = firebase.database();

  createCanvas(displayWidth-20, displayHeight-30);  

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");

   if(playerCount === 4){
      game.updateState(1);
   }

   if(gameState === 1 && carsAtEnd !=4 ){
     clear();
     game.play();
   }
   if(carsAtEnd === 4){
     game.updateState(2); 
   }
   if(gameState === 2 ){
     game.end();
   }
}
