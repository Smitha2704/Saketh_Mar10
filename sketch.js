const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine, world

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world=engine.world;

  ground_prop= {
    isStatic:true
  }
  ground = Bodies.rectangle(200, 390, 400, 20,ground_prop);
  World.add(world, ground);

  ball_props={
    restitution:0.8
  }
  ball = Bodies.circle(200, 50, 20, ball_props);
  World.add(world,ball);

  console.log(ground);
}

function draw() {
  background(0); 
  Engine.update(engine);

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x, ground.position.y, 400, 20);
  fill("yellow");

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20)
}