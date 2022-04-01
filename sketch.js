var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  doorsGroup=new Group();
  climbersGroup=new Group();
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.3;
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
   
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
    
  }

   spawnDoors() ;
    drawSprites();
  }

  function spawnDoors(){
    if(frameCount%240===0){
      var door=createSprite(200,-50); 
     door.addImage(doorImg) ;

     var climber=createSprite(200,9);
     climber.addImage(climberImg)

     door.x=Math.round(random(120,400));
     door.velocityY=1;

     climber.x=door.x;
     climber.velocityY=1;
     

     door.lifetime=800;
     climber.lifetime=800;
     doorsGroup.add(door);
     climbersGroup.add(climber);
    }
  }