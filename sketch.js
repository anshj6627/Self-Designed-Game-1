const { load } = require("./p5");

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//variables to be created where sprites would be loaded
var back;
var train;
var nstone1,nstone2,nstone3,nstone4;
var pstone1,pstone2,pstone3;
var tree1,tree2,
var car1, car2, car3, car4;
var bus1, bus2, bus3, bus4;
function preload()
{
	//background for the image
	back=loadImage("Sprites/Background.jpg");
	//train to be run
	train=loadImage("Sprites/train.png");
//trees around train
	tree1=loadImage("Sprites/tree1.png");
	tree2=loadImage("Sprites/tree2.png");
//vehicles roaming around the train
	car1=loadImage("Sprites/car1.png");
	car2=loadImage("Sprites/car2.png");
	car3=loadImage("Sprites/car3.png");
	car4=loadImage("Sprites/car4.png");
	bus1=loadImage("Sprites/Bus1.png");
	bus2=loadImage("Sprites/Bus2.png");
	bus3=loadImage("Sprites/Bus3.png");
	bus4=loadImage("Sprites/Bus4.png");
	//negative events 
	nstone1=loadImage("Sprites/negativestone1.png");
	nstone2=loadImage("Sprites/negativestone2.png");
	nstone3=loadImage("Sprites/negativestone3.png");
	nstone4=loadImage("Sprites/negativestone4.png");
	//positive events
	pstone1=loadImage("Sprites/positivestone1.png");
	pstone2=loadImage("Sprites/positivestone2.png");
	pstone3=loadImage("Sprites/positivestone3.png");
}

function setup() {
	createCanvas(1300,580);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);
  
  drawSprites();
 
}



