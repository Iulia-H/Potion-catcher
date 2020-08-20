// import { items } from "./item";
// import { recipes } from "./recipes-list";
export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");
canvas.style.cursor = "crosshair";


const grapes = "./assets/Ingredients/berrys1.png";
const cranberries = "./assets/Ingredients/berrys2.png";
const bone = "./assets/Ingredients/bone.png";
const iceButterfly = "./assets/Ingredients/butterfly_wing1.png";
const fireButterfly = "./assets/Ingredients/butterfly_wing2.png";
const cotton = "./assets/Ingredients/cotton.png";
const ametyst = "./assets/Ingredients/crystal1.png";
const quartz = "./assets/Ingredients/crystal2.png";
const roe = "./assets/Ingredients/eggs.png";
const feather = "./assets/Ingredients/feather.png";
const daisy = "./assets/Ingredients/flower1.png";
const fireFlower = "./assets/Ingredients/flower2.png";
const rose = "./assets/Ingredients/flower3.png";
const blazingStar = "./assets/Ingredients/flower4.png";
const redAester = "./assets/Ingredients/flower5.png";
const tulip = "./assets/Ingredients/flower6.png";
const iris = "./assets/Ingredients/flower7.png";
const blueHeart = "./assets/Ingredients/flower8.png";
const trailing = "./assets/Ingredients/flower9.png";
const lilly = "./assets/Ingredients/flower10.png";
const wheat = "./assets/Ingredients/grass.png";
const mint = "./assets/Ingredients/leaf1.png";
const nettle = "./assets/Ingredients/leaf2.png";
const black = "./assets/Ingredients/leaf3.png";
const hawthorn = "./assets/Ingredients/leaf4.png";
const raspberry = "./assets/Ingredients/leaf5.png";
const maple = "./assets/Ingredients/leaf6.png";
const ivy = "./assets/Ingredients/leaf7.png";
const rosebud = "./assets/Ingredients/leaf8.png";
const helly = "./assets/Ingredients/leaf9.png";
const fern = "./assets/Ingredients/leaf10.png";
const por = "./assets/Ingredients/mushroom1.png";
const rosy = "./assets/Ingredients/mushroom2.png";
const amanita = "./assets/Ingredients/mushroom3.png";
const magic = "./assets/Ingredients/mushroom4.png";
const blue = "./assets/Ingredients/mushroom5.png";
const magicPod = "./assets/Ingredients/pod.png";
const dragon = "./assets/Ingredients/scales.png";
const wood = "./assets/Ingredients/wood1.png";
const lumber = "./assets/Ingredients/wood2.png";

const list = [
    bone, cotton, daisy, lilly, amanita, //0-4
    feather, iris, wheat, raspberry, rosy, //5-9
    fireButterfly, fireFlower, maple, ivy, //10-14
    rosebud, redAester,roe, helly, rose, cranberries, //15-19
    mint, magicPod, nettle,trailing, fern, hawthorn, //20-24
     black, blueHeart, quartz, magic, //25-29
    iceButterfly, dragon, blue, tulip, grapes, //30-34
    blazingStar, ametyst, por, wood, lumber]; //35 -39

const potion1 = [[list[0], list[11], list[22], list[33]], "./assets/Results/bottle1.png"];
const potion2 = [[list[1], list[12], list[23], list[34]], "./assets/Results/bottle2.png"];
const potion3 = [[list[2], list[13], list[24], list[35]], "./assets/Results/bottle3.png"];
const potion4 = [[list[3], list[14], list[25], list[36]], "./assets/Results/bottle4.png"];
const potion5 = [[list[4], list[15], list[26], list[37]], "./assets/Results/bottle5.png"];
const potion6 = [[list[5], list[17], list[27], list[37]], "./assets/Results/bottle6.png"];
const potion7 = [[list[6], list[18], list[28], list[37]], "./assets/Results/bottle7.png"];
const potion8 = [[list[7], list[19], list[29], list[30]], "./assets/Results/bottle8.png"];
const potion9 = [[list[8], list[10], list[20], list[31]], "./assets/Results/bottle9.png"];
const potion10 = [[list[9], list[19], list[21], list[32]], "./assets/Results/bottle10.png"];
const potion11 = [[list[0], list[23], list[34], list[23]], "./assets/Results/bottle11.png"];
const potion12 = [[list[1], list[21], list[0], list[1]], "./assets/Results/bottle12.png"];
const potion13 = [[list[2], list[22], list[0], list[1]], "./assets/Results/bottle13.png"];
const potion14 = [[list[3], list[23], list[0], list[1]], "./assets/Results/bottle14.png"];
const potion15 = [[list[4], list[24], list[0], list[1]], "./assets/Results/bottle15.png"];
const potion16 = [[list[5], list[25], list[0], list[1]], "./assets/Results/bottle16.png"];
const potion17 = [[list[6], list[26], list[0], list[1]], "./assets/Results/bottle17.png"];
const potion18 = [[list[7], list[27], list[0], list[1]], "./assets/Results/bottle18.png"];
const potion19 = [[list[7], list[28], list[0], list[1]], "./assets/Results/bottle19.png"];
const potion20 = [[list[9], list[29], list[0], list[1]], "./assets/Results/bottle20.png"];
const potion21 = [[list[0], list[30], list[0], list[1]], "./assets/Results/bottle21.png"];
const potion22 = [[list[1], list[31], list[0], list[1]], "./assets/Results/bottle22.png"];
const potion23 = [[list[2], list[0], list[0], list[0]], "./assets/Results/bottle23.png"];
const potion24 = [[list[3], list[29], list[0], list[1]], "./assets/Results/bottle24.png"];
const potion25 = [[list[4], list[30], list[0], list[1]], "./assets/Results/bottle25.png"];
const potion26 = [[list[5], list[31], list[0], list[1]], "./assets/Results/bottle26.png"];
const potion27 = [[list[6], list[32], list[0], list[1]], "./assets/Results/bottle27.png"];
const potion28 = [[list[7], list[33], list[0], list[1]], "./assets/Results/bottle28.png"];
const potion29 = [[list[8], list[34], list[0], list[1]], "./assets/Results/bottle29.png"];
const potion30 = [[list[9], list[35], list[0], list[1]], "./assets/Results/bottle30.png"];
const potion31 = [[list[0], list[36], list[0], list[1]], "./assets/Results/bottle31.png"];
const potion32 = [[list[1], list[37], list[0], list[1]], "./assets/Results/bottle32.png"];
const potion33 = [[list[2], list[37], list[0], list[1]], "./assets/Results/bottle33.png"];
const potion34 = [[list[3], list[37], list[0], list[1]], "./assets/Results/bottle34.png"];
const potion35 = [[list[4], list[0], list[0], list[1]], "./assets/Results/bottle35.png"];
const potion36 = [[list[5], list[1], list[0], list[1]], "./assets/Results/bottle36.png"];
const potion37 = [[list[6], list[2], list[0], list[1]], "./assets/Results/bottle37.png"];
const potion38 = [[list[7], list[3], list[0], list[1]], "./assets/Results/bottle38.png"];
const potion39 = [[list[8], list[4], list[0], list[1]], "./assets/Results/bottle39.png"];
const potion40 = [[list[9], list[5], list[0], list[1]], "./assets/Results/bottle40.png"];

const recipes = [potion1, potion2, potion3, potion4, potion5, potion6, potion7, potion8,
    potion9, potion13, potion17, potion21, potion25, potion29, potion33, potion37,
    potion10, potion14, potion18, potion22, potion26, potion30, potion34, potion38,
    potion11, potion15, potion19, potion23, potion27, potion31, potion35, potion39,
    potion12, potion16, potion20, potion24, potion28, potion32, potion36, potion40];



canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

const mouse = {
    x : 0,
    y : 0
};

addEventListener("mousemove", (event)=>{
    mouse.x = event.clientX;
    mouse.y = event.clientY;

});

function draw() {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
}

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
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.shadowColor = "#EEF8FB";
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.draw();

        if (this.y + this.size + this.velocity.y > canvas.height) {
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
        this.name = name;
        this.recipe = recipe.sort();
        this.image = new Image();
        this.image.src = image;
        this.size = 70;
        this.velocity = {
            x: 0,
            y: Math.random() * 5 + 1
        };
        this.x = x;
        this.y = y;
        this.gravity = Math.random() * 2 + 1;
        this.existance = existance;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }

    update() {
        this.draw();
        if (this.y + this.size + this.velocity.y > canvas.height) {
            this.explode();
            this.existance = 0;
        } else {
            this.y += this.velocity.y;
        }

    }

    explode() {
        for (let i = 0; i < 7; i++) {
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
            x: Math.random() * 5,
            y: Math.random() * 5
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
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }

    update() {
        this.draw();

        if (this.y + this.size+ this.velocity.y > canvas.height) {
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


let bottles;
let ingredients;

function init(){
    bottles = [];
    ingredients = [];
    for (let i = 0; i < 30; i++) {
        let j = Math.floor(Math.random() * recipes.length);
        let x = Math.floor((Math.random() * (canvas.width - 70)));
        let y = Math.floor(0 - Math.random() * canvas.height);
        let bottle = new Potion(recipes[j][0], recipes[j][1], x, y);
        bottles.push(bottle);
    }

}

function background(){
    let grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grd.addColorStop(0, "#2A1E5C");
    grd.addColorStop(0.5, "#890620");
    grd.addColorStop(1, "#EE4266");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function animate(){
    requestAnimationFrame(animate);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background();

    bottles.forEach((bottle, idx) =>{
        bottle.update();
        if (bottle.existance === 0){
            bottles.splice(idx, 1);
            let j = Math.floor(Math.random() * recipes.length);
            let x = Math.floor((Math.random() * (canvas.width - 70)));
            let y = Math.floor(0 - Math.random() * canvas.height);
            bottles.push(new Potion(recipes[j][0], recipes[j][1], x, y));
        } 
    });

    ingredients.forEach((ingredient, idx)=>{
        ingredient.update();
        if (ingredient.frames === 0){
            ingredients.splice(idx, 1);
        }
    });
    draw();
    
}

init();
animate();
