let numCellsWidth = 100;
let numCellsHeight = 100;
let cellWidth;
let cellHeight;


function setup() {
 createCanvas(800, 600);
 colorMode(HSB);
 background(0, 0, 100);

 cellWidth = width / numCellsWidth;
 cellHeight = height / numCellsHeight;


 
 
}

function draw() {
    drawGrid(); 
}

function drawGrid(){
  for (let xIndex = 0; xIndex < numCellsWidth; xIndex++){
    for (let yIndex = 0; yIndex < numCellsHeight; yIndex++){
      let x = cellWidth * xIndex;
      let y = cellHeight * yIndex;

      push();
      translate(x, y);
      noStroke();

      

      let hue = map(noise((frameCount + x) * 0.01, (frameCount + y) * 0.01), 0, 1, 0, 360);//(map(xIndex, 0, numCellsWidth, 100, 270));
      fill(hue, 70, 100);
      rect(0, 0, cellWidth, cellHeight);
      
      
      let colorOffset = 10;
      hue = (hue + 180 - colorOffset) % 360;
      fill(hue, 50, 100);
      ellipse(cellWidth/2, cellHeight/2, cellWidth, cellHeight);
      

      hue = (hue + colorOffset * 2) % 360;
      fill(hue, 50, 100);
      ellipse(cellWidth/2, cellHeight/2, cellWidth/2, cellHeight/2);

      
      pop();
    }
  }

  
}
