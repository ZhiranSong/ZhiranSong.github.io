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

let rows;
let rowsArray = [];

let posX = 0;
let posY = 0;




function preload(){

  table = loadTable('personalData.csv','csv','header');

}

function windowResized(){


  resizeCanvas(windowWidth,windowHeight);
}

function setup(){
  canvas= createCanvas(windowWidth, windowHeight*7);
  canvas.position(0,0);
   //canvas.z-index = -1;
  for(var i=0; i<table.getRowCount();i++){
    temporture.push(table.getString(i,"temporture"));
    rows = table.getNum(i,"Number");
    total.push(table.getNum(i,"total"));
    socialMedia.push(table.getNum(i,'SocialMedia'));
    entertainment.push(table.getNum(i,'Entertainment'));
    productivity.push(table.getNum(i,'productivity'));


    entertainmentArray.push(new entertainmentCircle(entertainment[i],temporture[i],rows));
    socialMediaArray.push(new socialMediaCircle(socialMedia[i],temporture[i],rows));
    temportureArray.push(new dataCircle(posX,posY,temporture[i],rows,total[i],date[i]));
    productivityArray.push(new productivityCircle(productivity[i],temporture[i],rows));


    rowsArray.push(table.getNum(i,'Number'));
    date.push(table.getString(i,"Date"));



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
  }

    for(var i5 = 0;i5 < entertainmentArray.length;i5++){
      entertainmentArray[i5].show();
    }
      for (var i6 = 0;i6 < productivityArray.length;i6++){
        productivityArray[i6].show();
      }
    }








function toggleObject(){


}

function formStructure(){


  translate(400,700);
  stroke("#808080");

  line(100,0,100,3000);


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
            if(dist(mouseX,mouseY,this.t*10,this.r*10+100)<this.t2*20){
              fill("grey");
              text(this.t2,this.t*10+10,this.r*200+100);
              text(this.d);

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
      ellipse(this.t*10,this.r*200+randomnizeArray[i],this.s*20,this.s*20);

}

    }

    hover(){

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
}
