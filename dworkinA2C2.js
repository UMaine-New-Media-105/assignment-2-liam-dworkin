function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //I am trying to emulate an oldschool mouse cursor as my object
  //Basic fill, stroke, etc...
  //Below is beginShape and the vertex points used to form the shape
  //Will try and make it less lame before class tomorrow (11/14)
  
  fill('hsla(100, 49%, 70%, .7)');
  stroke('black');
  strokeWeight(1.3);
  
  beginShape();
  vertex(275, 375);
  vertex(295, 100);
  vertex(185, 160);
  vertex(35, 130);
  endShape(CLOSE);
  
}
