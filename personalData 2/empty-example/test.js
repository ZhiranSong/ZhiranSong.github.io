let button;
let button2;


let posX =20;
let posY =30;
let diamiter=40;


let posX2 = 40;
let posY2 = 50;
let diamiter2 =40;


let arrayTest2=[];
let arrayTest= [];

let button1Bool = false;
let button2Bool = false;

function setup(){
  createCanvas(300,300);
  background(0);


  arrayTest.push(new test(posX,posY,diamiter));
  arrayTest2.push(new test2(posX2,posY2,diamiter2));
}

function draw (){

  button = createButton("test1");
  let col= color(25,23,300,200);
  button.style('border-width','0');
  button.style('background-color',col);
  button.style('color','white');
  button.position(50,200);

 button.mousePressed(tester2);


 // if(!mouseIsPressed()){
 //
 //   if (mouseIsPressed()){
 //
 //   }
 // }



 button2 =createButton("test2");
 let col2=color(113,219,175,200);
 button2.style('border-width','0');
 button2.style('background-color',col2);
 button2.style('color','white');
  button2.position(50,250);
 button2.mousePressed(tester3);


//buttonChange();



}

// function test(){
//
//   for (i = 0 ;i <100;i++){
//     ellipse(random(i),random(i),random(i),random(i));
//   }
// }

//
// function buttonChange(){
//
// if (button2Bool == true){
//
// button2.mousePressed(tester3);
// button1Bool =false;
// }
// if (button1Bool == true){
//   button.mousePressed(tester2);
//   button2Bool = false;
// }
//
//
// }


function tester3(){
background
  for (var i2 = 0 ; i2 <arrayTest2.length;i2++){

      arrayTest2[i2].show();
}

}
function tester2(){

  for (var i = 0 ; i <arrayTest.length;i++){

      arrayTest[i].show();
}
}

class test{
  constructor(x,y,d){

  this.x = x;
  this.y = y;
  this.d = d;
  }
show(){
  ellipse(this.x,this.y,this.d,this.d);
}
}

class test2{

  constructor(x2,y2,d2){

  this.x2 = x2;
  this.y2 = y2;
  this.d2 = d2;
  }
show(){
  push();
  fill("red");
  ellipse(this.x2,this.y2,this.d2,this.d2);
  pop();
}
}
