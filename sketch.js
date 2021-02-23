
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var stone,boy;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(100,525,25);
	boy = new Boy(150,575,0,0);
	tree = new Tree(600,410,0,0);
	ground = new Ground(400,650,800,10);
	mango1 = new Mango(450,350,20);
	mango2 = new Mango(600,350,20);
	mango3 = new Mango(750,350,20);
	mango4 = new Mango(525,250,20);
	mango5 = new Mango(675,250,20);
	launcher = new Launcher(stone.body,boy.body,-60,-70);
	
}


function draw() {

  rectMode(CENTER);
  background(100);
  Engine.update(engine);
 
  
  ground.display();
  tree.display();
  boy.display();
  launcher.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

}



function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY });
}

function mouseReleased(){
    launcher.fly();
}

function detectCollision(lstone,lmango) {
	MangoBodyPosition=lmango.body.position
	StoneBodyPosition=lstone.body.position

	var distance=dist(StoneBodyPosition.x, StoneBodyPosition.y,MangoBodyPosition.x, MangoBodyPosition.y)
	console.log(lmango);
	if(distance <= 45 ){
	Matter.Body.setStatic(lmango.body,false);
	}
} 

function keyPressed() {
	if (keyCode===32) {
		Matter.Body.setPosition(stone.body,{x:100, y:525});
		launcher.attach(stone.body);
	}
}