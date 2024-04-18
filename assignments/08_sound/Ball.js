class Ball{
    constructor(x, y, hue){
        this.pos = createVector(x, y);
        this.vel = createVector(random(-5, 5), random(-5, 5));

        this.hue = hue;
    }

    draw(){
        fill(this.hue, 50, 100)
        ellipse(this.pos.x, this.pos.y, 40);
    }


    update(){
        if (this.pos.x < 0){
            let note = floor(random(0,2));
            synth.play(midiToFreq(64 + scales[scale][note]), .1, 0, .1);
            reverb.process(synth, random(5, 10), 2);
            this.vel.x *= -1;
        }else if (this.pos.x > width){
            let note = floor(2,4);
            synth.play(midiToFreq(64 + scales[scale][note]), .1, 0, .1);
            reverb.process(synth, random(5, 10), 2);
            this.vel.x *= -1;

        }else if (this.pos.y < 0){
            let note = floor(4,6);
            synth.play(midiToFreq(64 + scales[scale][note]), .1, 0, .1);
            this.vel.y *= -1;
        }else if(this.pos.y > height){
            let note = floor(6,8);
            synth.play(midiToFreq(64 + scales[scale][note]), .1, 0, .1);
            this.vel.y *= -1;
        }

        if (this.pos.x > width / 2 && this.pos.x < width / 2 + 100 && this.pos.y > height / 2 && this.pos.y < height / 2 + 100){
            this.vel.x *= -1;
            this.vel.y *= -1;
            kickSample.play();
        }
        

        this.pos.add(this.vel);
    }
}