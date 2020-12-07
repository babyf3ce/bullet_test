var bullet, wall,thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(200,200,50,20);
  wall=createSprite(900,200,thickness, height/2);

  speed=random(233,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX = speed;
}

function draw() {
  background("black");
  
 

  wall.collide(bullet);

  drawSprites();
  hasColided();
}
function hasColided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x + Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false;

 if(hasColided(bullet,wall)){
 bullet.velocityX=0;
 var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);

 if(damage>10){

  wall.shapeColor="crimson";
 }
if(damage<10){

  wall.shapeColor="green";
}
 }
 }