let prevTimeStamp;
let kickSample;

let reverb;

let count = 0;

let loop;
let synth;

let loopInterval = 1;

let scale = 'phrygian major';

let numBalls = 5;
let balls = [];

let rectWidth = 100;
let rectHeight = 100;

function setup() {
 createCanvas(600, 400);
 colorMode(HSB);

 for (let i = 0; i < numBalls; i++){
  balls.push(new Ball(random(width), random(height), random(360)));
 }

}

function draw() {
  background(0, 0, 0, .1);
  
  // let n = random(100);
  // if (n < 10){
  //   bird.play()
  // }

  for (let ball of balls){
    ball.draw();
    ball.update();
  }

  // rectMode(CENTER)
  let rectX = width / 2;
  let rectY = height / 2;
  
  fill(count % 360, 50, 100);
  rect(rectX, rectY, rectWidth, rectHeight);

  

  count++;
}

function preload(){
  kickSample = loadSound("https://jarcher888.github.io/computational-art-spring2024/assignments/08_sound/samples/kick.wav");
  bird = loadSound("https://jarcher888.github.io/computational-art-spring2024/assignments/08_sound/samples/bird.wav");
}

function mousePressed(){
  userStartAudio();

  if (mouseX >= width / 2 && mouseX <= width / 2 + 100 && mouseY >= height / 2 && mouseY <= height / 2 + 100){
    // kickSample.play();
    bird.play();

    synth = new p5.PolySynth();

    synth.play(midiToFreq(60 + count), .9, 0, .1);

    reverb = new p5.Reverb();
    reverb.process(synth, 5, 2);

    
  
    count++;
  }

  
}

