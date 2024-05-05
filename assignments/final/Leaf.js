class Leaf{
    constructor(x, y, hue, radius){
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.hue = hue;

        this.mass = 5

        this.radius = radius;

        this.fall = false;

    }

    draw(){
        noStroke();
        fill(this.hue, 70, 70);
        circle(this.pos.x, this.pos.y, this.radius)
    }

    update(){
        if (random(100) > .80){
            this.fall = true
        }

        if (this.fall){
            if (this.pos.y > height - 100){
                this.addForce(gravity);

                this.vel.add(this.acc); 
                this.vel.limit(5); 
                this.pos.add(this.vel);

                this.acc.mult(0);
            }
        }
    }

    addForce(force){
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }
}