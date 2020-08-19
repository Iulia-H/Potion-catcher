import { items } from "./item";
// import { recipes } from "./recipes-list";
export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");


canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});



class Potion {
    constructor(recipe, image, x, y) {
        this.name = name;
        this.recipe = recipe.sort();
        this.image = new Image();
        this.image.src = image;
        this.size = 70;
        this.velocity = {
            x: 0,
            y: 1
        };
        this.x = x;
        this.y = y;
        this.gravity = Math.random() * 2 + 1;
        this.friction = 0.8;
        this.frames = 100;
        this.opacity = 1;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }

    update() {
        this.draw();
        // this.x += this.velocity.x;

        if (this.y + this.size + this.velocity.y > canvas.height) {
            this.explode();
        } else {
            this.y += this.gravity;
        }
    }

    explode() {
        this.recipe.forEach(item => {
            item.update(this.x, this.y);
        });

    }
}

const potion1 =[[items[0], items[11], items[22], items[33]], "./assets/Results/bottle1.png"];
const potion2 =[[items[1], items[12], items[23], items[34]], "./assets/Results/bottle2.png"];
const potion3 =[[items[2], items[13], items[24], items[35]], "./assets/Results/bottle3.png"];
const potion4 =[[items[3], items[14], items[25], items[36]], "./assets/Results/bottle4.png"];
const potion5 =[[items[4], items[15], items[26], items[37]], "./assets/Results/bottle5.png"];
const potion6 =[[items[5], items[17], items[27], items[38]], "./assets/Results/bottle6.png"];
const potion7 =[[items[6], items[18], items[28], items[39]], "./assets/Results/bottle7.png"];
const potion8 =[[items[7], items[19], items[29], items[30]], "./assets/Results/bottle8.png"];
const potion9 =[[items[8], items[10], items[20], items[31]], "./assets/Results/bottle9.png"];
const potion10 =[ [items[9], items[19], items[21], items[32]], "./assets/Results/bottle10.png"];
const potion11 =[ [items[0], items[23], items[34], items[23]], "./assets/Results/bottle11.png"];
const potion12 =[ [items[1], items[21], items[0], items[1]], "./assets/Results/bottle12.png"];
const potion13 =[ [items[2], items[22], items[0], items[1]], "./assets/Results/bottle13.png"];
const potion14 =[ [items[3], items[23], items[0], items[1]], "./assets/Results/bottle14.png"];
const potion15 =[ [items[4], items[24], items[0], items[1]], "./assets/Results/bottle15.png"];
const potion16 =[ [items[5], items[25], items[0], items[1]], "./assets/Results/bottle16.png"];
const potion17 =[ [items[6], items[26], items[0], items[1]], "./assets/Results/bottle17.png"];
const potion18 =[ [items[7], items[27], items[0], items[1]], "./assets/Results/bottle18.png"];
const potion19 =[ [items[7], items[28], items[0], items[1]], "./assets/Results/bottle19.png"];
const potion20 =[ [items[9], items[29], items[0], items[1]], "./assets/Results/bottle20.png"];
const potion21 =[ [items[0], items[30], items[0], items[1]], "./assets/Results/bottle21.png"];
const potion22 =[ [items[1], items[31], items[0], items[1]], "./assets/Results/bottle22.png"];
const potion23 =[ [items[2], items[0], items[0], items[0]], "./assets/Results/bottle23.png"];
const potion24 =[ [items[3], items[29], items[0], items[1]], "./assets/Results/bottle24.png"];
const potion25 =[ [items[4], items[30], items[0], items[1]], "./assets/Results/bottle25.png"];
const potion26 =[ [items[5], items[31], items[0], items[1]], "./assets/Results/bottle26.png"];
const potion27 =[ [items[6], items[32], items[0], items[1]], "./assets/Results/bottle27.png"];
const potion28 =[ [items[7], items[33], items[0], items[1]], "./assets/Results/bottle28.png"];
const potion29 =[ [items[8], items[34], items[0], items[1]], "./assets/Results/bottle29.png"];
const potion30 =[ [items[9], items[35], items[0], items[1]], "./assets/Results/bottle30.png"];
const potion31 =[ [items[0], items[36], items[0], items[1]], "./assets/Results/bottle31.png"];
const potion32 =[ [items[1], items[37], items[0], items[1]], "./assets/Results/bottle32.png"];
const potion33 =[ [items[2], items[38], items[0], items[1]], "./assets/Results/bottle33.png"];
const potion34 =[ [items[3], items[39], items[0], items[1]], "./assets/Results/bottle34.png"];
const potion35 =[ [items[4], items[0], items[0], items[1]], "./assets/Results/bottle35.png"];
const potion36 =[ [items[5], items[1], items[0], items[1]], "./assets/Results/bottle36.png"];
const potion37 =[ [items[6], items[2], items[0], items[1]], "./assets/Results/bottle37.png"];
const potion38 =[ [items[7], items[3], items[0], items[1]], "./assets/Results/bottle38.png"];
const potion39 =[ [items[8], items[4], items[0], items[1]], "./assets/Results/bottle39.png"];
const potion40 =[ [items[9], items[5], items[0], items[1]], "./assets/Results/bottle40.png"];

const recipes = [potion1, potion2, potion3, potion4, potion5, potion6, potion7, potion8,
    potion9, potion13, potion17, potion21, potion25, potion29, potion33, potion37,
    potion10, potion14, potion18, potion22, potion26, potion30, potion34, potion38,
    potion11, potion15, potion19, potion23, potion27, potion31, potion35, potion39,
    potion12, potion16, potion20, potion24, potion28, potion32, potion36, potion40];




let bottles;

function init(){
    bottles = [];
    for (let i = 0; i < 70; i++) {
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
 

    });
    
}

init();
animate();
