let gravity;
let systems = [];

function setup() {
 createCanvas(800, 600);
 colorMode(HSB);

 gravity = createVector(0, -.01);

 background(0, 0, 100);
}

function draw() {
  background(0, 0, 100);

  let particle = new Particle(width/2, height/2);
  particle.show();
}
