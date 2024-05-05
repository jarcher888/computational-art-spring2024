let grid = [];

let cellCountX = 100;
let cellCountY = 100;

let cellWidth = 50;
let cellHeight = 50;

function setup() {
 createCanvas(800, 900);
 colorMode(HSB);

 frameRate(5);

 cellWidth = width / cellCountX;
 cellHeight = height / cellCountY;

 for(let x = 0; x < cellCountX; x++){
  grid[x] = [];  
  for (let y = 0; y < cellCountY; y++){
    grid[x][y] = new Cell(x, y, random() < 0.5);
  }
 }

}

function draw() {
  background(0, 0, 100);


  let next = [];
  for(let x = 0; x < grid.length; x++){
    next[x] = [];
    for (let y = 0; y < grid[x].length; y++){
      if (y === 0 || y === grid[x].length -1 || x === 0 || x === grid.length - 1){
        next[x][y] = grid[x][y].alive;
      }else {
        next[x][y] = grid[x][y].nextState();
      }
      grid[x][y].show();
    }
   }

   for(let x = 0; x < grid.length; x++){
    for (let y = 0; y < grid[x].length; y++){
      if (next[x][y]){
        grid[x][y].aliveCount++;
      }
      grid[x][y].alive = next[x][y];
    }
   }
   
}

