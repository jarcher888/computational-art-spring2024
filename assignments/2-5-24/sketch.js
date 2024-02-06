let numCircles = 100;


function setup() {
 createCanvas(800, 600);
 colorMode(HSB);
 noStroke();
}

function draw() {
  background(0, 0, 100)
  
  
  let xoff = 0;  
  

  for (let i = 0; i < numCircles; i++){
    let x = map(i, 0, numCircles, 0, width);
    let hue = map(i, 0, numCircles, 100, 270);
    
    let h = map(noise(xoff), 0, 1, 10, 300);

    fill(hue, 80, 100);
    ellipse(x, height/2, width/numCircles, h);

    xoff += .1;

  }
}
