let currentSeason;

let numSnowParticles = 50;
let numTrees = 5;

let foxImg;
let bunnyImg;
let birdImg;
let beeImg;
let fishImg;
let sharkImg;
let wolfImg;
let squirrelImg;

let camera = false;
let cam;

let thunderSample;
let playing = false;

let gravity = 0.38;


let seasons = ['winter', 'spring', 'summer', 'fall'];

let season_1;
let season_2;
let season_3;
let season_4;

function setup() {
 createCanvas(800, 600);
 colorMode(HSB);

 cam = createCapture(VIDEO);
 cam.size(100, 120)
 cam.hide();


 foxImg.resize(120, 0);
 bunnyImg.resize(70, 0);
 birdImg.resize(80, 0);
 beeImg.resize(40, 0);
 fishImg.resize(50, 0);
 sharkImg.resize(120, 0);
 wolfImg.resize(120, 0);
 squirrelImg.resize(50, 0);



 season_1 = new Winter();
 season_2 = new Spring();
 season_3 = new Summer();
 season_4 = new Fall();

 currentSeason = season_1;

}

function draw() {
  background(0, 0, 100);


  currentSeason.update();
  currentSeason.draw();
}

function preload(){
  foxImg = loadImage("./images/fox.png");
  bunnyImg = loadImage("./images/bunny.png");
  birdImg = loadImage("./images/bird.png");
  beeImg = loadImage("./images/bee.png");
  fishImg = loadImage("./images/fish.png");
  sharkImg = loadImage("./images/shark.png");
  wolfImg = loadImage("./images/wolf.png");
  squirrelImg = loadImage("./images/squirrel.png");

  thunderSample = loadSound("./sounds/lightning_2.wav");
}

// Taken from lecture
function mousePressed(){
  if (!playing) {
    userStartAudio();
    playing = true;
  }
}



