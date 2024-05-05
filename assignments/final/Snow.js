class Snow{
    constructor(x, y, offset){
        this.pos = createVector(x, y);
        this.vel = createVector(0, 1);
        this.acc = createVector(0, gravity);

        this.mass = 1;

        this.offset = offset;
    }

    show(){
        push();
        translate(this.pos.x, this.pos.y);
        noStroke();
        fill(50, 0, 100);
        ellipse(0, 0, 20);
        pop();
    }

    update(){
        this.wrap();

        this.vel.add(this.acc)
        this.pos.x += map(sin(noise(frameCount + this.offset)), 0, 1, -2, 2);
        this.pos.add(this.vel);
        
        this.acc.mult(0);
        
    }

    wrap(){
        if (this.pos.y >= height - 100){
            this.pos.y = 0;
            this.pos.x = random(width)
        }
    }

}


