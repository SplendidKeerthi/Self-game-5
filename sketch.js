var wizard, wizardWalking, wizardAttack1, wizardAttack2
var goblin
var ground
var orb
var mountain
var score
var life

function preload(){
  goblinImage = loadImage("Goblin.png")
  groundImage = loadImage("Ground.jpeg")
  orbImage = loadImage("Orb.png")
  mountainImage = loadImage("Rocky_mountain.png")

  wizardWalking = loadAnimation("wiz_1.png","wiz_2.png","wiz_3.png","wiz_4.png","wiz_5.png","wiz_4.png","wiz_3.png","wiz_2.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  ground = createSprite(width/2,height/2,width,height);
  ground.addImage("ground", groundImage)
  ground.x = width/2
  ground.velocityX = -5
  ground.scale=2

  wizard = createSprite(170,425,30,30)
  wizard.scale = 1.5
  wizard.addAnimation("walking", wizardWalking);

  mountainsGroup = new Group()
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(ground.x < width/2){
    ground.x = ground.width
  }
  
  spawnMountain()
}

function spawnMountain() {
  if(frameCount % 120 === 0){
    var mountain = createSprite(width+20,height-260,40,10) 
    mountain.velocityX = -5
    mountain.addImage(mountainImage)
    mountain.scale = 0.2
    mountain.lifetime = 300

    mountain.x = Math.round(random(width,width-200));
    mountainsGroup.add(mountain)

    mountain.depth = wizard.depth
    wizard.depth = wizard.depth+1
      }


  }
