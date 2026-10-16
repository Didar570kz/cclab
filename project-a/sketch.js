function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
//the outer
  fill(211, 245, 243) 
ellipse(200,200,120,88)
  
//lines out
  //right
    line(150,200,150,176)  
    line(145,200,170,162)
    line(160,200,185,158)
    line(175,200,200,156)
    line(190,200,215,158)
    line(205,200,230,162)
    line(220,200,245,172)
  //left
    line(150,200,150,224)  
    line(145,200,170,238)
    line(160,200,185,242)
    line(175,200,200,244)
    line(190,200,215,242)
    line(205,200,230,238)
    line(220,200,245,228)
  
  //the outer inner
  fill(140, 237, 234) 
ellipse(200,200,108,62)
  
  //center
  fill(243, 255, 227)
  ellipse(200,200,24,14)
  
//inner outer 
  fill(252, 220, 243)
circle(240,200,27)
  fill(252, 220, 243)
circle(160,200,27)
  
//inner inner
  fill(250, 95, 209)
circle(240,200,13)
  fill(250, 95, 209)
circle(160,200,13)

  //lines in
  //line(185,190,200,200)


}