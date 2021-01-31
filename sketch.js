
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;
var paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200,500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(300,350,1800,20);
	paper = new Paper(200,310,40,40);
	wall1 = new Dustbin(900,310,200,20);
	wall2 = new Dustbin(800,310,20,100);
	wall3 = new Dustbin(1000,310,20,100);
	
	//Create the Bodies Here.
	var circle = Matter.Bodies.circle(230,310,20);
	ellipse(56,46,55,55);
	
	Engine.run(engine);
  
}

function draw() {
  
  background(0);
  
  ground.display();
  paper.display();
  wall1.display();
  wall2.display();
  wall3.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
	}
	//Matter.Body.setStatic(paper.body,false);
}