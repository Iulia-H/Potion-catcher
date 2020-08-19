import {items} from "./item";
import { ctx, canvas } from "./index";
class Potion {
    constructor(name, recipe, image ){
        this.name = name;
        this.recipe = recipe.sort();
        this.image = new Image();
        this.image.src = image;
        this.velocity = {
            x: 0,
            y: 1
        };
        this.x = 500;
        this.y = 0;
        this.size = 70;
        this.gravity = Math.random() * 4 + 1;
        this.friction = 0.8;
        this.frames = 100;
        this.opacity = 1;
    }

    draw(){
        
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
    
    update() {
        this.draw();
        this.x += this.velocity.x;
        
        if (this.y + this.size + this.velocity.y > canvas.height ){
            this.explode();
        }else{
            this.y += this.gravity;
        }
    }

    explode(){
        this.recipe.forEach(item =>{
            item.update(this.x, this.y);
        });

    }
}

const potion1 = new Potion("potion1", [items[0], items[11], items[22], items[33]], "./assets/Results/bottle1.png");
const potion2 = new Potion("potion2", [items[1], items[12], items[23], items[34]], "./assets/Results/bottle2.png");
const potion3 = new Potion("potion3", [items[2], items[13], items[24], items[35]], "./assets/Results/bottle3.png");
const potion4 = new Potion("potion4", [items[3], items[14], items[25], items[36]], "./assets/Results/bottle4.png");
const potion5 = new Potion("potion5", [items[4], items[15], items[26], items[37]], "./assets/Results/bottle5.png");
const potion6 = new Potion("potion6", [items[5], items[17], items[27], items[38]], "./assets/Results/bottle6.png");
const potion7 = new Potion("potion7", [items[6], items[18], items[28], items[39]], "./assets/Results/bottle7.png");
const potion8 = new Potion("potion8", [items[7], items[19], items[29], items[30]], "./assets/Results/bottle8.png");
const potion9 = new Potion("potion9", [items[8], items[10], items[20], items[31]], "./assets/Results/bottle9.png");
const potion10 = new Potion("potion10", [items[9], items[19], items[21], items[32]], "./assets/Results/bottle10.png");
const potion11 = new Potion("potion11", [items[0], items[23], items[34], items[23]],"./assets/Results/bottle11.png");
const potion12 = new Potion("potion12", [items[1], items[21], items[0], items[1]], "./assets/Results/bottle12.png");
const potion13 = new Potion("potion13", [items[2], items[22], items[0], items[1]], "./assets/Results/bottle13.png");
const potion14 = new Potion("potion14", [items[3], items[23], items[0], items[1]], "./assets/Results/bottle14.png");
const potion15 = new Potion("potion15", [items[4], items[24], items[0], items[1]],"./assets/Results/bottle15.png");
const potion16 = new Potion("potion16", [items[5], items[25], items[0], items[1]], "./assets/Results/bottle16.png");
const potion17 = new Potion("potion17", [items[6], items[26], items[0], items[1]], "./assets/Results/bottle17.png");
const potion18 = new Potion("potion18", [items[7], items[27], items[0], items[1]], "./assets/Results/bottle18.png");
const potion19 = new Potion("potion19", [items[7], items[28], items[0], items[1]],"./assets/Results/bottle19.png");
const potion20 = new Potion("potion20", [items[9], items[29], items[0], items[1]], "./assets/Results/bottle20.png");
const potion21 = new Potion("potion21", [items[0], items[30], items[0], items[1]], "./assets/Results/bottle21.png");
const potion22 = new Potion("potion22", [items[1], items[31], items[0], items[1]], "./assets/Results/bottle22.png");
const potion23 = new Potion("potion23", [items[2], items[0], items[0], items[0]], "./assets/Results/bottle23.png");
const potion24 = new Potion("potion24", [items[3], items[29], items[0], items[1]], "./assets/Results/bottle24.png");
const potion25 = new Potion("potion25", [items[4], items[30], items[0], items[1]],"./assets/Results/bottle25.png");
const potion26 = new Potion("potion26", [items[5], items[31], items[0], items[1]], "./assets/Results/bottle26.png");
const potion27 = new Potion("potion27", [items[6], items[32], items[0], items[1]], "./assets/Results/bottle27.png");
const potion28 = new Potion("potion28", [items[7], items[33], items[0], items[1]], "./assets/Results/bottle28.png");
const potion29 = new Potion("potion29", [items[8], items[34], items[0], items[1]],"./assets/Results/bottle29.png");
const potion30 = new Potion("potion30", [items[9], items[35], items[0], items[1]], "./assets/Results/bottle30.png");
const potion31 = new Potion("potion31", [items[0], items[36], items[0], items[1]], "./assets/Results/bottle31.png");
const potion32 = new Potion("potion32", [items[1], items[37], items[0], items[1]],"./assets/Results/bottle32.png");
const potion33 = new Potion("potion33", [items[2], items[38], items[0], items[1]],"./assets/Results/bottle33.png");
const potion34 = new Potion("potion34", [items[3], items[39], items[0], items[1]], "./assets/Results/bottle34.png");
const potion35 = new Potion("potion35", [items[4], items[0], items[0], items[1]], "./assets/Results/bottle35.png");
const potion36 = new Potion("potion36", [items[5], items[1], items[0], items[1]], "./assets/Results/bottle36.png");
const potion37 = new Potion("potion37", [items[6], items[2], items[0], items[1]], "./assets/Results/bottle37.png");
const potion38 = new Potion("potion38", [items[7], items[3], items[0], items[1]], "./assets/Results/bottle38.png");
const potion39 = new Potion("potion39", [items[8], items[4], items[0], items[1]],"./assets/Results/bottle39.png");
const potion40 = new Potion("potion40", [items[9], items[5], items[0], items[1]], "./assets/Results/bottle40.png");

export const recipes = [potion1, potion2, potion3, potion4, potion5, potion6, potion7, potion8, 
    potion9, potion13, potion17, potion21, potion25, potion29, potion33, potion37, 
    potion10, potion14, potion18, potion22, potion26, potion30, potion34, potion38,
    potion11, potion15, potion19, potion23, potion27, potion31, potion35, potion39,
    potion12, potion16, potion20, potion24, potion28, potion32, potion36, potion40];