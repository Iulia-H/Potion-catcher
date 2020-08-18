// const items = require("./item");
import { items } from "./item";
export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");


canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(200, 300, 60, 0, Math.PI * 2, false);
ctx.shadowColor = "#e3eaef";
ctx.shadowBlur = 20;
ctx.fill();
ctx.closePath();
// const img = new Image();
// img.src = items[1].image;
// img.onload = function(){

//     ctx.drawImage(img, 0, 0, 70, 70);
// }

items[1].draw(ctx);
