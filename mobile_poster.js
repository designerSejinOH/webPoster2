let poster;

function preload(){
  poster = loadImage('DirtyHit_poster.png');
}

function setup() {
 createCanvas(210*3,297*3);
colorMode(HSB);
}


function draw() {
background(map(accelerationY,-1,1,0,300),255,255);
image(poster,0,0,210*3,297*3);

}
