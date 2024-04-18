let prevTimeStamp;
let kickSample;

let reverb;

let count = 0;

let loop;
let synth;

let loopInterval = 1;

let scale = 'phrygian major';

let numBalls = 8;
let balls = [];

function setup() {
 createCanvas(600, 400);
 colorMode(HSB);

 for (let i = 0; i < numBalls; i++){
  balls.push(new Ball(random(width), random(height), random(360)));
 }

}

function draw() {
  background(0, 0, 100);
  

  for (let ball of balls){
    ball.draw();
    ball.update();
  }

  // rectMode(CENTER)
  fill(200, 50, 100);
  rect(width / 2, height / 2, 100, 100);

  //let deltaTime = millis() - prevTimeStamp;

  //prevTimeStamp = millis();
}

function preload(){
  kickSample = loadSound("https://jarcher888.github.io/computational-art-spring2024/assignments/08_sound/samples/kick.wav");
  birds = loadSound("https://jarcher888.github.io/computational-art-spring2024/assignments/08_sound/samples/bird.wav");
}

function mousePressed(){
  userStartAudio();

  if (mouseX >= width / 2 && mouseX <= width / 2 + 100 && mouseY >= height / 2 && mouseY <= height / 2 + 100){
    kickSample.play();
    birds.play();

    synth = new p5.PolySynth();

    synth.play(midiToFreq(60 + count), .1, 0, .1);

    reverb = new p5.Reverb();
    reverb.process(synth, 5, 2);
  
    count++;
  }

  
}

