var ship,back;
function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  backImage = loadImage("sea.png");


}

function setup(){
  createCanvas(1000,600);
 

  //creating background sprite
  back = createSprite(500,300,1000,600);
  back.addImage("back",backImage);
  back.x = back.width /20;
  back.velocityX =-20;

   //creating ship sprite
   ship = createSprite(500,300,50,50);
   ship.addAnimation("running", ship_running);
   ship.scale = 0.5;
}

function draw() {
  background("blue");
  
  
  if (back.x < 0) {
  back.x = back.width / 2;
  }

  drawSprites();
 
 
}