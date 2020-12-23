var ground1,ground2,ball,b1,b2,b3,b4,b5,b6;
var b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17;
var sling,ground3,bb1,bb2,bb3,bb4,bb5,bb6,bb7;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  Engine.run(engine);
  ground1=new Ground(550,690,1500,10)
  ground2=new Ground(590,500,250,10)
  ground3=new Ground(500,300,150,10)
  ball=new Ball(100,590,40)
  b1=new Block(610,490,30,40)
  b2=new Block(570,490,30,40)
  b3=new Block(545,490,30,40)
 b4=new Block(565,490,30,40)
  b5=new Block(555,470,30,40)
  b6=new Block(545,490,30,40)
  b7=new Block(615,490,30,40)
  b8=new Block(545,470,30,40)
  b9=new Block(545,470,30,40)
  b10=new Block(565,470,30,40)
  b11=new Block(595,470,30,40)
  b12=new Block(615,470,30,40)
  b13=new Block(635,470,30,40)
  bb1=new Block(510,290,30,40)
  bb2=new Block(480,290,30,40)
  bb3=new Block(460,290,30,40)
  bb4=new Block(530,290,30,40)
  bb5=new Block(510,270,30,40)
  bb6=new Block(480,270,30,40)

  sling=new Slingshot(ball.body,{x:150,y:550})

}


function draw() {
  rectMode(CENTER);
  background("grey");
 fill("white")
  text("prees SPACE to get second chance",30,30 )
  text(" HIT THE BLOCKS!!!",650,50 )
  drawSprites();
  ground1.display()
  ground2.display()
  ground3.display()
  ball.display()
  
  b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()
b10.display()
b11.display()
b12.display()
b13.display()
bb1.display()
bb2.display()
bb3.display()
bb4.display()
bb5.display()
bb6.display()


}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly()
}

function keyPressed(){
  if(keyCode===32){
   sling.join(ball.body)
  }
}