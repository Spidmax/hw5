var sizes = [4, 9, 10, 5, 112, 95, 40, 39];

function setup() {
  createCanvas(600, 600);

  noStroke();
	colorMode(HSB);
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i], 100, 100);
    ellipse(10+i*70, height/2, sizes[i], sizes[i]);
  }
}
