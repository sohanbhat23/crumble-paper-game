
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball;
var leftSide,rightSide,groundObj;
var radius = 40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	var ball_options={
		isStatic: false,
		resititution: 0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	groundObj = new Ground(10,670,480,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,radius,radius);
  groundObj.display();
  leftSide.display();
  rightSide.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}


