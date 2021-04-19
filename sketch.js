const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("libraries/polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  
  //tower 1
  b1 = new Block(300,275,30,40);
  b2 = new Block(330,275,30,40);
  b3 = new Block(360,275,30,40);
  b4 = new Block(390,275,30,40);
  b5 = new Block(420,275,30,40);
  b6 = new Block(450,275,30,40);
  b7 = new Block(480,275,30,40);
  b8 = new Block(330,235,30,40);
  b9 = new Block(360,235,30,40);
  b10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  b10 = new Block(390,235,30,40);
  b11 = new Block(420,235,30,40);
  b12 = new Block(450,235,30,40);
  b13 = new Block(390,155,30,40);
  
  //tower 2
  bb1 = new Block(640,175,30,40);
  bb2 = new Block(670,175,30,40);
  bb3 = new Block(700,175,30,40);
  bb4 = new Block(730,175,30,40);
  bb5 = new Block(760,175,30,40);
  bb6 = new Block(670,135,30,40);
  bb7 = new Block(700,135,30,40);
  bb8 = new Block(730,135,30,40);
  bb9 = new Block(700,95,30,40);
 
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 

  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("pink");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("turquoise");
  b13.display();
  fill("skyblue");
  bb1.display();
  bb2.display();
  bb3.display();
  bb4.display();
  bb5.display();
  fill("turquoise");
  bb6.display();
  bb7.display();
  bb8.display();
  fill("pink")
  bb9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}