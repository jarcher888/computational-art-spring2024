
let predators = [];
let prey = [];
let numPredators = 100;
let numPrey = 50;
let target;

let count = 0;


function setup() {
  createCanvas(600, 600);

  colorMode(HSB);
  noStroke();
  
  target = createVector(width/2, height/2);
  for(let i = 0; i < numPredators; i++) {
    predators.push(new Predator(random(width), random(height), target, i));
  }

  for (let i = 0; i < numPrey; i++){
    prey.push(new Prey(random(width), random(height), target, i));
  }


}

function draw() {
  console.log(predators.length);
  console.log(prey.length);
  background(0, 0, 100);

  target.x = mouseX; 
  target.y = mouseY;

  ellipse(target.x, target.y, 10, 10);

  for (let predator of predators) {
    predator.update();
    predator.show();
    predator.wrap();
  }
  for (let prey_ of prey){
    prey_.update();
    prey_.show();
    prey_.wrap();
  }
}

