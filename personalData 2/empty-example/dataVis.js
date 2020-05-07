let table;

let canvas;

let date;
let total;
let socialMedia;
let entertainment;
let productivity;
let weather;
let temporture;

function preload(){

table = loadTable('personalData.csv','csv','header');

}

function resizeCanvas(){


}

function setup(){
  canvas= createCanvas(windowWidth, windowHeight*3);
  canvas.position(0,0);
  // canvas.z-index = -1;

  for(i = 0; i<table.getRowCount; i++){
    date = table.getString(i,'Date');
    total = table.getString(i,'total');
    socialMedia = table.getNum(i,'SocialMedia');
    productivity = table.getNum(i,'productivity');
    weather = table.getString(i,'Weather');
    temporture = table.getNum(i,'temporture');
    entertainment = table.getNum(i,'Entertainment');


  }


}


function draw(){

  background("#2b2b2b");


}


function formStructure(){





}
