class Dot{
    constructor(x, y, dheight, dwidth, index){
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.hue = 240;

        this.index = index;
        
        this.mass = 5;
        
        this.dheight = dheight;
        this.dwidth = dwidth;

        this.lifetime = 30;
    }

    addForce(force){
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    wrap(){
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
        
    }

    update(){
        this.addForce(downwardGravity);
        this.addForce(wind);
        if (this.index == -1){
            this.lifetime -= 1;
        }
        
        
        this.vel.add(this.acc);
        
        this.vel.limit(5);
        this.pos.add(this.vel);
        
        if (this.index != -1){
            this.wrap();
        }
        
        this.acc.mult(0);
    }

    show(){

        push();

        noStroke();

        translate(this.pos.x, this.pos.y);
        fill(this.hue, 50, 100, .5);
        ellipse(0, 0, this.dwidth, this.dheight);
        pop();

    }


}