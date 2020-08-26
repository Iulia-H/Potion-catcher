import { recipes } from "./recipe";
export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");
canvas.style.cursor = "crosshair";
canvas.width = innerWidth;
canvas.height = innerHeight;


//Initialize
addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight ;

    init();
});

addEventListener("click", (event)=>{
    bottles.forEach(item =>{
        item.respond();
    });
});

const mouse = {
    x : 0,
    y : 0
};

addEventListener("mousemove", (event)=>{
    mouse.x = event.clientX;
    mouse.y = event.clientY;

});



function drawCursor() {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
}

//Objects

class Shard{
    constructor(x, y) {
        this.velocity = {
            x: Math.random() * 5,
            y: Math.random() * 5
        };
        this.x = x;
        this.y = y;
        this.size = 7;
        this.gravity = 0.1;
        this.friction = 0.8;
        this.frames = 200;
        this.opacity = 1;
    }


    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.4;
        // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x+7, this.y-7);
        ctx.lineTo(this.x-7, this.y-7);
        ctx.lineTo(this.x-14.5, this.y);
        ctx.shadowColor = "#EEF8FB";
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.draw();

        if (this.y + this.size +this.velocity.y > canvas.height-50) {
            this.velocity.y = -this.velocity.y * this.friction;
        }
        else {
            this.velocity.y += this.gravity;
        }
        if (this.x + this.size + this.velocity.x > canvas.width || this.x - this.size <= 0) {
            this.velocity.x = -this.velocity.x;
        }

        this.y += this.velocity.y;
        this.x += this.velocity.x;
        this.frames -= 1;
        this.opacity -= 1 / this.frames;
    }

}


class Potion {
    constructor(recipe, image, x, y, existance = 1) {
        // this.name = name;
        this.recipe = recipe.sort();
        this.image = new Image();
        this.image.src = image;
        this.size = 70;
        this.velocity = {
            x: 0,
            y: Math.random() * 2 + 0.5
        };
        this.x = x;
        this.y = y;
        this.existance = existance;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.existance;
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
        ctx.restore();
    }

    update() {
        if (this.y + this.size + this.velocity.y > canvas.height-45) {
            this.draw();
            this.explode();
            this.existance = 0;
        } else if(this.velocity.y){
            this.draw();
            this.y += this.velocity.y;   
        }else{
            this.break();
            
        }
    }

    respond(){
        if (this.x + this.size/2 >= (mouse.x - 40) && this.x + this.size/2 <= (mouse.x + 40) && 
        this.y + this.size/2 >= (mouse.y - 40) && this.y + this.size/2<= (mouse.y + 40)){
        
            this.velocity.x = 0;
            this.velocity.y = 0;

        }
        
    }
    break(){
       for (let i = 0; i < 15; i++) {
            ingredients.push(new Shard(this.x, this.y));
            
        }
        this.existance = 0;
    }

    explode() {
        for (let i = 0; i < 10; i++) {
            ingredients.push(new Shard(this.x, this.y));
            
        }
        this.recipe.forEach(item=>{
            ingredients.push(new Item(item, this.x, this.y));
        });
    }   
}


class Item {
    constructor(image, x, y) {
        this.image = new Image();
        this.image.src = image;
        this.velocity = {
            x: Math.random() * 3,
            y: Math.random() * 3
        };
        this.x = x;
        this.y = y;
        this.size = 40;
        this.gravity = 0.1;
        this.friction = 0.8;
        this.frames = 100;
        this.opacity = 1;
    }


    draw() {
        ctx.save();
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
        ctx.shadowColor = "#EEF8FB";
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.restore();
    }

    update() {
        this.draw();

        if (this.y + this.size+ this.velocity.y > canvas.height-50) {
            this.velocity.y = -this.velocity.y * this.friction;
        }
        else {
            this.velocity.y += this.gravity;
        }
        if (this.x + this.size + this.velocity.x > canvas.width || this.x - this.size <= 0) {
            this.velocity.x = -this.velocity.x;
        }

        this.y += this.velocity.y;
        this.x += this.velocity.x;
        this.frames -= 1;
        this.opacity -= 1 / this.frames;
    }

}

//Logic

let bottles;
let ingredients;

function init(){
    bottles = [];
    ingredients = [];
    for (let i = 0; i < 10; i++) {
        let j = Math.floor(Math.random() * recipes.length);
        let x = Math.floor((Math.random() * (canvas.width - 70)));
        let y = Math.floor(0 - Math.random() * canvas.height - 50);
        let bottle = new Potion(recipes[j][0], recipes[j][1], x, y);
        bottles.push(bottle);
    }

}

function ground(){
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.rect(0, canvas.height-50, canvas.width, canvas.height);
    ctx.fill();
    ctx.restore();
}

function background(){
    let grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grd.addColorStop(0, "#2A1E5C");
    grd.addColorStop(0.5, "#890620");
    grd.addColorStop(1, "#EE4266");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function destroyBottle(idx){
    bottles.splice(idx, 1);
    let j = Math.floor(Math.random() * recipes.length);
    let x = Math.floor((Math.random() * (canvas.width - 70)));
    let y = Math.floor(0 - Math.random() * canvas.height);
    bottles.push(new Potion(recipes[j][0], recipes[j][1], x, y));
}






function draw(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background();
    ground();

    bottles.forEach((bottle) => {
        bottle.draw();
    });

    ingredients.forEach((ingredient) => {
        ingredient.draw();
    });

    drawCursor();
    console.log("I have been drawingn");
}



function animate(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background();
    ground();

    bottles.forEach((bottle, idx) =>{
        bottle.update();
        if (bottle.existance <= 0){
            destroyBottle(idx);
        } 

    });

    ingredients.forEach((ingredient, idx)=>{
        ingredient.update();
        if (ingredient.frames === 0){
            ingredients.splice(idx, 1);
        }
    });
    drawCursor();

    
}


let paused = true;

function togglePause(){
    if (paused === false) {
        paused = true;
        requestAnimationFrame(draw);
        console.log("paused");
    } 
    else {
        
        paused = false;
        requestAnimationFrame(animate);
        console.log("redone");
    }
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        togglePause();
    }
});


init();
draw();
drawCursor();



