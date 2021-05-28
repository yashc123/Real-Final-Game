var robber;
var securityGuard;
var gameState = "start";
var robberRunning, securityGuardImage;
var score = 0;
var gameOver, restart, restartImg;
var bg;
var bgImg;
var sg;
var robberStanding;

function preload(){
  robberRunning = loadAnimation("Images/RealRobber1.png","Images/RealRobber2.png","Images/RealRobber3.png","Images/RealRobber4.png");
  securityGuardImage = loadImage("Images/SecurityGuard.png");
  bgImg = loadImage("Images/Background.png");
  robberStanding = loadImage("Images/RealRobber1.png");
  restartImg = loadImage("Images/Restart.png");

}

function setup() {
  createCanvas(800,1200);

 
  bg  = createSprite(400,600,800,1000);
  bg.addImage(bgImg);

  robber = createSprite(400,800,40,40);
  robber.addAnimation("running",robberRunning);
  robber.scale = 1.5;

  restart = createSprite(650,100);
  restart.addImage(restartImg);
  restart.scale = 0.05;


  

  sg = new Group()
}

function draw() {

  if(gameState === "start") {
    background(bgImg);
    textSize(30);
    text("Press Space to Start.", 300, 300);
  }

 

  if(gameState=== "play") {
    drawSprites();

    
    bg.velocityY = 5;

    if(bg.y>600) {
    bg.y = 0;
    }

    score = score + 1;

    

    spawnGuards();

    if(keyDown(LEFT_ARROW)) {
      robber.x = robber.x - 3;
    }

    if(keyDown(RIGHT_ARROW)) {
      robber.x = robber.x + 3;
    }

    if(keyDown(DOWN_ARROW)) {
      robber.y = robber.y + 5;
    }

    if(keyDown(UP_ARROW)) {
      robber.y = robber.y - 5;
    }

    if(sg.isTouching(robber)){
      gameState = "end";
      }
      stroke("white");
      fill("white");
      textSize(20);
     text("Score : " + score,600,50);

  }
else if(gameState=="end"){
  restart.visible = true;
  bg.velocityY = 0;
  robber.addImage(robberStanding);
  stroke("white");
  fill("white");
  textSize(30);
  text("Game Over!",300,300);
  sg.destroyEach();
  

  if(mousePressedOver(restart)){
    reset();
  }
}
  

  
}

function spawnGuards() {
  if(frameCount % 100 === 0) {
    rand = Math.round(random (100,600))
  securityGuard = createSprite(250,-10,40,40);
  securityGuard.addImage(securityGuardImage);
  securityGuard.scale = 0.4;
  securityGuard.velocityY = 5;
  securityGuard.x = rand;
  sg.add(securityGuard);
  }
}

function keyPressed(){
  if(keyCode===32 && gameState === "start"){
    gameState = "play";

  }
}

function reset(){
  gameState = "start";
  score = 0;
  restart.visible = false;

}





