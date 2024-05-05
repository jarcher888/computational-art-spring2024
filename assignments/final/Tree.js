class Tree{
    constructor(x, y, l, offset){
        this.pos = createVector(x, y);
        this.branchLength = l;
        this.offset = offset;
        this.leaves = [];

        let colors = [0, 30, 60, 120];

        let huePicker = floor(random(4));


        this.hue = colors[huePicker];
        
    }

    draw(){
        push();
        translate(this.pos.x, this.pos.y);
        this.branch(this.branchLength);
        pop();
        
    }

    // Tree code taken mostly from lectures
    branch(l){
        strokeWeight(4);
        line(0, 0, 0, -l);

        translate(0, -l);

        l = l * .6;

        if (l > 5){
            push();
            rotate(radians(-45 + map(noise(frameCount * 0.01 + this.offset), 0, 1, -5, 5)));
            this.branch(l);
            pop();

            push();
            rotate(radians(45));
            this.branch(l);
            pop();
        } else{
            // this.leaves.push(new Leaf(0, 0, this.hue, 15))
            noStroke();
            fill(this.hue, 70, 70);
            circle(0, 0, 10);
        } 
    }

    update(){
        for (let leaf of this.leaves){
            leaf.draw();
            leaf.update();
        }
    }
}