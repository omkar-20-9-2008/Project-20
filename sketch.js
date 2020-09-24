var car;
var wall;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);

speed = random(55,90);
weight = random(400,1500);
deformation = (0.5*weight*speed*speed/22500);

car = createSprite(50,200,60,60);
car.shapeColor="white";
car.velocityX=speed;
wall = createSprite(1500,200,60,height/2);
wall.shapeColor = rgb(80,80,80);

 }

function draw() {
  background(0,0,0); 
  
  if(car.x-wall.x<car.width/2+wall.width/2 && wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
if(deformation<100){
car.shapeColor=rgb(0,255,0);
}else if(deformation>100 && deformation<180){
  car.shapeColor=rgb(230,230,0);
}else if(deformation>180){
  car.shapeColor=rgb(255,0,0);
}
  }

  drawSprites();
}