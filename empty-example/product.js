let backgroundGif;
let canvas;


//wave Chart
let wave2 = [];
let wave3 =[];
let wave4=[];
let time = 0;

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



function preload(){
  backgroundGif = createImg("wireRotation.gif");

}



function setup() {
  canvas = createCanvas(windowWidth, windowHeight*2);
  canvas.position(0,0);
  canvas.style("z-index","-2");



}
function windowResized(){
  resizeCanvas(windowWidth,height);
}
function draw() {
  push();
  backgroundGif.size(width,height/2);
  backgroundGif.position(0,0);
  backgroundGif.style("z-index",'-2');
  pop();



  push();
  noStroke();
  fill("white");
  // rect(1100,0,370,900);
  //rect(-100,400,500,300);
  rect(0,750,width,height/2-200);
  pop();




  // push();
  // noFill();
  // stroke("#5e684f")
  // strokeWeight(10);
  // ellipse(mouseX,mouseY,50,50);
  // pop();

  waveChart();
  circelChart1();
  graphicChart1();





  time += 0.01;
  speed =1;

}


function waveChart(){


  push();
  translate(150,900);
  stroke("grey");
  strokeWeight(1);
  line(170,100,80,170);


  //
  // fill("#446340");
  // noStroke();
  // rect(-20,-110,10,10);

  // textSize(10);
  // fill("white");
  // text("dolor sit amet, consectetuer ",-80,-155);


  // fill("white");
  // rect(-20,-95,10,10);



  push();
  strokeWeight(1);
  stroke("white");

  //text("30%",320,80);

  //b=2c
  //dashLine;
  let a = 0;
  let b = 10;
  let c = b*0.5;


  let la3 = 0;
  let lb3 = 10;
  let lc3 = b*0.5;

  let d4=0;
  for (let d4= 0; d4 < 15; d4++){
    let la4 = d4*3;
    let lb4 = d4;
    let lc4 = d4-1;
    line(la3+lc3*la4,-10,lb3*lb4+lc3*lc4,-10);

  }



  let d=0;
  for (let d= 0; d < 15; d++){
    let a1 = d*3;
    let b1 = d;
    let c1 = d-1;
    line(a+c*a1,10,b*b1+c*c1,10);

  }

  let la1 = 0;
  let lb1 = 10;
  let lc1 = b*0.5;

  let d2=0;
  for (let d2= 0; d2 < 15; d2++){
    let la2 = d2*3;
    let lb2 = d2;
    let lc2 = d2-1;
    line(la1+lc1*la2,30,lb1*lb2+lc1*lc2,30);

  }

  pop();

  push();
  strokeWeight(0.6);
  stroke("#446340");
  let x4 = 20 * sin(time * 20);
  wave3.unshift(x4);
  noFill();

  beginShape();

  for (let i = 0; i < wave3.length; i++){

    vertex(i-10,wave3[i]);

  }

  if(wave3.length > 200){
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

  if(wave4.length > 200){
    wave4.pop();
  }
  endShape();

  pop();

  pop();

}


function circelChart1(){


push();


  translate(700,900);

  stroke("grey");
  strokeWeight(1);
  line(170,100,80,170);



  let radius = 60;
  strokeWeight(0.1);
  stroke("grey");
  noFill();
  ellipse(0,0,radius *2);

  //顺时针

  let x = radius * cos(time);
  let y = radius * sin(time);

  noStroke();
  fill("grey");

  ellipse(x,y,5);

  //逆时针

  let x2 = radius * sin(time);
  let y2 = radius * cos(time);

  fill("grey");
  ellipse(x2 ,y2,5);


  let hr = hour();
  let mt = minute();
  let sd = second();


  // fill("white");
  // textSize(10);
  // text(sd+random(100),-30,-20,20,20);
  // text(sd+random(100),-30,-40,20,20);
  // text(sd+random(100),-30,0,20,20);
  //

  push();
  noFill();
  strokeWeight(5);
  stroke("grey");
  ellipse(0,0,100,100);
  pop();

  noFill();


  push();
  strokeWeight(3);
  stroke("#446340");

  let end = map(sd,0,60,0,360);
  arc(0,0,100,100,0,end);
  pop();

  push();
  noFill();
  strokeWeight(4);
  stroke("grey");
  ellipse(0,0,80,80);

  strokeWeight(2);
  stroke("#446340");
  let end2 = map(sd,0,40,0,360);
  arc(0,0,80,80,0,end2);

  pop();
push();
  noFill();
  strokeWeight(5);
  stroke("grey");
  ellipse(0,0,50,50);

  strokeWeight(3);
  stroke("#446340");
  let end3 = map(sd,120,80,0,360);
  arc(0,0,50,50,0,end3);

  pop();
pop();

}

function graphicChart1(){
push();
  translate(1000,950);

  stroke("grey");
  strokeWeight(1);
  line(170,100,80,170);


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
  }

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
    fill("gray");
    strokeWeight(1);

    // textSize (15);
    // text(h*-1,0,0+20);
    // text(h2*-1,40,0+20);
    // text(h3*-1,80,0+20);
    // text(h4*-1,120,0+20);

    let rect1 = rect(0,0,10,h);

    if (h > -random(200) ){
      h = h - speed ;
    }
    if(h <= -random(100)){
      h = h +speed;
    }

    fill("#446340");
    let rect1_1 = rect(0+20,0,10,h5);

    if (h5 > -random(30) ){
      h5 = h5 - speed ;
    }
    if(h1 <= -random(10)){
      h5 = h5 +speed;
    }


    fill("grey");
    let rect2 = rect(0 + 40,0,10,h2);
    if (h2 > -random(130) ){
      h2 = h2 - speed ;
    }
    if(h <= -random(100)){
      h2 = h2 + speed;
    }

    fill("#446340");

    let rect2_2 = rect(0 + 60,0,10,h6);
    if (h6 > -random(170) ){
      h6 = h6 - speed ;
    }
    if(h6 <= -random(150)){
      h6 = h6 + speed;
    }


    fill("grey");
    let rect3 = rect(0+ 80 ,0,10,h3);
    if (h3 > - random(300)){
      h3 = h3 - speed ;
    }
    if(h3 <= -random(200)){
      h3 = h3 +speed;
    }

    fill("#446340");
    let rect3_3 = rect(0+ 100 ,0,10,h7);
    if (h7 > - random(200)){
      h7 = h7 - speed ;
    }
    if(h7 <= -random(150)){
      h7 = h7 +speed;
    }


    fill("grey");
    let rect4 = rect(0 + 120,0,10,h4);
    if (h4 > -random(350) ){
      h4 = h4 - speed ;
    }
    if(h4 <= -random(300)){
      h4 = h4 +speed;
    }
      //


      let rect5 = rect(0+140,0,10,h8);

      if (h8 > -random(200) ){
        h8 = h8 - speed ;
      }
      if(h8 <= -random(100)){
        h8 = h8 +speed;
      }

      fill("#446340");
      let rect6 = rect(0+160,0,10,h9);

      if (h9 > -random(30) ){
        h9 = h9 - speed ;
      }
      if(h9 <= -random(10)){
        h9 = h9 +speed;
      }


      fill("grey");
      let rect7 = rect(0 + 180,0,10,h10);
      if (h10 > -random(130) ){
        h10 = h10 - speed ;
      }
      if(h10 <= -random(100)){
        h10 = h10 + speed;
      }

      fill("#446340");

      let rect8 = rect(0 + 200,0,10,h11);
      if (h11 > -random(170) ){
        h11 = h11 - speed ;
      }
      if(h11 <= -random(150)){
        h11 = h11 + speed;
      }


      fill("grey");
      let rect9 = rect(0+ 220,0,10,h12);
      if (h12 > - random(300)){
        h12 = h12 - speed ;
      }
      if(h12 <= -random(200)){
        h12 = h12 +speed;
      }

      fill("#446340");
      let rect10 = rect(0+ 240 ,0,10,h13);
      if (h13 > - random(200)){
        h13 = h13 - speed ;
      }
      if(h13 <= -random(150)){
        h13 = h13 +speed;
      }


      fill("grey");
      let rect11 = rect(0 + 260,0,10,h14);
      if (h14 > -random(350) ){
        h14 = h14 - speed ;
      }
      if(h14 <= -random(300)){
        h14 = h14 +speed;

      }
pop();
  }
