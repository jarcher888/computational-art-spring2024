let vehicles = [];
let numVehicles = 100;
let gravity;
let target;

function setup() {
 createCanvas(800, 600);
 colorMode(HSB);

 gravity = createVector(0, 0.38);

 target = createVector(width/4, height/2);

 for (let i = 0; i < numVehicles; i++){
  vehicles.push(new Vehicle(random(width),random(height), target));
 }
}

function draw() {
  background(0, 0, 100, .3);

  target.x = mouseX;
  target.y = mouseY;

  ellipse(target.x, target.y, 50, 50);

  for (let vehicle of vehicles){
    vehicle.update();
    vehicle.show();
  }
}
