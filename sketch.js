var fixedRect, movingRect;
var rect1;
var topRect,bottomRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  rect1 = createSprite(200,400,80,50);
  rect1.shapeColor = "red";

  topRect = createSprite(900,50,50,80);
  topRect.shapeColor = "yellow";

  bottomRect =  createSprite(900,500,50,80);
  bottomRect.shapeColor = "blue";

  topRect.velocityY = 3;
  bottomRect.velocityY = -3;
 

}
function draw() {
   background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounceOff(topRect,bottomRect);
  if(isTouching(fixedRect, movingRect)){ // if(true) // if(false)
    fixedRect.shapeColor = "orange";
  }
  else{
    fixedRect.shapeColor = "green";
  }

  if(isTouching(rect1, movingRect)){
    rect1.shapeColor = "orange";
  }
  else{
    rect1.shapeColor = "red";
  }
  drawSprites();
}

