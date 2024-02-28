let numCellsWidth = 8;
let numCellsHeight = 6;
let numPoints = 10;
let cellWidth;
let cellHeight;
let xoff = 0;
let yoff = 5;

function setup() {
 createCanvas(800, 600);
 colorMode(HSB);

  cellWidth = width / numCellsWidth;
  cellHeight = height / numCellsHeight;
  

  drawGrid();
}

function draw() {
  
}


function drawGrid(){
  for (let i = 0; i < numCellsWidth; i++){
    for (let j = 0; j < numCellsHeight; j++){
      let x = cellWidth * i;
      let y = cellHeight * j;

      let hue = map(i, 0, numCellsWidth, 0, 360);
      push();

      translate(x, y);
      fill(hue, 50, 100);
      rect(0,0, cellWidth, cellHeight);

      beginShape();
      let circleX = cellWidth / 2;
      let circleY = cellHeight / 2;

      
      translate(circleX, circleY);
      let offset = map(noise(x * .01, y * .01), 0, 1, -40, 40);

      hue = (hue + 180 + offset) % 360;
      fill(hue, 100, 100, .5);
      let baseRadius = 40;
      for (let k = 0; k < TWO_PI; k += .3){
        let radius = baseRadius + map(noise(xoff, yoff), 0, 1, -15, 15);
        let vertexX = radius * cos(k);
        let vertexY = radius * sin(k);

        vertex(vertexX, vertexY);

        xoff += .5;
          
      }

      endShape(CLOSE);
      yoff += .5;
      
      pop();
    }
  }
}
