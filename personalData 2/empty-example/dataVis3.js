let table;

let canvas;

let date = [];
let total=[];
let socialMedia = [];


let entertainmentArray = [];
let entertainment = [];

let productivityArray = [];
let productivity = [];

let weatherArray = [];

let randomnizeArray = [110];

let temporture=[];
let temportureArray = [];

let socialMediaArray = [];


let lineArray = [];

let rows;
let rowsArray = [];

let posX = 0;
let posY = 0;

let button;
let button2;
let button3;


function preload(){

  table = loadTable('personalData.csv','csv','header');

}

function windowResized(){


  resizeCanvas(windowWidth,windowHeight);
}

function setup(){
  canvas= createCanvas(windowWidth, windowHeight*7);
  canvas.position(200,700);
  canvas.style('z-index','-20');
  //translate(200,700);
  for(var i=0; i<table.getRowCount();i++){
    temporture.push(table.getString(i,"temporture"));
    rows = table.getNum(i,"Number");
    total.push(table.getNum(i,"total"));
    socialMedia.push(table.getNum(i,'SocialMedia'));
    entertainment.push(table.getNum(i,'Entertainment'));
    productivity.push(table.getNum(i,'productivity'));
    date.push(table.getString(i,'Date'));

    entertainmentArray.push(new entertainmentCircle(entertainment[i],temporture[i],rows));
    socialMediaArray.push(new socialMediaCircle(socialMedia[i],temporture[i],rows));
    temportureArray.push(new dataCircle(posX,posY,temporture[i],rows,total[i],date[i]));
    productivityArray.push(new productivityCircle(productivity[i],temporture[i],rows));
  //  lineArray.push(new lineOntop(total[i],temporture[i]));

    rowsArray.push(table.getNum(i,'Number'));






  }



}








function draw(){

  background("#2b2b2b");

  formStructure();

for (var i = 0; i <temportureArray.length;i ++){
  temportureArray[i].show();
  temportureArray[i].hover();
}
  for(var i4 = 0;i4<socialMediaArray.length;i4++){
    socialMediaArray[i4].show();
    socialMediaArray[i4].hover();

  }

    for(var i5 = 0;i5 < entertainmentArray.length;i5++){
      entertainmentArray[i5].show();
      entertainmentArray[i5].hover();
    }
      for (var i6 = 0;i6 < productivityArray.length;i6++){
        productivityArray[i6].show();
        productivityArray[i6].hover();
      }

    //  lineOnTop();

// button = createButton('Result');
// let col= color(25,23,300,100);
// button.style('border-width','0');
// button.style('background-color',col);
// button.style('color','white');
// button.style('padding-left','30px');
// button.style('padding-right','30px');
// button.style('padding-top','10px');
// button.style('padding-bottom','10px');
//
// button.position(700,400,'fixed');
//
// button.mousePressed(runDataCircle);
//
// //
//toggleButton1();
// toggleButton2();
    }






//
// function toggleButton1(){
//   button = createButton('Full Chart');
//   let col= color(25,23,300,10);
//   button.style('border-width','0');
//   button.style('background-color',col);
//   button.style('color','white');
//   button.style('padding','20px');
//   button.position(50,400,'fixed');
//
//  button.mousePressed(runDataCircle);
//
// }

// function runDataCircle(){
//
//   for (var i = 0; i <temportureArray.length;i++){
//     temportureArray[i].show();
//     temportureArray[i].hover();
//   }
// }


function result(){

}

function toggleButton2(){
  button2 = createButton('Social Media');
  let col= color(237,28,26,50);
  button2.style('border-width','0');
  button2.style('background-color',col);
  button2.style('color','white');
  button2.position(50,200);

 //button2.mousePressed(tester2);

}



function formStructure(){



 //translate(200,700);
  stroke("#808080");

  line(100,0,100,5000);


  for ( var i = 0 ; i < table.getRowCount();i++){

    stroke("#808080");
    strokeWeight(0.5);
    rowsArray.push(table.getNum(i,'Number'));
  //  print(rowsArray[i]);

    weatherArray.push(table.getString(i,'Weather'));

  //  print(weatherArray[i]);


    line(0,rowsArray[i]*200,1100,rowsArray[i]*200);






    if(weatherArray[i] == "Sunny"){

      fill(237,28,36,50);

    }
    if (weatherArray[i] == "Cloudy"){
      fill(247,147,30,50);
    }

    if(weatherArray[i] == "PartlyCloudy"){
      fill(0,113,188,50);
    }
    if(weatherArray[i] =="RainShower"){

      fill(140,198,63,50);
    }

    if (weatherArray[i] == "SnowShower"){
      fill(102,45,145,50);
    }
    if(weatherArray[i] == "Fair"){
      fill(179,179,179,50);
    }
    push();
    noStroke();
    rect(120,rowsArray[i]*200+50,970,120);
    pop();

    stroke("#808080");
    strokeWeight(0.07);
    for(var i2 = 0; i2 <1000; i2 += 50){
      line (i2+100,0,i2+100,rowsArray[i]*210);
    }


  }
  for(var i=0;i<date.length;i++){
    fill('grey');
    text(date[i],0,rowsArray[i]*180+150);
  }
  for(var i = 0 ;i<temporture.length;i ++){

    fill('grey');
    text('Temporture '+temporture[i],0,rowsArray[i]*180+180);
  }

for(var i = 0; i <weatherArray.length;i ++){
  fill('grey');
  text(weatherArray[i],0, rowsArray[i]*180+210);
}
}



class dataCircle{

  constructor(x,y,t,r,t2,d){
    this.x = x;
    this.y = y;
    this.t = t;
    this.r = r;
    this.t2 = t2;
    this.d = d;
//print(t2);
  }
  show(){
    stroke("white");
    strokeWeight(1);
    noFill();



              ellipse(this.t*10+10,this.r*200+100,this.t2*20,this.t2*20);
              line(this.t*10+10,this.r*200+100,this.t*10+10,this.r*200+100);
// print(this.t[i3]);
// print(this.t2[i4]);

        }
        hover(){
            if(dist(mouseX,mouseY,this.t*10,this.r*200+100)<this.t2*10){
              fill("white");
              noStroke();
            //  text(this.t2,this.t*10+10,this.r*400);
              text('Total Usage '+ this.t2,mouseX,mouseY);


            }

        }


      }

class socialMediaCircle{
  constructor(s,t,r){
    this.s = s;
    this.t = t;
    this.r = r;
  }

    show(){
      noFill();
      stroke("#ed1c24");
      strokeWeight(1);
      for(var i = 0 ;i <randomnizeArray.length;i+=1){
      ellipse(this.t*10+10,this.r*200+randomnizeArray[i],this.s*20,this.s*20);
    //  console.log(this.t*10+10,'actural');

}
}
hover(){
  for(var i =0;i <randomnizeArray.length;i+=1){
  if(dist(mouseX,mouseY,this.t*10,this.r*200+randomnizeArray[i])<this.s*20){
    fill("#ed1c24");
    noStroke();
  //  text(this.t2,this.t*10+10,this.r*400);
    text('Social Media '+ this.s,mouseX,mouseY+30);

}
}

    }

}




class entertainmentCircle{


  constructor(e,t,r){
    this.e = e;
    this.t = t;
    this.r = r;

  }
  show(){
    noFill();
    stroke("#0071bc");
    strokeWeight(1);
    ellipse(this.t*10+60,this.r*200+110,this.e*20,this.e*20);
  }
  hover(){
    if(dist(mouseX,mouseY,this.t*10+60,this.r*200+110)<this.e*20){
      noStroke();
      fill("#0071bc");
      text('Entertainment '+this.e,mouseX,mouseY+90);


    }


  }

}

class productivityCircle{
constructor(p,t,r){
  this.p = p;
  this.t = t;
  this.r = r;

}

show(){
  noFill();
  stroke("#f7931e");
  strokeWeight(1);
  ellipse(this.t*10+60,this.r*200+90,this.p*100,this.p*100);

}
hover(){
    if(dist(mouseX,mouseY,this.t*10+60,this.r*200+90)<this.p*100){
      fill("#f7931e");
      noStroke();
    //  text(this.t2,this.t*10+10,t his.r*400);
      text('Porductivity '+ this.p,mouseX,mouseY+60);


}
}
}
