const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ground_opt ={
    isStatic:true
  }


  ground=Bodies.rectangle(200,380,400,20,ground_opt);
  World.add(world,ground);
  var ball_opt ={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_opt);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,800,40);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}