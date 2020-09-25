const Engine =Matter.Engine;
const World=Matter.World;
const Body=Matter.Bodies;

var abEngine,abWorld,ball,ground
var box1;

function  setup(){
 createCanvas(600,600);
 abEngine=Engine.create();
 abWorld=abEngine.world;
 
 var prop={
	 isStatic: true
 }
 ground=Body.rectangle(300,590,600,5,prop);
 World.add(abWorld,ground)
 
 body= new Box(350,550,75,75);
 box2=new Box(420,500,75,100);
 console.log(box1);

}
function draw(){
	background("black");
	Engine.update(abEngine);
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,600,5);
	body.display();
	box2.display();


	
}

