var canvas;
let angle = 0 ;
let time  = 0;
let earth;
let wave2 = [];
let wave3 =[];
let wave4=[];

// let backgroundGif;

let speed = 0;
let h1;
let h3 = 0;
let h4 = 0;
let h2=0;
let h =0;
let h5 = 0;
let h6 = 0;
let h7 = 0;
let h8 = 0 ;
let h9 = 0 ;
let h10 = 0;
let h11 = 0;
let h12 = 0;
let h13 = 0;
let h14 = 0;



let v = 0;
let v2= 0;
let v3 = 0;
let v4 = 0;
let v5= 0;
let v6 = 0;
let v7 = 0;
let v8 = 0;

function preload(){
// backgroundGif = createImg("wireRotation.gif");


}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index","-1");

}

function draw() {

  background(0);

  earthRotate();
  // ellipseRunAroundCircle();
  // ellipseRunAroundCircle2();
  // ellipseRunAroundCircle3();
  // DrawWave2();
  waveChart();
  circelChart1();
  circelChart2();
  circelChart3();
  graphicChart1();
  verticalChart();
  //robotRotate();


  angle += 0.003;
  time += 0.01;
  speed =1;

}





function runningBalls(){


}

function ellipseRunAroundCircle(){


push();
translate(-200,100);

let radius = 80;
strokeWeight(0.8);
stroke("#808080");
noFill();
ellipse(0,0,radius *2);

//顺时针

let x = radius * cos(time);
let y = radius * sin(time);

noStroke();
fill("red");

ellipse(x,y,5);

//逆时针

let x2 = radius * sin(time);
let y2 = radius * cos(time);

fill("red");
ellipse(x2 ,y2,5);

pop();
}

function ellipseRunAroundCircle2(){

push();
  noFill();
  strokeWeight(15);
  stroke("#ff4a4a");
pop();

push();
translate(-200,100);

let radius = 40;
strokeWeight(0.4);
stroke("#808080");
noFill();
ellipse(0,0,radius *2);

//顺时针

let x = radius * cos(time*4);
let y = radius * sin(time*4);

noStroke();
fill("red");

ellipse(x,y,5);

//逆时针

let x2 = radius * sin(time);
let y2 = radius * cos(time);

fill("red");
ellipse(x2 ,y2,5);

pop();
}

function ellipseRunAroundCircle3(){

push();
  noFill();
  strokeWeight(15);
  stroke("#ff4a4a");
pop();

push();
translate(200,-380);

let radius = 100;
strokeWeight(0.4);
stroke("#808080");
noFill();
ellipse(0,0,radius *2);

//顺时针

let x = radius * cos(time*4);
let y = radius * sin(time*4);

noStroke();
fill("red");

ellipse(x,y,5);

//逆时针

let x2 = radius * sin(time);
let y2 = radius * cos(time);

fill("red");
ellipse(x2 ,y2,5);

pop();
}

function DrawWave2(){

push();
translate(-200,-200);


strokeWeight(0.6);
stroke("red");
let x3 = 20 * sin(time* 40);
wave2.unshift(x3);
noFill();

beginShape();

for (let i = 0; i < wave2.length; i++){

  vertex(i,wave2[i]);
}

if(wave2.length > 200){
  wave2.pop();
}
endShape();

pop();
}

function waveChart(){

push();
translate(-600,-50);

fill("red");
noStroke();
rect(-20,-110,10,10);

// textSize(10);
// fill("white");
// text("dolor sit amet, consectetuer ",-80,-155);


fill("white");
rect(-20,-95,10,10);



push();
strokeWeight(1);
stroke("gray");

//b=2c
//dashLine;
let a = 0;
let b = 10;
let c = b*0.5;


let la3 = 0;
let lb3 = 10;
let lc3 = b*0.5;

let d4=0;
for (let d4= 0; d4 < 20; d4++){
  let la4 = d4*3;
  let lb4 = d4;
  let lc4 = d4-1;
  line(la3+lc3*la4,-10,lb3*lb4+lc3*lc4,-10);

}



let d=0;
for (let d= 0; d < 20; d++){
  let a1 = d*3;
  let b1 = d;
  let c1 = d-1;
  line(a+c*a1,10,b*b1+c*c1,10);

}

let la1 = 0;
let lb1 = 10;
let lc1 = b*0.5;

let d2=0;
for (let d2= 0; d2 < 20; d2++){
  let la2 = d2*3;
  let lb2 = d2;
  let lc2 = d2-1;
  line(la1+lc1*la2,30,lb1*lb2+lc1*lc2,30);

}

pop();

push();
strokeWeight(0.6);
stroke("red");
let x4 = 20 * sin(time * 20);
wave3.unshift(x4);
noFill();

beginShape();

for (let i = 0; i < wave3.length; i++){

  vertex(i-10,wave3[i]);

}

if(wave3.length > 300){
  wave3.pop();
}
endShape();

pop();

push();

strokeWeight(0.6);
stroke("white");
let x5 = 10 * sin(time * 10);
wave4.unshift(x5);
noFill();

beginShape();

for (let i = 0; i < wave4.length; i++){

  vertex(i-10,wave4[i]);

}

if(wave4.length > 300){
  wave4.pop();
}
endShape();

pop();

pop();

}

function circelChart1(){
push();

translate(400,-80);
fill("red");
noStroke();
rect(-130,-115,10,10);


fill("white");
rect(-130,-100,10,10);

let radius = 90;
strokeWeight(1);
stroke("#808080");
noFill();
ellipse(0,0,radius *2);

//顺时针

let x = radius * cos(time);
let y = radius * sin(time);

noStroke();
fill("red");

ellipse(x,y,5);

//逆时针

let x2 = radius * sin(time);
let y2 = radius * cos(time);

fill("red");
ellipse(x2 ,y2,5);


let hr = hour();
let mt = minute();
let sd = second();


fill("white");
textSize(10);
text(sd+random(100),-30,-20,20,20);
text(sd+random(100),-30,-40,20,20);
text(sd+random(100),-30,0,20,20);


push();
noFill();
strokeWeight(5);
stroke("#3d3d3d");
ellipse(0,0,150,150);
pop();

noFill();


push();
strokeWeight(3);
stroke("red");

let end = map(sd,0,60,0,360);
arc(0,0,150,150,0,end);
pop();

push();
noFill();
strokeWeight(4);
stroke("#3d3d3d");
ellipse(0,0,120,120);

strokeWeight(2);
stroke("red");
let end2 = map(sd,0,40,0,360);
arc(0,0,120,120,0,end2);

pop();

noFill();
strokeWeight(4);
stroke("#3d3d3d");
ellipse(0,0,90,90);

strokeWeight(2);
stroke("red");
let end3 = map(sd,120,80,0,360);
arc(0,0,90,90,0,end3);

pop();


}

function circelChart2(){
push();

translate(590,-150);

let hr = hour();
let mt = minute();
let sd = second();

noFill();
strokeWeight(5);
stroke("#3d3d3d");
ellipse(0,0,100,100);


noFill();


push();
strokeWeight(3);
stroke("red");

let end = map(sd,0,60,0,360);
arc(0,0,100,100,0,end);
pop();

push();
noFill();
strokeWeight(4);
stroke("#3d3d3d");
ellipse(0,0,70,70);

strokeWeight(2);
stroke("red");
let end2 = map(sd,0,40,0,360);
arc(0,0,70,70,0,end2);

pop();

noFill();
strokeWeight(4);
stroke("#3d3d3d");
ellipse(0,0,40,40);

strokeWeight(2);
stroke("red");
let end3 = map(sd,120,80,0,360);
arc(0,0,40,40,0,end3);

pop();
}

function circelChart3(){
push();

translate(590,-30);


let hr = hour();
let mt = minute();
let sd = second();

noFill();
strokeWeight(5);
stroke("#3d3d3d");
ellipse(0,0,100,100);


noFill();


push();
strokeWeight(3);
stroke("red");

let end = map(sd,0,60,0,360);
arc(0,0,100,100,0,end);
pop();

push();
noFill();
strokeWeight(4);
stroke("#3d3d3d");
ellipse(0,0,70,70);

strokeWeight(2);
stroke("red");
let end2 = map(sd,0,40,0,360);
arc(0,0,70,70,0,end2);

pop();

noFill();
strokeWeight(4);
stroke("#3d3d3d");
ellipse(0,0,40,40);

strokeWeight(2);
stroke("red");
let end3 = map(sd,120,80,0,360);
arc(0,0,40,40,0,end3);

pop();
}

function graphicChart1(){

translate(-600,300);


strokeWeight(1);
stroke("gray");

//b=2c
//dashLine;
let e = 0;
let f = 10;
let g = f*0.5;

let d5=0;
for (let d5= 0; d5 < 20; d5++){
  let e1 = d5*3;
  let f1 = d5;
  let g1 = d5-1;
  line(e+g*e1,0,f*f1+g*g1,0);

}

let e3 = 0;
let f3 = 10;
let g3 = f*0.5;

let d6=0;
for (let d6= 0; d6 < 20; d6++){
  let e4 = d6*3;
  let f4 = d6;
  let g4 = d6-1;
  line(e3+g3*e4,-40,f3*f4+g3*g4,-40);


  let e5 = 0;
  let f5 = 10;
  let g5 = f*0.5;

  let d7=0;
  for (let d7= 0; d7 < 20; d7++){
    let e6 = d7*3;
    let f6 = d7;
    let g6 = d7-1;
    line(e5+g5*e6,-80,f5*f6+g5*g6,-80);


}

  noFill()
  stroke("gray");
  strokeWeight(1);

  textSize (15);
  text(h*-1,0,0+20);
  text(h2*-1,40,0+20);
  text(h3*-1,80,0+20);
  text(h4*-1,120,0+20);

  let rect1 = rect(0,0,10,h);

  if (h > -random(200) ){
    h = h - speed ;
  }
  if(h <= -random(100)){
    h = h +speed;
  }

stroke("red");
  let rect1_1 = rect(0+20,0,10,h5);

  if (h5 > -random(30) ){
    h5 = h5 - speed ;
  }
  if(h1 <= -random(10)){
    h5 = h5 +speed;
  }


stroke("grey");
  let rect2 = rect(0 + 40,0,10,h2);
  if (h2 > -random(130) ){
    h2 = h2 - speed ;
  }
  if(h <= -random(100)){
    h2 = h2 + speed;
  }

stroke("red");

    let rect2_2 = rect(0 + 60,0,10,h6);
    if (h6 > -random(170) ){
      h6 = h6 - speed ;
    }
    if(h6 <= -random(150)){
      h6 = h6 + speed;
    }


stroke("grey");
  let rect3 = rect(0+ 80 ,0,10,h3);
  if (h3 > - random(300)){
    h3 = h3 - speed ;
  }
  if(h3 <= -random(200)){
    h3 = h3 +speed;
  }

  stroke("red");
    let rect3_3 = rect(0+ 100 ,0,10,h7);
    if (h7 > - random(200)){
      h7 = h7 - speed ;
    }
    if(h7 <= -random(150)){
      h7 = h7 +speed;
    }


stroke("grey");
  let rect4 = rect(0 + 120,0,10,h4);
  if (h4 > -random(350) ){
    h4 = h4 - speed ;
  }
  if(h4 <= -random(300)){
    h4 = h4 +speed;

//


  let rect5 = rect(0+140,0,10,h8);

  if (h8 > -random(200) ){
    h8 = h8 - speed ;
  }
  if(h8 <= -random(100)){
    h8 = h8 +speed;
  }

stroke("red");
  let rect6 = rect(0+160,0,10,h9);

  if (h9 > -random(30) ){
    h9 = h9 - speed ;
  }
  if(h9 <= -random(10)){
    h9 = h9 +speed;
  }


stroke("grey");
  let rect7 = rect(0 + 180,0,10,h10);
  if (h10 > -random(130) ){
    h10 = h10 - speed ;
  }
  if(h10 <= -random(100)){
    h10 = h10 + speed;
  }

stroke("red");

    let rect8 = rect(0 + 200,0,10,h11);
    if (h11 > -random(170) ){
      h11 = h11 - speed ;
    }
    if(h11 <= -random(150)){
      h11 = h11 + speed;
    }


stroke("grey");
  let rect9 = rect(0+ 220,0,10,h12);
  if (h12 > - random(300)){
    h12 = h12 - speed ;
  }
  if(h12 <= -random(200)){
    h12 = h12 +speed;
  }

  stroke("red");
    let rect10 = rect(0+ 240 ,0,10,h13);
    if (h13 > - random(200)){
      h13 = h13 - speed ;
    }
    if(h13 <= -random(150)){
      h13 = h13 +speed;
    }


stroke("grey");
  let rect11 = rect(0 + 260,0,10,h14);
  if (h14 > -random(350) ){
    h14 = h14 - speed ;
  }
  if(h14 <= -random(300)){
    h14 = h14 +speed;




}
}
}
}

function verticalChart(){
  push();


  fill("#3d3d3d");
  noStroke();
  backRect1 = rect(910,-43,340,14);

  fill("red");
  let vertical1= rect(913,-41,v,10);
  if (v < random(170) ){
    v = v +speed ;
  }
  if (v >= random(170) ){
    v = v -speed ;
  }

  let vertical6= rect(1243,-41,v8*-1,10);
  if (v8 >= random(200) ){
    v8 = v8 - 1 ;
  }
  if(v8 < random(200)){
    v8 = v8 + 1;
  }


  fill("#3d3d3d");
  noStroke();
  backRect2 = rect(910,-3,340,14);

  fill("red");
  let vertical2= rect(913,-1,v2,10);
  if (v2 < random(200) ){
    v2 = v2 +speed ;
  }
  if (v2 >= random(200) ){
    v2 = v2 -speed ;
  }

  let vertical9= rect(1243,-1,v7*-1,10);
  if (v7 >= random(100) ){
    v7 = v7 - 1 ;
  }
  if(v7 < random(100)){
    v7 = v7 + 1;
  }


  fill("#3d3d3d");
  noStroke();
  backRect3 = rect(910,-83,340,14);

  fill("red");
  let vertical3= rect(913,-81,v3,10);
  if (v3 < random(270) ){
    v3 = v3 +speed ;
  }
  if (v3 >=random(270)){
    v3 = v3 -speed ;
  }

  let vertical5= rect(1243,-81,v6*-1,10);
  if (v6 >= random(130) ){
    v6 = v6 - 1 ;
  }
  if(v6 < random(130)){
    v6 = v6 + 1;
  }




  fill("#3d3d3d");
  noStroke();
  backRect4 = rect(910,-123,340,14);

  fill("red");
  let vertical4= rect(913,-121,v4,10);
  if (v4 < random(50) ){
    v4 = v4 +speed ;
  if(v4 >= random(50)){
    v4 = v4-speed;
  }

  let vertical5= rect(1243,-121,v5*-1,10);
  if (v5 >= 150 ){
    v5 = v5 - 1 ;
  }
  if(v5 < 150){
    v5 = v5 + 1;
  }

    pop();
  }
}
