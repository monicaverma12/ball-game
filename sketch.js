
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var block1;
var block2;
var ground;
var engine;
var world;
var radius = 40;

function preload()
{
   
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(260, 100, radius/2);
    ground = new Ground(width/2,670,width,20);
    block1 = new Blocks(1100,600,20,120);
	block2 = new Blocks(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);

ball.show();
ground.show();
block1.show();
block2.show();
   drawSprites();


   
}




function keyPressed() {
  if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
  }
}
