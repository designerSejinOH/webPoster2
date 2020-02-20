let poster;

function preload(){
  poster = loadImage('DirtyHit_poster.png');
}

function setup() {
 createCanvas(210*2,297*2);
colorMode(HSB);
}
let x = 0;

function draw() {
background(x,255,255);
image(poster,0,0,210*2,297*2);

}
function deviceShaken{
  x = random(300);
}
