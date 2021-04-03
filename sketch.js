
function preload() {
    //load the images here
    tomImage=loadAnimation("images/cat1.png");
    tomImage2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImage3=loadAnimation("images/cat4.png");
    jerryImage=loadAnimation("images/mouse1.png");
    jerryImage1=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImages3=loadAnimation("images/mouse4.png");
    gardenImage=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 tom=createSprite(870,600);
 tom.addAnimation("tomsleeping",tomImage);
 tom.scale=0.2;

 jerry=createSprite(200,600);
 jerry.addAnimation("jerrystanding",jerryImage);
 jerry.scale=0.15

 
}


function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
 if(tom.x-jerry.x < (tom.width-jerry.width)/2){
     tom.velocityX=0;
     tom.addAnimation("tomlastImage",tomImage3);
     tom.x=300;
     tom.scale=0.2;
     tom.changeAnimation("tomlastImage");
     jerry.addAnimation("jerrylastImage",jerryImages3);
     jerry.scale=0.15;
     jerry.changeAnimation("jerrylastImage");
 }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===LEFT_ARROW){
     tom.velocityX=-5;
     tom.addAnimation("tomrunning",tomImage2);
     tom.changeAnimation("tomrunning");
     jerry.addAnimation("jerryteasing",jerryImage1);
     jerry.frameDelay=25;
     jerry.changeAnimation("jerryteasing");

 }

}
