var shade = [10, 20, 45, 25, 60, 40, 70, 60, 85];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
	
	for (i = 0; i < shade.length; i ++) {
		fill(shade[i], 100, 100);
		rect(i*width/shade.length, 0, width/shade.length, height);
	}
}

function mousePressed() {
	shade.push(mouseY);
}
