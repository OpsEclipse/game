const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground,bucketL,bucketR,bucketB;

var bucketLS,bucketRS,bucketBS;

var cube1,cubeG;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1800,800);

  ground = new Ground(900,790);

  bucketL = new Bucket(455,750,10,40);
  bucketR = new Bucket(695,750,10,40);
  bucketB = new Bucket(575,770,250,10);

  bucketLS = createSprite(455,750,10,40);
  bucketRS = createSprite(695,750,10,40);
  bucketBS = createSprite(575,770,250,10);

  cube1 = new Cube(200,300);

  cubeG = new Group();
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display(); 

  
bucketBS.x = bucketB.x;
bucketLS.x = bucketL.x;
bucketRS.x = bucketR.x;

  //cube1.display();
  
  //console.log(bucketB.x);

  MoveB();
  //.holdC();

  spawnC();

  if(cubeG.isTouching(bucketBS)){
    cubeG.setVelocityYEach(0);
  }

  drawSprites();
}

function MoveB(){
  if(keyIsDown(RIGHT_ARROW)){
    bucketR.x = bucketR.x+50;
    bucketL.x = bucketL.x+50;
    bucketB.x = bucketB.x+50;
  }
  if(keyIsDown(LEFT_ARROW)){
    bucketR.x = bucketR.x-50;
    bucketL.x = bucketL.x-50;
    bucketB.x = bucketB.x-50;
  }
}

function holdC(){
  
  Matter.Body.applyForce(cube.body,false);
  
}

function spawnC(){
  if(frameCount%75===0){
    cube1 = createSprite(100,-50,50,50);
    cube1.shapeColor = rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
    var rand = Math.round(random(100,1700));
    cube1.x = rand;
    cube1.velocityY = 10;
    cubeG.add(cube1);
  }
}