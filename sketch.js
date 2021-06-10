var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var player; 
 
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  translate(0,-player.spt.y+height-150);
  carGroup1 = new Group();
  logGroup1 = new Group();
  player= new Player(width/2,height-25); 
  
  for(var i=0; i<6; i++){
    var bottomGrass1= createSprite(683,height-150-(i*400), width, grassHeight)
 
    if(i%2===0){
      var road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
       road.shapeColor="black";
    }
    bottomGrass1.shapeColor="green";
  }
 
  for(i=0; i<40; i++)
  {
    cars= new Car(2);
    carGroup1.add(cars.spt);
  }
 
  for(i=0; i<40; i++)
  {
    logs= new Log(2);
    logGroup1.add(logs.spt);
    
  }
 }

function draw() {
  background("skyblue");
  keyPressed(); 
 
for(i=1; i<logGroup1.legnth; i++)
{
  if(logGroup1[i].x<0)
  {
    logGroup1[i].x=width;
  }
}

for(i=1; i<carGroup1.legnth; i++)
{
  if(carGroup1[i].x<0 && carGroup1[i].y<0)
  {
    carGroup1[i].x=width;
  }
}

  drawSprites();
}

function keyPressed()
{
  if(keyDown("up")){
    player.move(0,-2);
  }
    else if(keyDown("down"))
    {
    player.move(0,2);
    }
    else if(keyDown("left"))
    {
     player.move(-2,0);
    }
    else if(keyDown("right"))
    {
     player.move(2,0);
    }
  }
