var x = 100;
function setup() {
	createCanvas(windowWeight, windowHeight);
	colorMode(HSB);
}
function draw() {
	background(x, 255, 255);

}

function mousePressed {
	x = random(300);
}
