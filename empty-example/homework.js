let furby;

let rotation = 0;

let furbyX;
let furbyY;

let furbyXspeed;
let furbyYspeed;

let mouseCollide;
let scroe = 0;

let enScreenBool = false;

let i = 0;

let newScroe;

function preload(){
  furby = loadImage("flower.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  //randomize the location of furby


  furbyX=random(width+20);
  furbyY=random(height+20);

  furbyXspeed = 1;
  furbyYspeed = 1;

  newScroe = scroe+1;

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {

  background(0);
  mouseCollide = dist(mouseX,mouseY,furbyX,furbyY);
  fill(255);
  textSize(40);
  text("Scroe " + newScroe + "00",width/2,50);


  // furby moving x and y
  image (furby,furbyX,furbyY,40,40);
  furbyX = furbyX + furbyXspeed;
  furbyY = furbyY + furbyYspeed;

  //mouse avatar
  push();
  fill(random(255),random(255),random(255));
  ellipse(mouseX,mouseY,20,20);
  pop();

  //mouse draw;
  // push();
  //
  // // draw path
  // pop();

//mouse function

  if(mouseCollide < 20){
    scroe ++;
    if(scroe ++){
      furbyX = random(width-20);
      furbyY = random(height-20);
      newScroe ++;
    }
  }

  print(scroe);
  print(newScroe);

  // //speed control

  if(furbyX >= width-20 || furbyX <= 0){
    furbyXspeed = furbyXspeed * -1;

  }
  if(furbyY >= height-20 || furbyY <= 0){
    furbyYspeed = furbyYspeed * -1;
  }

  if(furbyYspeed < 6 && furbyYspeed > -6){
    furbyYspeed = furbyYspeed *1.2;
  }
  if(furbyXspeed < 6 && furbyXspeed > -6){
    furbyXspeed = furbyXspeed *1.2;
  }

// end game set up
  if(newScroe == 10){
    enScreenBool = true;
    if(enScreenBool = true){
      enScreen();
    }
  }
}

  function enScreen(){
    background(random(255),random(255),random(255));
    textSize(50)
    fill(0);
    text("you won",width/2,height/2);

  }






  //translate trans the starting point
  // to the point it defined


  // push();
  //  translate(mouseX,mouseY);
  //  //rotation++;
  //  //rotate(radians(rotation));
  //  image(furby,0,0);
  // pop();


  //ellipse(100,400,80,80);

  //push into a new layer
  //anything between push and pop
  //will be affected
