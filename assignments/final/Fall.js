class Fall{
    constructor(){

        this.predator = new Predator(wolfImg, width - 40, height - 198);
        this.prey = new Prey(squirrelImg, width - 60, height - 130);

        this.trees = [];
        this.offsets = [];

        for (let i = 0; i < numTrees; i++){
            this.offsets.push(random(30, 50));
            this.trees.push(new Tree(map(i, 0, numTrees, 100, width), height - 100, random(100, 170), this.offsets[i]));
            
        }

    }

    draw(){
        // Set background color
        push();
        
        noStroke();
        fill(4, 76, 100);
        translate(0, 0);
        rect(0, 0, width, height);

        pop();

        //Create ground
        push();
        noStroke();
        fill(24, 92, 35);

        translate(0, height - 100);
        rect(0, 0, width, 100);
        pop();

        for(let tree of this.trees){
            tree.draw();
        }

        this.predator.draw();
        this.prey.draw();

        
    }

    update(){
        this.predator.update();
        this.prey.update();

        for(let tree of this.trees){
            tree.update();
        }
    }

    nextSeason(){
        currentSeason = season_1;
    }
}

// Palette:
// #582707 hsb(24, 92, 35) Seal brown
// #972D07 hsb(16, 95, 59) Brown
// #FF4B3E hsb(4, 76, 100) Tomato
// #FFB20F hsb(41, 94, 100) Selective yellow
// #FFE548 hsb(51, 72, 100) Maize