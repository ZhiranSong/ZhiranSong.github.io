let table;
let temporture;
let total;

let x = 0;
let temportureArray=[];


function preload(){

  table = loadTable('personalData.csv','csv','header');

}

function setup() {
  // put setup code here
  background("#2b2b2b");
  createCanvas(windowWidth,windowHeight);
for(let i =0;i <table.getRowCount();i++){



  total = table.getString(i,'total');

  temporture = table.getNum(i,'temporture');


  noStroke();
  fill("red");
  ellipse(random(width),height/2,temporture,temporture);
  print(total);
  print(temporture);
  fill("blue");
  ellipse(width/2,height/2,64,64);

x =+1;
// temportureArray.push(new temporture(temporture));

text(total);
}




}




function draw() {


    //
    // fill("red");
    // ellipse(temporture,temporture,50,50);


  // put drawing code here
}
