var astronaut, bg, bgImg;
var astronaut_bathing, astronaut_brushing, astronaut_drinking, astronaut_eating, astronaut_gym, astronaut_sleeping, astronaut_moving;

function preload() {
  astronaut_bathing = loadAnimation("images/bath1.png", "images/bath2.png");
  astronaut_brushing = loadAnimation("images/brush.png");
  astronaut_drinking = loadAnimation("images/drink1.png", "images/drink2.png");
  astronaut_eating = loadAnimation("images/eat1.png", "images/eat2.png");
  astronaut_gym = loadAnimation("images/gym1.png", "images/gym2.png", "images/gym11.png", "images/gym12.png");
  astronaut_sleeping = loadAnimation("images/sleep.png");
  astronaut_moving = loadAnimation("images/move.png", "images/move1.png"); 
  bgImg = loadImage("images/iss.png");
}


function setup() {
  createCanvas(400, 400);

  bg = createSprite(200,200);
  bg.addImage("background", bgImg);

  astronaut = createSprite(200,200,20,50);
  astronaut.addAnimation("sleeping", astronaut_sleeping);
  astronaut.scale = 0.1;
}

function draw() {
  background(220);

  createEdgeSprites()

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", astronaut_brushing);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", astronaut_gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", astronaut_bathing);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", astronaut_eating);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("m")){
    astronaut.addAnimation("moving", astronaut_moving);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  drawSprites()
}