let prevTimeStamp;
let kickSample;

let synth;

function setup() {
 createCanvas(800, 600);
 colorMode(HSB);

}

function draw() {
  background(0, 0, 100);

  let deltaTime = millis() - prevTimeStamp;

  prevTimeStamp = millis();
}

function preload(){
  kickSample = loadSound("https://jarcher888.github.io/computational-art-spring2024/assignments/08_sound/samples/kick.wav");
}

function mousePressed(){
  userStartAudio();

  kickSample.play();

  synth = new p5.PolySynth();

  synth.play(midiToFreq(60, .1, timeFromNow, 1.5));
}

