var backgroundImage, ground, player_running,monkey_collided, bananaImage, obstacleImage, obstacleGroup, score;

function preload(){
backgroundImage=loadImage("jungle-1.jpg");
  player_running=loadAnimation( "Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png"); 
monkey_collided=loadImage("Monkey_01.png");
  
}
function setup() {
  createCanvas(400, 200);
  
  background2=createSprite(5,5);
  background2.addImage("ground",backgroundImage);
  background2.x=background2.width/2;
  background2.velocityX=-2;
 
invisible_ground=createSprite(200,190,400,10);
  invisible_ground.visible=false;
 
  player=createSprite(50,180,20,50);
  player.addAnimation("running",player_running);
  player.scale=0.10;
  
  obstacleGroup=new Group();
  bananaGroup=new Group();
   
  score = 0;}

function draw() {
background(backgroundImage);
 
    if(keyDown("space")&&player.y>=93) {
    player.velocityY = -4}
  
  player.velocityY = player.velocityY + 0.9;
    player.collide(invisible_ground);
  if (background2.x < 0){
    background2.x = background2.width/2;
  }
if(player.isTouching(bananaGroup)){
bananaGroup.destroyEach();
score=score+2;  
}
  spawnbanana(); 
  spawnobstacles();
  
  switch(score){
    case 10:player.scale=0.12;
            break;
    case 20:player.scale=0.14;
            break;
    case 30:player.scale=0.16;
            break;
    case 40:player.scale=0.18;
            break;
    default: break;
  }
  if(obstacleGroup.isTouching(player)){
  player.scale=0.10;
  }
  drawSprites();
  stroke("white");
  text("Score: "+score, 300,50);
}
function spawnbanana() {

  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;  
    banana.lifetime = 200;
    banana.depth = player.depth;
    player.depth = player.depth + 1;
    bananaGroup.add(banana);
  }}
  
function spawnobstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    
 obstacle.addImage(obstacleImage);   

    obstacle.scale = 0.09;
    obstacle.lifetime = 300;

    obstacleGroup.add(obstacle);
  }
}


