let systems = [];
let gravity;
let numSystems = 5;


function setup() {
 createCanvas(800, 600);
 colorMode(HSB);

 gravity = createVector(0, 0.1);

 for (let i = 0; i < numSystems; i++){
  systems.push(new ParticleSystem(random(100, width - 100), height));
 }


 background(0, 0, 100);
}

function draw() {
  background(0, 0, 100);

  
  
  for (let ps of systems){
    ps.update();
  }
  
}
