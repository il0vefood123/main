
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var LeftSide
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	var ball_options={
		isStatic:false,
		resitution:0.3,
		friction:0,
		density:1.2
	}
	LeftSide.display()

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball= Bodies.circle(200,200,20,ball_options)
	World.add(world,ball);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  display();
  drawSprites();
 
 
  function keyPressed(){
	if (keycode=== UP_ARROW){
		function hForce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
		  }
		  
		  function vForce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02});
		  }
	
	}


  }

}


  

