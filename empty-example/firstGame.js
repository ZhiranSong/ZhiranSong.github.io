
let flower;
let backgroundImage;
let hand;
let bee;
let final;

// gameobject
let flowerX;
let flowerY;

let flowerXspeed;
let flowerYspeed;

let score = 0;
let newScore ;

let enScreenBool = false;



// the avatar to replace the hand
let beeAvatarBool = false;
let handAvatarBool = false;

// switch color for drawing
// let whitePenBool = false;
// let blackPenBool = false;
// let redPenBool = false;

// the image preload before game starts
function preload(){
  flower = loadImage("image/flower.png");
  backgroundImage = loadImage("image/backgroundImage.png");
  hand = loadImage("image/hand.png");
  bee = loadImage("image/bee.png");
  final = loadImage("image/endScreen.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  imageMode = (CENTER);
  background(backgroundImage,width,height);

// flowerX & flowerY identifier setup

  flowerX = random(width-50);
  flowerY = random(height-40);

  flowerXspeed = 2;
  flowerYspeed = 2;

  newScore = score+0;

  handAvatarBool = true;


}

//make the window resizeable
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function draw(){
// score show on the top
  background(backgroundImage,windowWidth,windowHeight);
  fill(255);
  textSize(20);
  text("you need 30 pieces of flower to create a bouquet",50,30);
  text("You have collected "+ newScore + " pieces of flower", 50,60);

//mouse shape will change
//when mouse is pressed

  if(handAvatarBool == true){
    handAvatar();
  }
  if(beeAvatarBool == true){
    beeAvatar();
    //whiteBursh();
  }
push();
  if(beeAvatarBool == true){
    //beeAvatar();
    whiteBursh();
  }
pop();

  if(mouseIsPressed == true){
      handAvatarBool = false;
      beeAvatarBool = true;
    }
  if(mouseIsPressed == false){
        handAvatarBool = true;
        beeAvatarBool = false;
      }




//image moving
  image(flower,flowerX,flowerY,100,100);
  flowerX = flowerX + flowerXspeed;
  flowerY = flowerY + flowerYspeed;

//mouse interaction

mouseCollide = dist(mouseX,mouseY,flowerX,flowerY);

  if(flowerX >= width-50 || flowerX <= 0){
    flowerXspeed = flowerXspeed * -1;
  }
  if(flowerY >= height-40 || flowerY <= 0){
    flowerYspeed = flowerYspeed * -1;
  }

  if (flowerXspeed <= 10 && flowerXspeed >= -10){
    flowerXspeed = flowerXspeed *1.2;
  }
  if (flowerYspeed <= 10 && flowerYspeed >= -10){
    flowerYspeed = flowerYspeed *1.2;
  }

  if(mouseCollide < 50){
    score ++;
    if(score ++){
      flowerX = random(width-50);
      flowerY = random(height-40);
      newScore ++;
    }
  }
  print(score);
  print(newScore);

  if(newScore == 30){
    background(final,width,height);
    }

  }


function whiteBursh(){
  stroke(255);
  line(mouseX,mouseY,pmouseX,pmouseY);
}

//function for hand Avatar

function handAvatar(){
push();
  translate(mouseX,mouseY);
  image(hand,0,0,150,150);
  pop();
}

// setting s for bee avatar
function beeAvatar(){
push();
 translate(mouseX,mouseY);
 image(bee,0,0,150,150);
 pop()
}


// when the score reaches 30
// bring up to a end screen

// function enScreen(){
//   push();
//   image(final,width,height,100,100);
//   pop();
// }
