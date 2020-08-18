import { items } from "./item";

class Pot{
    constructor(){
        this.size = 4;
        this.ingredients = [];

    }

    emptyPot(){
        this.ingredients = [];
    }

    addItem(item){
        if (this.size === this.ingredients.length){
            console.log("Too much stuff!");
        }else{
        //    let found = items.find(function(ele){
        //         return ele.name === item;
        //     })
            // console.log(found);
            this.ingredients.push(item);
        }
    }


}

export const pots = new Pot();