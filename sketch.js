var mario;
var int1,int2,int3,int4,int5;
var b1,b2,b3,b4,b5;
var s1;
var playb,insb,sb;
var bee;
var bird;
var platformGroup,obstacleGroup;
var marioAnimation1,obstacleAnimation,wallAnimation,groundAnimation,beeAnimation,t1Animation,t2Animation,t3Animation,t4Animation,
manh1Animation,manh2Animation,manh3Animation,manh4Animation,
manh5Animation,manAnimation,birdAnimation,s1Animation,
cityAnimation,lightpostAnimation,playbAnimation,busAnimation,
bus2Animation,car3Animation,vk1Animation,vk2Animation,vk3Animation,vk4Animation,vk5Animation;
var man,manh1,manh2,manh3,manh4,manh5;
var PLAY=1;
var WIN=2;
var gameState=PLAY;
var vk1,vk2,vk3,vk4,vk5;
var bus,bus2;
var car3;

function preload()
{


  //loading player animation.
  marioAnimation1=loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png","run7.png","run8.png");
  beeAnimation=loadAnimation("bee1.png","bee2.png");
  obstacleAnimation=loadAnimation("flight.png");
  groundAnimation=loadAnimation("road.png.jpg");  
 //loading building animations.
  b1Animation=loadAnimation("building1.png.png");
  b2Animation=loadAnimation("building2.png.png");
  b3Animation=loadAnimation("building3.png.png");
  b4Animation=loadAnimation("building4.png.png");
  b5Animation=loadAnimation("building5.png.png");
 //loading tree animations.
  t1Animation=loadAnimation("tree1.png.png");
  t2Animation=loadAnimation("tree2.png.png");
  t3Animation=loadAnimation("tree3.png.png");
  t4Animation=loadAnimation("tree4.png.png");
  //loading characters animation.
  manh1Animation=loadAnimation("manh1.png");
  manh2Animation=loadAnimation("manh2.png");
  manh3Animation=loadAnimation("manh3.png");
  manh4Animation=loadAnimation("manh4.png");
  manh5Animation=loadAnimation("manh5.png");
  manAnimation=loadAnimation("man.png");
  birdAnimation=loadAnimation("crow.png");
  s1Animation=loadAnimation("sign1.png");
  cityAnimation=loadAnimation("city.png");
  playbAnimation=loadAnimation("playbutton.png.png");
  lightpostAnimation=loadAnimation("lightpost.png"); 
//loading transport animation.
  busAnimation=loadAnimation("bus.png");
bus2Animation=loadAnimation("bus2.png");
car3Animation=loadAnimation("car3.png");
//loading virus king animation.
vk1Animation=loadAnimation("vk1.png");
vk2Animation=loadAnimation("vk2.png");
vk3Animation=loadAnimation("vk3.png");
vk4Animation=loadAnimation("vk4.png");
vk5Animation=loadAnimation("vk5.png");

}

function setup() {
  //Creating canvas equal to width and height of display.
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  
 


  
 
 //creating a group.
platformGroup= createGroup();
obstacleGroup=createGroup();
//adding platforms to stand for mario.
for (var i=0;i<200;i++)
 {
   frameRate(30);
    platform = new Platform(countDistanceX);
    platformGroup.add(platform.spt);//Adding each new platform to platformGroup.
    countDistanceX = countDistanceX + platform.spt.width ; //counting x location of next platform to be build.
    //adding wall to the game.
    if(i%3===0)
    {
    
    platformGroup.add(platform.spt);
    
    }
    //adding obstacles to the game
    if(i%25==0)
    {
    obstacle=new Obstacle(countDistanceX);
     //adding obstacles to the game.
 obstacleGroup.add(obstacle.spt);
 
    }
  

    
     
  }

for (var i =300; i<45000; i=i+500){
  city=createSprite(i,480);
  city.addAnimation("city",cityAnimation);
  city.scale=1;
}
  b1=createSprite(1003,430);
  b1.addAnimation("b1",b1Animation);
  b1.scale=1;

  b2=createSprite(3003,423);
  b2.addAnimation("b2",b2Animation);
  b2.scale=0.9;

  b3=createSprite(5003,500);
  b3.addAnimation("b3",b3Animation);
  b3.scale=0.9;

  b4=createSprite(7003,500);
  b4.addAnimation("b4",b4Animation);
  b4.scale=0.9;

  b5=createSprite(9003,500);
  b5.addAnimation("b5",b5Animation);
  b5.scale=0.9;

  man=createSprite(10000,550);
  man.addAnimation("man",manAnimation);
  man.scale=0.5;

  manh1=createSprite(20500,570);
  manh1.addAnimation("manh1",manh1Animation);
  manh1.scale=0.3;

  manh2=createSprite(20900,570);
  manh2.addAnimation("manh2",manh2Animation);
  manh2.scale=0.3;

  manh3=createSprite(30000,570);
  manh3.addAnimation("manh3",manh3Animation);
  manh3.scale=0.3;

  manh4=createSprite(40000,570);
  manh4.addAnimation("manh4",manh4Animation);
  manh4.scale=0.3;

  manh5=createSprite(52000,570);
  manh5.addAnimation("manh5",manh5Animation);
  manh5.scale=0.3;


  
  for (var i =300; i<45000; i=i+500){
    lightpost=createSprite(i,480);
    lightpost.addAnimation("lightpost",lightpostAnimation);
    lightpost.scale=2.5;
  }

  
bus=createSprite(300,540);
bus.addAnimation("bus",busAnimation);
bus.scale=3.5;
bus.velocityX=27.5;
   
bus2=createSprite(10000,540);
bus2.addAnimation("bus2",bus2Animation);
bus2.scale=3.5;
 bus2.velocityX=-27.5;

  car3=createSprite(20000,560);
car3.addAnimation("car3",car3Animation);
car3.scale=0.7;
  car3.velocityX=-30;

  mario = new Player();
 
 
  }







function draw() {
  background('cyan');
  //code to move the camera.
  translate(  -mario.spt.x + width/2 , 0);
  if(gameState==PLAY)//Play state.
  {  

if(mario.spt.isTouching(b2)){
  b2.destroy();
  vk5=createSprite(3003,490);
  vk5.addAnimation("vk5",vk5Animation);
  vk5.scale=0.4;
vk5.velocityX=-0.8;




}

    if(bus.isTouching(b5)){
      bus.velocityX=0;
    }
    if(mario.spt.isTouching(b5)){
      bus.velocityX=20;
    }
          //apply gravity to mario and set colliding with platforms.
        mario.applyGravity();
        mario.spt.collide(platformGroup);
        
        //Calling various function to controll mario.
        if (keyDown("left"))  
        { 
          mario.moveLeft();
          }
        if (keyDown("right")) 
        { 
          mario.moveRight();
        }
        if (keyDown("up") && mario.spt.velocityY===0) 
        {
          mario.jump();
        }




   }

  

   
     
 
    

   

  if(gameState==WIN)//WIN state.
  {   }
  

   drawSprites();

  }








