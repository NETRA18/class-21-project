var astronaut,astronautimg;
var sleep,brush,bath1,bath2,gym1,gym2,gym11,gym12,drink1,drink2,move,move1,eat1,eat2;
var bathroom,bathroomimg;
var bedroom,bedroomimg;
var kitchen,kitchenimg;

function preload() {
  sleep = loadanimation("image/sleep.png");
move = loadanimation("image/move.png");
move1 = loadanimation("image/move1.png");
brush = loadanimation("image/brush.png");
drink1 = loadanimation("image/drink1.png");
drink2 = loadanimation("image/drink2.png");
gym1 = loadanimation("image/gym1.png");
gym2 = loadanimation("image/gym2.png");
gym11 = loadanimation("image/gym11.png");
gym12 = loadanimation("image/gym12.png");
bath1 = loadanimation("image/bath1.png");
bath2 = loadanimation("image/bath2.png");
eat1 = loadanimation("image/eat1.png");
eat2 = loadanimation("image/eat2.png");
bathroom = loadImage("image/bathroom.jpg");
bedroom = loadImage("image/bedroom.png");
kitchen = loadImage("image/kitchen.jpg");
}


function setup() {
  createCanvas(400, 400);
  
if (keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing",bathroomimg);
  astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}

if (keyDown("DOWN_ARROW")){
  astronaut.addAnimation("sleeping",sleep);
  astronaut.changeAnimation("sleeping",bedroomimg);
  astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}

if (keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bath1);
  astronaut.changeAnimation("bathing",bathroomimg);
  astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}

if (keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat1);
  astronaut.changeAnimation("eating",kitchenimg);
  astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}


}

function draw() {
  background(220);
}