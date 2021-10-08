var Road;

var Playerplay;
var RoadImg, PlayerImg, PlayerStuckImg;


var distance=0;


function preload(){
    RoadImg=loadImage("Road.jpg");
    SpikeImg=loadImage("spikev1.jpg")
    PlayerImg=loadAnimation("trex3.png","trex4.png");
    PlayerStuckImg=loadAnimation("trex1.png");
    gameOverImg = loadImage("gameOver.jpg");
}

function setup() {
    createCanvas(800,300);
// Moving background
Road=createSprite(1000,150, 1200, 300);
Road.addImage(RoadImg);
Road.x=Road.width/2;
Road.velocityX = -5;
Playerplay = createSprite(70,150);
Playerplay.addAnimation("SahilRunning",PlayerImg);
Playerplay.scale=0.5;
//set collider for mainCyclist
Playerplay.setCollider("rectangle",0,0,40,40);
  

}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,600,20);
  distance = distance + Math.round(getFrameRate()/50);
  for(i=1; i<=distance; i++) {
    Road.velocityX = -(6 + 2*distance/150);
  }
   if(Road.x<0) {
     Road.x=Road.width/2;
   }
   
   Playerplay.y = World.mouseY;
  
   edges= createEdgeSprites();
   Playerplay .collide(edges);
   
}
