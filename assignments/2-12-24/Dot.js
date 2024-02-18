class Dot{
    constructor(x, y, r, index){
        this.pos = createVector(x, y);
        this.vel = createVector(1, 0);
        this.acc = createVector(0, 0);
        this.hue = map(index, 0, numDots, 0, 360);

        this.index = index;
        
        this.mass = this.index;
        
        this.radius = r + sqrt(this.mass) * 10;
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
        this.addForce(gravity);
        this.addForce(wind);

        for (let dot of dots){
            if (dot !== this){
                
                let vec = p5.Vector.sub(dot.pos, this.pos);

                let g = .0001;
                let d = vec.mag();
                let gForce = (g * this.mass * dot.mass) / d * d;

                vec.normalize();
                vec.mult(gForce);
                vec.mult(-1);
                dot.addForce(vec);
            }
        }

        this.vel.add(this.acc);
        this.vel.limit(5)
        this.pos.add(this.vel);

        this.wrap();

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