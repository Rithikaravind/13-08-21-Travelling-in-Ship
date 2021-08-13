var ship;
var sea;
function preload(){
seaImg = loadImage("sea.png");
shipimg1 = loadAnimation("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  var ship = createSprite(400,400)
  spriteName.addimage("sea", seaImage);
  
  
}

function draw() {
  background("blue"); 
  if (sea.x < 0){
   sea.x = sea.width/2;
  }
}