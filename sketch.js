var form , game , YOU , Zombie , ZA , Zamx , ZombieGang
var Time = 0

var GS = 0

function preload(){

}

function setup() {
  createCanvas(1400,1050);
  //ZOMSPn()
  setFrameRate(24);

  YOU = createSprite(700,525,20,20);

}

function draw() {
  background(255,255,255);  
  game = new GAME();
  game.display();
  console.log(Math.round(Time))
  if(GS == 1){
    //form.hide();
    Time = Time + 0.05
    ZombieGang = new Group();
    ZOMSPn()
   Zamx = Math.round(random(500,1200))
   if (keyDown("D")){
     YOU.velocityX = 2
   }
   if (keyWentUp("D")){
     YOU.velocityX = 0
   }
   if (keyDown("A")){
    YOU.velocityX = -2
  }
  if (keyWentUp("A")){
    YOU.velocityX = 0
  }
  if (keyDown("W")){
    YOU.velocityY = -2
  }
  if (keyWentUp("W")){
    YOU.velocityY = 0
  }
  if (keyDown("S")){
    YOU.velocityY = 2
  }
  if (keyWentUp("S")){
    YOU.velocityY = 0
  }
    if (YOU.isTouching(ZombieGang)){
      GS = 0;
      console.log("You Lost!")
      
     
    }

   }

  drawSprites();
}

function ZOMSPn(){
     if (frameCount % Math.round(random(60,120))==0){
      

      Zombie = createSprite(Zamx,100,20,20.5);
      Zombie.debug = true
      Zombie.shapeColor = "red"
      Zombie.velocityY = 1;
      ZombieGang.add(Zombie);
      Zombie.lifetime = 500
     }
     }
