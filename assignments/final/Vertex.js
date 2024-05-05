class Vertex{
    constructor(x, y, offset, index){
        this.pos = createVector(x, y);
        this.offset = offset;
        this.index = index;

    }

    draw(){
        push();
        noStroke();
        strokeWeight(3);
        fill(176, 97, 54);
        ellipse(this.pos.x, this.pos.y, 20);
        pop();

        push();
        strokeWeight(20);
        stroke(176, 97, 54);
        line(this.pos.x, this.pos.y, this.pos.x, height)
        pop();
    }

    update(){

        let downScalar = -8;
        let upScalar = 10;
        if (this.pos.y < height - 400){
            downScalar = 10;
            upScalar = -8;
        }else if (this.pos.y > height - 350){
            downScalar = -8;
            upScalar = 10;
        }
        this.pos.y += map(sin(noise((frameCount * .4 + this.offset))), 0, 1, downScalar * .35, upScalar * .35);
        
    }
}