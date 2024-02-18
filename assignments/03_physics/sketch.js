let dots = [];
let splashDots = [];
let numDots = 100;
let downwardGravity;
let wind;
let splashForce;

let xoff = 0;

function setup() {
 createCanvas(800, 600);
 colorMode(HSB);
 
 downwardGravity = createVector(0, 1);

 
 splashForce = createVector(-10, -10);


 for (let i = 0; i < numDots; i++){
  let x = random(0, width)
  let y = random(0, 1200);
  dots.push(new Dot(x, y, 200, 2, i+1));
 }

}

function draw() {
  background(0, 0, 0)

  push();

  fill(240, 50, 50);
  rect(0, height - 40, width, 40);

  pop();

  let windSpeed = map(noise(xoff), 0, 1, 1, 5);
  wind = createVector(1, 0)

  for (let dot of dots){
    //Check to see if dot if hitting the bottom -> splash
    if (dot.pos.y + dot.dheight/2 > height - 40 && dot.pos.y + dot.dheight/2 < height -30){
      splashDots.push(new Dot(dot.pos.x + 5, height - 40, 10, 10, -1));
      splashDots.push(new Dot(dot.pos.x - 5, height - 40, 10, 10, -1));
      for (let splashDot of splashDots){
        splashDot.update();
        splashDot.show();
      }
      
      //dot.splash();
    }
    
    dot.update();
    dot.show();
  }
  splashDots=[];
}
