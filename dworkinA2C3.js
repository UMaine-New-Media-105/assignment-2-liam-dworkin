//variables I've kept the same just for convenience sake when transferring my code from assignment to assignment
let scaleX = 2;
let orientation = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("palegoldenrod");
  //below are the three sprites I've called back in before adding location/scale modifiers
  yeetBall(200, 200, 5);

  yeetBall(250, 250, 2);

  yeetBall(100, 100, 1);
}
//contains my function that allows the sprite to exist as a callable function with varying size/scale that can be assigned back in the draw function
function yeetBall(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("hsla(100, 45%, 75%, .7)");
  stroke("cyan");
  ellipse(0, 0, 80, 80);
  scale(scaleX / 5);
  translate(orientation * -2.3, orientation * -0.03);
  fill("red");
  textSize(75);
  noStroke();
  text("(✿ᴗ✿)", 0, 0);
  pop();
}
