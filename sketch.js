var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  bulletGroup  = new Group();
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes

  if(gameState===1){
    gun.y=mouseY  

    
    drawSprites();
  }
     
}


function shootBullet(){

  bullet = createSprite(gun.x, gun.y-10, 7, 3);
  bullet.addImage("bullet1.png")
  bullet.lifetime = 140;
  bullet.velocityX = 20;
  bulletGroup.add(bullet);
  
}

function drawblueBubble(){

  bluebubble = createSprite(800, random(20, 780), 40, 40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale = 0.1;
  bluebubble.velocityX = -8;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble)
}