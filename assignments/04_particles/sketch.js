let gravity;
let system;
let exhaust;
let wind;
let xoff = 0;
let xPos;



function setup() {
 createCanvas(800, 600);
 colorMode(HSB);

 xPos = width;

 gravity = createVector(0, -1);
 exhaust = createVector(2, 0);

 //wind = createVector(0, 0)
 //particle = new Particle(width/2, height/2);
 system = new ParticleSystem(xPos, height - 63);

 background(0, 0, 100);
}

function draw() {
  background(0, 0, 100);

  push();
  stroke(2);
  fill(130, 50, 50);
  rect(0, height - 50, width, height- 50);
  line(0, height - 50, width, height - 50);
  pop();

  push();
  fill(210, 50, 90);
  rect(0, 0, width, height - 50)
  pop();


  for (let i = 0; i < system.particles.length; i++){
    wind = createVector(map(noise(system.offsets[i]), 0, 1, -7, 7), 0);
    system.offsets[i]++;
  }

  push();
  translate(xPos - 100, height - 150);
  fill(300, 50, 50);
  // rect(0, 0, 100, 100);
  pop();

  
  system.update();
  

  push();
  fill(300, 50, 50);
  beginShape();
  vertex(xPos, height - 63);
  vertex(xPos, height - 113);
  vertex(xPos - 150, height - 113);
  vertex(xPos - 210, height - 63);
  endShape(CLOSE);
  fill(255, 0, 0);
  ellipse(xPos-140, height - 63, 26);
  ellipse(xPos - 45, height - 63, 26);
  pop();

  
  if (mouseIsPressed === true) {
    system.active = true;
    system.pos.x -= 5;
    xPos -= 5;
  }else{
    system.active = false;
  }

  if (xPos < 0){
    xPos = width;
    system.pos.x = xPos
  }

}
