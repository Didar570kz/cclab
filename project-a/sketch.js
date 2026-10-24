let cellX=200;
let cellY=200;
let cellsize=0.4;
let cellSpeedX=0;
let cellSpeedY=0;
let sleep=false;
let sugarCount=20;
let sugarX=[];
let sugarY=[];

function setup() {
  createCanvas(800,500);
  for (let s=0; s<sugarCount; s++) {
    sugarX[s]=random(width);
    sugarY[s]=random(height);
  }
}

function draw() {
  background(71,100,112);
  fill(255);
  for (let s=0; s<sugarCount; s++) {
    circle(sugarX[s],sugarY[s],4);
  }

  for (let dotX=5; dotX<width; dotX+=5) {
    for (let dotY=5; dotY<height; dotY+=5) {
      fill(40,55,61);
      circle(dotX,dotY,1);
    }
  }

  // a sleeping cell 
  if (!sleep) {
    // random movements
    cellX=cellX+random(-10,10);
    cellY=cellY+random(-10,10);

    // running away with accekeration
    let distance=dist(cellX,cellY,mouseX,mouseY);
    if (distance<200 && distance>0) {
      // the closer the faster
      let f=(200-distance)/200*2.5;
      cellSpeedX=cellSpeedX+(cellX-mouseX)/distance * f;
      cellSpeedY=cellSpeedY+(cellY-mouseY)/distance * f;
    }

    // slow down back
    cellSpeedX=cellSpeedX*0.9;
    cellSpeedY=cellSpeedY *0.9;

    // movements 
    cellX=cellX+cellSpeedX;
    cellY=cellY+cellSpeedY;

    // bounadries
    cellX=constrain(cellX,60*cellsize,width- 60*cellsize);
    cellY=constrain(cellY,44*cellsize,height-44 *cellsize);

    // eating sugar
    for (let s=0; s<sugarCount;s++) {
      if (dist(cellX,cellY,sugarX[s],sugarY[s])<50 * cellsize) {
        sugarX[s]= -1000;
        sugarY[s]= -1000; 
        cellsize=cellsize*1.2 ;
      }
  }
  }

  // draw lamine
  push();
  translate(cellX,cellY);
  scale(cellsize); 
  drawCell(0,0);

  // when sleeping make black
  if (sleep) {
    fill(0,0,0,170);
    ellipse(0,0,120,88);
  }
  pop();
} 
function mousePressed() {
  if (dist(mouseX,mouseY,cellX, cellY)< 50*cellsize) {
    sleep=true;
  }
}

function drawCell(centerX,centerY) {
  //the outer
  fill(211,245,243);
  ellipse(centerX,centerY,120,88);

  //lines out
  //top
  line(centerX-50, centerY, centerX-50, centerY-24);
  line(centerX-55, centerY, centerX-30, centerY-38);
  line(centerX-40, centerY, centerX-15, centerY-42);
  line(centerX-25, centerY, centerX, centerY-44);
  line(centerX-10, centerY, centerX+15, centerY-42);
  line(centerX+5, centerY, centerX+30, centerY-38);
  line(centerX+20, centerY, centerX+45, centerY-28);

  //bottom
  line(centerX-50, centerY, centerX-50, centerY+24);
  line(centerX-55, centerY, centerX-30, centerY+38);
  line(centerX-40, centerY, centerX-15, centerY+42);
  line(centerX-25, centerY, centerX, centerY+44);
  line(centerX-10, centerY, centerX+15, centerY+42);
  line(centerX+5, centerY, centerX+30, centerY+38);
  line(centerX+20, centerY, centerX+45, centerY+28);

  //the outer inner
  fill(140,237,234);
  ellipse(centerX,centerY,108,62 );

  //center circles
  fill(243,255,227);
  ellipse(centerX,centerY,24, 14);

  //top1
  fill(255,204,204);
  circle(centerX-20,centerY-15,8);

  //top2
  fill(255,204,204);
  circle(centerX,centerY-20,8);

  //top3
  fill(255,204,204);
  circle(centerX+20,centerY-15 ,8);

  //bottom1
  fill(255,204,204);
  circle(centerX-20,centerY+15 ,8);

  //bottom2
  fill(255,204,204);
  circle(centerX,centerY+20,8);

  //bottom3
  fill(255,204,204);
  circle(centerX+20,centerY+15,8);

  //inner outer
  fill(252,220,243);
  circle(centerX+40,centerY,27);
  fill(252,220,243);
  circle(centerX-40,centerY,27);

  //inner inner
  fill(250,95,209);
  circle(centerX+40,centerY,13);
  circle(centerX-40,centerY,13);
}
