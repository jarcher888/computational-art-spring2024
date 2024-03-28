
let vehicles = [];
let numVehicles = 100;
let target;


function setup() {
  createCanvas(600, 600);

  colorMode(HSB);
  noStroke();
  
  target = createVector(width/4, height/2);
  for(let i = 0; i < numVehicles; i++) {
    vehicles.push(new Vehicle(random(width), random(height), target));
  }
}

function draw() {
  background(0, 0, 100, .01);

  target.x = mouseX; 
  target.y = mouseY;

  ellipse(target.x, target.y, 10, 10);

  for (let vehicle of vehicles) {
    vehicle.update();
    vehicle.show();
    vehicle.wrap();
  }
}
