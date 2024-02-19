class Particle{
    constructor(x, y, h){
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.acc = createVector(0, 0);
        this.hue = (h + random(20)) % 360;
 
        this.mass = 1;
        
        this.radius = 10 + sqrt(this.mass);

        this.lifetime = random(50, 400);
    }

    addForce(force){
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    addWaterDrag(){
        let dragConstant = -.3;
        let forceDrag = this.vel.mag() * this.vel.mag() * dragConstant;
        let drag = p5.Vector.normalize(this.vel);
        drag.mult(forceDrag)
        this.addForce(drag);
    }

    wrap(){
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
        
    }


    update(){
        this.lifetime--;
        if (this.lifetime < 0){
            this.destroy = true;
        }

        this.radius -= .01;

        this.addForce(gravity);

        if (this.pos.y < height /2){
            this.addWaterDrag;
        }

        //this.addForce(wind);

        // for (let dot of dots){
        //     if (dot !== this){
                
        //         let vec = p5.Vector.sub(dot.pos, this.pos);

        //         let g = .0001;
        //         let d = vec.mag();
        //         let gForce = (g * this.mass * dot.mass) / d * d;

        //         vec.normalize();
        //         vec.mult(gForce);
        //         vec.mult(-1);
        //         dot.addForce(vec);
        //     }
        // }

        this.vel.add(this.acc);
        this.vel.limit(5)
        this.pos.add(this.vel);

        //this.wrap();

        this.acc.mult(0);
    }

    show(){

        push();

        noStroke();

        translate(this.pos.x, this.pos.y);
        fill(this.hue, 50, 100, .5);
        ellipse(0, 0, this.radius * 2);
        pop();

    }
}