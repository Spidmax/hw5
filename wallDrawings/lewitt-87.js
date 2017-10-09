function setup() { 
	createCanvas(400, 400);
	background(255);
	colorMode(RGB);
} 

function draw() { 
	stroke(0);
	for (verticalX = 5; verticalX < width; verticalX += 5) {
		line(verticalX, 0, verticalX, height);
	}
	line(0, height/2, width, height/2);
	
	stroke(150, 200, 0);
	for (horizontalY = 5; horizontalY < height/2; horizontalY += 5) {
		line(width/2, horizontalY, width, horizontalY);
	}
	
	stroke(200, 150, 0);
	for (tiltedX1 = 5; tiltedX1 < height*1.5; tiltedX1 += 5) {
		line(tiltedX1, height/2, tiltedX1-height/2, height);
	}
	
	stroke(220, 0, 0);
	for (tiltedX2i = 5; tiltedX2i < height/2; tiltedX2i += 5) {
		line(tiltedX2i+width/2, height, width/2, width-tiltedX2i);
	}
	for (tiltedX2 = width/2; tiltedX2 < width; tiltedX2 += 5) {
		line(tiltedX2, height/2, tiltedX2+width/2, height);
	}
}
