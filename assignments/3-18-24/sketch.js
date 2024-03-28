let vehicles = [];
let numVehicles = 30;
let target;

let flowField = [];
let numCellsWidth = 20;
let numCellsHeight = 20;
let cellWidth;
let cellHeight;

let fishImg;

// function preload() {
//   fishImg = loadImage("fish.png");
// }

function setup() {
  createCanvas(600, 600);

  // fishImg.resize(50, 50);

  colorMode(HSB);

  noStroke();
  fill(100, 10, 0);

  cellWidth = width / numCellsWidth;
  cellHeight = height / numCellsHeight;

  let xoff = 0;
  let yoff = 0;
  let inc = 0.2;
  for (let xIndex = 0; xIndex < numCellsWidth; xIndex++) {
    flowField[xIndex] = [];
    yoff = 0;
    for (let yIndex = 0; yIndex < numCellsHeight; yIndex++) {
      let angle = map(noise(xoff, yoff), 0, 1, 0, 2 * PI);
      flowField[xIndex][yIndex] = new Cell(angle, xIndex, yIndex);
      yoff += inc;
    }
    xoff += inc;
  }
  
  target = createVector(width/4, height/2);
  for(let i = 0; i < numVehicles; i++) {
    vehicles.push(new Vehicle(random(width), random(height), target));
  }
}

function draw() {
  background(0, 0, 0, 0.1);

  target.x = mouseX; 
  target.y = mouseY;

  //ellipse(target.x, target.y, 10, 10);

  for (let xIndex = 0; xIndex < numCellsWidth; xIndex++) {
    for (let yIndex = 0; yIndex < numCellsHeight; yIndex++) {
      flowField[xIndex][yIndex].update();
      flowField[xIndex][yIndex].show();
    }
  }

  for (let vehicle of vehicles) {
    vehicle.update();
    vehicle.show();
  }
}

function positionToFlowFieldIndex(x, y) {
  let xIndex = floor(map(x, 0, width, 0, numCellsWidth));
  xIndex = constrain(xIndex, 0, numCellsWidth-1);
  let yIndex = floor(map(y, 0, height, 0, numCellsHeight));
  yIndex = constrain(yIndex, 0, numCellsHeight-1);
  return createVector(xIndex, yIndex);
}

function mousePressed() {
  let arrayIndeces = positionToFlowFieldIndex(mouseX, mouseY);
  let angle = flowField[arrayIndeces.x][arrayIndeces.y].angle;
  let vel = p5.Vector.fromAngle(angle);
  let vehicle = new Vehicle(mouseX, mouseY, target);
  vehicle.vel = vel;
  vehicles.push(vehicle);
}