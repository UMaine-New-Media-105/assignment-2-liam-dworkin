function setup() {
  createCanvas(600, 400);
}

//I'm using my initials "L"-iam "D"-workin for my two flags from two separate countries. I decided to choose Libya for the "L" and then after finding one country with a once powerful authoritarian leader (Muammar Gaddafi) I decided for the "D" I would try and do the same. So I'm choosing the DPRK, or the Democratic People's Republic of Korea also known as North Korea. I think the flag aesthetic of both flags being horizontally composed with central icons (both are stars) as well as the 'powerful' aura of both nations will work swimmingly for my new country of super authority.

//L - Libya
//D - DPRK - North Korea

//I am using RGB as each shape can easily be matched to the actual digital RGB value of the respective countries flags. I mixed the varying RGB values but used the hex numbers as the functions description for fill.

//I've mixed the horizontal aspects of the two flags into a more abstract look with the weight of the flag drawn to the left with a play on both flags stars using colors either from the original or opposite flag. It is a bit linear but I wanted to challenge myself to do all the color, positiong, and sizing through the function.

//I went for a Piet Mondrian-esque square movement, altering the colors like his primaries with the distinct reds and green instead of yellow.

function draw() {
  background(220);
  rectMode(CENTER);
  colorMode(RGB);

  //Libya Red - E70013
  push();
  rectBuilder(0, 0, 2, "#E70013");
  pop();

  //DPRK Blue - 024FA2
  push();
  rectBuilder(100, 400, 1, "#024FA2");
  pop();

  //Libya Green - 239E46
  push();
  rectBuilder(1880, 200, 5, "#239E46");
  pop();

  //DPRK Red - ED1C27
  push();
  rectBuilder(150, 300, 1.6, "#ED1C27");
  pop();

  //Libya Black - 000000
  push();
  rectBuilder(-100, 200, 1.1, "#000000");
  pop();

  //DPRK Blue - 024FA2
  push();
  rectBuilder(760, 90, 1.3, "#024FA2");
  pop();

  //DPRK Blue - 024FA2
  push();
  rectBuilder(100, 100, 1, "#024FA2");
  pop();

  //DPRK Blue - 024FA2
  push();
  rectBuilder(300, 100, 1, "#024FA2");
  pop();

  //Libyan DPRK White - FFFFFF
  push();
  singleVertRect(380, 200);
  pop();

  //Libya White for DPRK Star Circle - FFFFFF
  //This one contains the star design of the Libyan flag.
  push();
  circBuilder(495, 130, 1.61, "#FFFFFF");
  pop();

  //Libya Black for DPRK Star Circle - 000000
  push();
  circBuilder(510, 130, 1.6, "#000000");
  pop();

  //Libyan Red - E70013
  push();
  starBuilder(510, 130, 15, 40, 5, "#E70013");
  pop();

  //Libya Black for DPRK Star Circle - 000000
  push();
  translate(width * 0.5, height * 0.5);
  circBuilder(0, 0, 2.1, "#000000");
  pop();

  //Libya Green for DPRK Star Circle - 239E46
  push();
  translate(width * 0.5, height * 0.5);
  circBuilder(0, 0, 2, "#239E46");
  pop();

  //DPRK Red Star - ED1C27
  //Used my added variables in the function to alter the position and color as well as rotation of the star
  push();
  translate(width * 0.5, height * 0.5);
  starBuilder(0, 0, 32, 75, 5, "#ED1C27", 0.95);
  pop();
}

//Function for building rectangles for the big chunks of the flag

function rectBuilder(x, y, size, color) {
  push();
  noStroke();
  translate(x, y);
  scale(size);
  fill(color);
  rect(0, 0, 600, 100);
  pop();
}

//Function for a circles

function circBuilder(x, y, size, color) {
  push();
  noStroke();
  translate(x, y);
  scale(size);
  fill(color);
  ellipse(0, 0, 100, 100);
  pop();
}

function singleVertRect(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill("#FFFFFF");
  rect(0, 0, 20, 400);
  pop();
}

//I did take this basic function from reference; however, I've rewritten it slightly with my own variables. It's very similar but it's exactly what I needed for a 'star' function. I've also added 'color' and noStroke so I can manipulate the function for each star I may need.

function starBuilder(x, y, radius1, radius2, npoints, color, flip) {
  push();
  fill(color);
  rotate(flip);
  noStroke();
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let one = x + cos(a) * radius2;
    let two = y + sin(a) * radius2;
    vertex(one, two);
    one = x + cos(a + halfAngle) * radius1;
    two = y + sin(a + halfAngle) * radius1;
    vertex(one, two);
  }
  endShape(CLOSE);
  pop();
}
