class Summer{
    constructor(){

        this.predator = new Predator(cam, width, height - 260);
        this.prey = new Prey(fishImg, width - 40, height - 210);

        this.vertices = [];
        let offset = 0;
        let xoff = 0;
        this.numDots = 100;
        for (let i = 0; i < this.numDots; i++){
            let y = map(noise(xoff), 0, 1, height - 400, height - 380);
            this.vertices.push(new Vertex(map(i, 0, this.numDots, 0, width), y, offset, i));
            xoff+=.5;
            offset++;
        }
    }

    draw(){
        // Set background color
        push();
        
        noStroke();
        fill(195, 64, 92);
        translate(0, 0);
        rect(0, 0, width, height);

        pop();

        // Create island
        push();
        noStroke();
        fill(347, 21, 80);
        translate(width / 4 - 100, height / 3 + 145);
        ellipse(0, 0, 800, 500);
        pop();

        // Create sun
        push();
        translate(width, 0);
        noStroke();
        fill(60, 70, 100);
        circle(0, 0, 200);
        pop();
        
        for (let v of this.vertices){ 
            v.draw();
        }

        this.prey.draw();
        this.predator.draw();
    }

    update(){
        this.prey.update();
        this.predator.update();
        for (let v of this.vertices){
            v.update();
        }
    }


    nextSeason(){
        currentSeason = season_4;
    }
}

// Palette:
// #048A81 hsb(176, 97, 54) Dark cyan
// #06D6A0 hsb(164, 97, 84) Emerald
// #54C6EB hsb(195, 64, 92) Vivid sky blue
// #8A89C0 hsb(241, 29, 75) Cool gray
// #CDA2AB hsb(347, 21, 80) Rosy brown