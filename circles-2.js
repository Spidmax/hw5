var sizes = [40, 70, 90, 30, 60, 30, 20];

function setup() {
  createCanvas(600, 600);

  noStroke();
	colorMode(HSB);
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i], 100, 100);
    ellipse(20+i*80, height/2, sizes[i], sizes[i]);
  }
}
