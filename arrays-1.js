var shade = [10, 20, 45, 25, 60];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
  
  fill(shade[0], 100, 100);
  rect(0*width/5, 0, width/5, height);
  
  fill(shade[1], 100, 100);
  rect(1*width/5, 0, width/5, height);
  
  fill(shade[2], 100, 100);
  rect(2*width/5, 0, width/5, height);
  
  fill(shade[3], 100, 100);
  rect(3*width/5, 0, width/5, height);
  
  fill(shade[4], 100, 100);
  rect(4*width/5, 0, width/5, height);
}
