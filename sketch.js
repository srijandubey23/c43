var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;

var database;

var allPlayers;
var distance = 0;

var form, player, game;
var trackImg;
var groundImg;

var car1,car2,car3,car4;
 var carImg1, carImg2, carImg3, carImg4;
var cars; // array
var xVel=0; 
var yVel=0;

var oilspill, oilSpillImage;
var skidSound;
var obstacles;

var passedFinish, finishedPlayer=0;
var goldImg,silverImg,bronzeImg;
function preload(){
  carImg1=loadImage("images/car1.png");
  carImg2=loadImage("images/car2.png");
  carImg3=loadImage("images/car3.png");
  carImg4=loadImage("images/car4.png");
  trackImg=loadImage("images/track.jpg");
  groundImg=loadImage("images/ground.png");
  oilSpillImage=loadImage("images/f1.png");
  skidSound=loadSound("sound/sliding.mp3");
  goldImg=loadImage("images/gold.png");
  silverImg=loadImage("images/silver.png");
  bronzeImg=loadImage("images/bronze.png");

  
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  obstacles=createGroup();
  for(var i=0;i<5;i++){
    var oilX=random(200,950);
    var oilY=random(-height*4,height-300);
    oilspill=createSprite(oilX,oilY);
    oilspill.addImage("oill",oilSpillImage);
    obstacles.add(oilspill);
  }

}


function draw(){
  if(playerCount === 4 && finishedPlayer===0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishedPlayer===4){
    game.update(2);

    
  }
  if(gameState===2 && finishedPlayer===4){
    game.displayRanks();
  }

}
