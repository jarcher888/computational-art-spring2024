class Particle{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.hue = random(360);
    }

    update(){

    }

    show(){

        push();

        noStroke();

        translate(this.pos.x, this.pos.y);
        fill(this.hue, 50, 100, .5);
        ellipse(0, 0, 20);
        pop();

    }
}