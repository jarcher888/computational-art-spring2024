class Spring{
    constructor(){

        this.predator = new Predator(birdImg, width - 30, height / 2 - 30);
        this.prey = new Prey(beeImg, width - 80, height / 2 - 26);

        this.rain = [];
        let numRain = 100;
        for (let i = 0; i < numRain; i++){
            this.rain.push(new Rain(random(width), random(0, height - 100)))
        }


    }

    draw(){
        // Set background color
        push();
        
        noStroke();
        fill(175, 29, 50);
        translate(0, 0);
        rect(0, 0, width, height);

        pop();

        if (random(100) > 99){
            push();
            stroke(60);
            strokeWeight(4);
            noFill();
            translate(random(width), 0);
            beginShape();
            vertex(0, 0);
            vertex(50, 100);
            vertex(-50, 200);
            vertex(70, 320);
            vertex(-30, height - 100);
            endShape();
            pop();

            thunderSample.play();
            
        }



        //Create ground
        push();
        noStroke();
        fill(48, 38, 56);

        translate(0, height - 100);
        rect(0, 0, width, 100);
        pop();

        for (let drop of this.rain){
            drop.draw();
        }

        this.predator.draw();
        this.prey.draw();
    }
    update(){

        


        for (let drop of this.rain){
            drop.update();
        }
        this.predator.update();
        this.prey.update();
    }


    nextSeason(){
        currentSeason = season_3;
    }

}

// Palette
// #B1F8F2 Celeste hsb(175, 29, 97)
// #BCD39C Celadon hsb(85, 26, 83)
// #FFFC99 Mindaro hsb(58, 40, 100)
// #EAFDCF Nyanza hsb(85, 18, 99)
// #8E8358 Moss green hsb(48, 38, 56)


