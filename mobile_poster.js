let poster;

function setup() {
	createCanvas(windowWeight, windowHeight);
	colorMode(HSB);
}
let x = 0;

function draw() {
	background(x, 255, 255);

}

function deviceShaken {
	x = random(300);
}
