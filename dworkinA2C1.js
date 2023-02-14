  //Variable for offsetting the circles.
  let offset = 40;
  
  //Variable for color change 
  let hueI = 100;
  let hueC = 1.5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("pink");
  
  strokeWeight(1.2)
  stroke("orange");

  //The initial design is still pretty much the same
  //I used 5 separate functions to call in the ellipses I had once
  //I'm not sure if this is entirely what you're looking for or if the goal was to instead re-create and color the grid by column; however, I just wanted something to pass in using separate functions to create the same gradient 'L' effect with the circles
  
  //calling my functions up from below 
  circ1();
  circ2();
  circ3();
  circ4();
  circ5();
  
}

  //All 5 of the functions below re-create the circles/color/location
  //I guess I could try and re-create single columns but I'm worried it'd be a lot harder to re-color them column by column even if using a 'single' function makes it simple to 'translate' them across the canvas.

function circ1()

{
  fill(hueI, hueI*hueC, hueI);
  ellipse(0+offset,0+offset,80,80); 
}

 
function circ2()

{
  fill(hueI, hueI*hueC+20, hueI);
  ellipse(0+offset,80+offset,80,80);
  fill(hueI-hueC, hueI*hueC+30, hueI+hueC);
  ellipse(0+offset,160+offset,80,80); 
  fill(hueI-hueC, hueI*hueC+50, hueI+hueC);
  ellipse(0+offset,240+offset,80,80);
}

function circ3()

{
  fill(hueI-hueC, hueI*hueC+75, hueI+hueC);
  ellipse(0+offset,320+offset,80,80); 
  ellipse(80+offset,320+offset,80,80);
  ellipse(160+offset,320+offset,80,80);
  ellipse(240+offset,320+offset,80,80);
  ellipse(320+offset,320+offset,80,80);
}

function circ4()
{
  fill(hueI/hueC, hueI*hueC, hueI*hueC+10);
  ellipse(160+offset,0+offset,80,80); //top row
  ellipse(80+offset,0+offset,80,80);
  ellipse(320+offset,0+offset,80,80);
  ellipse(240+offset,0+offset,80,80);
  
  fill(hueI/hueC, hueI*hueC, hueI*hueC+30);
  ellipse(80+offset,80+offset,80,80); //2nd from top
  ellipse(160+offset,80+offset,80,80);
  ellipse(320+offset,80+offset,80,80);
  ellipse(240+offset,80+offset,80,80);
}

function circ5()
{
  
  fill(hueI/hueC, hueI*hueC, hueI*hueC+50);
  ellipse(80+offset,160+offset,80,80); //3rd from top
  ellipse(160+offset,160+offset,80,80);
  ellipse(320+offset,160+offset,80,80);
  ellipse(240+offset,160+offset,80,80);
  
  fill(hueI/hueC, hueI*hueC, hueI*hueC+70);
  ellipse(80+offset,240+offset,80,80); //bottom row
  ellipse(160+offset,240+offset,80,80);
  ellipse(320+offset,240+offset,80,80);
  ellipse(240+offset,240+offset,80,80);
}
