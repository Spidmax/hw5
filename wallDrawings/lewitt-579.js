function setup() { 
  createCanvas(400, 400);
  background(255);
  colorMode(RGB);
  noStroke();
} 

function draw() { 
  fill(0, 150, 200);
  ellipse(200, 100, 200);
  rect(100, 100, 200, 300);
  fill(250, 230, 0);
  ellipse(200, 100, 120);
  rect(140, 100, 120, 300);
  fill(200, 0, 100);
  ellipse(200, 100, 40);
  rect(180, 100, 40, 300);
}
