var trex
var trexRunning
var edges
var ground,groundImg
var invisibleGround
var cloudImage
function preload(){
  trexRunning = loadAnimation("trex1.png","trex2.png","trex4.png")
  groundImg = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
  obs1 = loadImage("obstacle1.png")
  obs2 = loadImage("obstacle2.png")

  obs3 = loadImage("obstacle3.png")

  obs4 = loadImage("obstacle4.png")

  obs5 = loadImage("obstacle5.png")

  obs6 = loadImage("obstacle6.png")

}



function setup(){
  createCanvas(600,200);
  
trex = createSprite(50,150,20,20);
trex.addAnimation("running",trexRunning)
trex.scale  = 0.5

edges = createEdgeSprites();
ground = createSprite(300,190,100,20)
ground.addImage(groundImg)
invisibleGround = createSprite(100,198,200,10)
invisibleGround.visible = false

console.log(trex.depth)
console.log(invisibleGround.depth)

}



function draw(){
  background("black");



if(keyDown("space") && trex.y > 150){
  trex.velocityY = -6
}

spawnClouds()
spawnObstacles()
ground.velocityX = -2
if(ground.x < 0){
  ground.x = 300
}
trex.velocityY = trex.velocityY + 0.5
trex.collide(invisibleGround)
  drawSprites();
}


function spawnClouds(){
  if(frameCount % 60 === 0){
  var cloud = createSprite(600,30,10,10)
 console.log(cloud.depth)
  cloud.addImage(cloudImage)
  cloud.scale = 0.5
  cloud.velocityX = -2
  cloud.y = Math.round(random(20,120))
  trex.depth = cloud.depth + 1
  cloud.lifetime = 300
  }
}


function spawnObstacles(){
  if(frameCount % 80===0){
    var obstacle = createSprite(650,180,20,20);
    obstacle.velocityX = -3;
    var r = Math.round(random(1,7))

    switch(r){
      case 1: 
      obstacle.addImage(obs1)
      break
      case 2:
        obstacle.addImage(obs2)
        break
      case 3:
        obstacle.addImage(obs3)
        break
        case 4: 
        obstacle.addImage(obs4)
        break
        case 5: 
        obstacle.addImage(obs5)
        break
        case 6: 
        obstacle.addImage(obs6)
        break
      default:
        break
    }
  }
}