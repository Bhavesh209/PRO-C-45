var bg;
var zombieIMG,zombie,shooterIMG,shooter,shooter1;


function preload(){
  bg = loadImage("assets/bg.jpeg");
zombieIMG = loadImage("assets/zombie.png");
shooterIMG = loadAnimation("assets/shooter_1.png","assets/shooter_2.png");
shooter1 = loadImage("assets/shooter_3.png")

}

function setup() {

  createCanvas(800,550)
  zombie = createSprite(600,300,50,50);
  zombie.addImage(zombieIMG)
  zombie.scale=0.1

  shooter = createSprite(250,300,50,50);
  shooter.addAnimation("shooter",shooterIMG)
  shooter.scale=0.1
 
}

function draw() {
 background(bg);

if(keyDown("UP_ARROW") || touches.length>0) {
  shooter.y=shooter.y-25;
}

if(keyDown("DOWN_ARROW") || touches.length>0) {
  shooter.y=shooter.y+25;
}

if(keyWentDown("space")){
 
  shooter.addImage(shooter1);
 
}
else if(keyWentUp("space")){
  shooter.addAnimation(shooterIMG);
}



drawSprites();

}
