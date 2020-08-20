/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: canvas, ctx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n// import { items } from \"./item\";\n// import { recipes } from \"./recipes-list\";\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\ncanvas.style.cursor = \"crosshair\";\n\n\nconst grapes = \"./assets/Ingredients/berrys1.png\";\nconst cranberries = \"./assets/Ingredients/berrys2.png\";\nconst bone = \"./assets/Ingredients/bone.png\";\nconst iceButterfly = \"./assets/Ingredients/butterfly_wing1.png\";\nconst fireButterfly = \"./assets/Ingredients/butterfly_wing2.png\";\nconst cotton = \"./assets/Ingredients/cotton.png\";\nconst ametyst = \"./assets/Ingredients/crystal1.png\";\nconst quartz = \"./assets/Ingredients/crystal2.png\";\nconst roe = \"./assets/Ingredients/eggs.png\";\nconst feather = \"./assets/Ingredients/feather.png\";\nconst daisy = \"./assets/Ingredients/flower1.png\";\nconst fireFlower = \"./assets/Ingredients/flower2.png\";\nconst rose = \"./assets/Ingredients/flower3.png\";\nconst blazingStar = \"./assets/Ingredients/flower4.png\";\nconst redAester = \"./assets/Ingredients/flower5.png\";\nconst tulip = \"./assets/Ingredients/flower6.png\";\nconst iris = \"./assets/Ingredients/flower7.png\";\nconst blueHeart = \"./assets/Ingredients/flower8.png\";\nconst trailing = \"./assets/Ingredients/flower9.png\";\nconst lilly = \"./assets/Ingredients/flower10.png\";\nconst wheat = \"./assets/Ingredients/grass.png\";\nconst mint = \"./assets/Ingredients/leaf1.png\";\nconst nettle = \"./assets/Ingredients/leaf2.png\";\nconst black = \"./assets/Ingredients/leaf3.png\";\nconst hawthorn = \"./assets/Ingredients/leaf4.png\";\nconst raspberry = \"./assets/Ingredients/leaf5.png\";\nconst maple = \"./assets/Ingredients/leaf6.png\";\nconst ivy = \"./assets/Ingredients/leaf7.png\";\nconst rosebud = \"./assets/Ingredients/leaf8.png\";\nconst helly = \"./assets/Ingredients/leaf9.png\";\nconst fern = \"./assets/Ingredients/leaf10.png\";\nconst por = \"./assets/Ingredients/mushroom1.png\";\nconst rosy = \"./assets/Ingredients/mushroom2.png\";\nconst amanita = \"./assets/Ingredients/mushroom3.png\";\nconst magic = \"./assets/Ingredients/mushroom4.png\";\nconst blue = \"./assets/Ingredients/mushroom5.png\";\nconst magicPod = \"./assets/Ingredients/pod.png\";\nconst dragon = \"./assets/Ingredients/scales.png\";\nconst wood = \"./assets/Ingredients/wood1.png\";\nconst lumber = \"./assets/Ingredients/wood2.png\";\n\nconst list = [\n    bone, cotton, daisy, lilly, amanita, //0-4\n    feather, iris, wheat, raspberry, rosy, //5-9\n    fireButterfly, fireFlower, maple, ivy, //10-14\n    rosebud, redAester,roe, helly, rose, cranberries, //15-19\n    mint, magicPod, nettle,trailing, fern, hawthorn, //20-24\n     black, blueHeart, quartz, magic, //25-29\n    iceButterfly, dragon, blue, tulip, grapes, //30-34\n    blazingStar, ametyst, por, wood, lumber]; //35 -39\n\nfunction idx(){\n    return Math.floor(Math.random()* list.length);\n}\n\nconst potion1 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle1.png\"];\nconst potion2 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle2.png\"];\nconst potion3 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle3.png\"];\nconst potion4 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle4.png\"];\nconst potion5 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle5.png\"];\nconst potion6 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle6.png\"];\nconst potion7 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle7.png\"];\nconst potion8 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle8.png\"];\nconst potion9 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle9.png\"];\nconst potion10 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle10.png\"];\nconst potion11 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle11.png\"];\nconst potion12 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle12.png\"];\nconst potion13 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle13.png\"];\nconst potion14 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle14.png\"];\nconst potion15 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle15.png\"];\nconst potion16 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle16.png\"];\nconst potion17 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle17.png\"];\nconst potion18 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle18.png\"];\nconst potion19 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle19.png\"];\nconst potion20 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle20.png\"];\nconst potion21 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle21.png\"];\nconst potion22 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle22.png\"];\nconst potion23 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle23.png\"];\nconst potion24 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle24.png\"];\nconst potion25 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle25.png\"];\nconst potion26 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle26.png\"];\nconst potion27 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle27.png\"];\nconst potion28 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle28.png\"];\nconst potion29 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle29.png\"];\nconst potion30 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle30.png\"];\nconst potion31 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle31.png\"];\nconst potion32 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle32.png\"];\nconst potion33 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle33.png\"];\nconst potion34 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle34.png\"];\nconst potion35 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle35.png\"];\nconst potion36 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle36.png\"];\nconst potion37 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle37.png\"];\nconst potion38 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle38.png\"];\nconst potion39 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle39.png\"];\nconst potion40 = [[list[idx()], list[idx()], list[idx()], list[idx()]], \"./assets/Results/bottle40.png\"];\n\nconst recipes = [potion1, potion2, potion3, potion4, potion5, potion6, potion7, potion8,\n    potion9, potion13, potion17, potion21, potion25, potion29, potion33, potion37,\n    potion10, potion14, potion18, potion22, potion26, potion30, potion34, potion38,\n    potion11, potion15, potion19, potion23, potion27, potion31, potion35, potion39,\n    potion12, potion16, potion20, potion24, potion28, potion32, potion36, potion40];\n\n\n\ncanvas.width = innerWidth;\ncanvas.height = innerHeight;\n\naddEventListener('resize', () => {\n    canvas.width = innerWidth;\n    canvas.height = innerHeight ;\n\n    init();\n});\n\naddEventListener(\"click\", (event)=>{\n    bottles.forEach(item =>{\n        item.respond();\n    });\n});\n\nconst mouse = {\n    x : 0,\n    y : 0\n};\n\naddEventListener(\"mousemove\", (event)=>{\n    mouse.x = event.clientX;\n    mouse.y = event.clientY;\n\n});\n\nfunction draw() {\n    ctx.save();\n    ctx.beginPath();\n    ctx.strokeStyle = \"white\";\n    ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);\n    ctx.stroke();\n    ctx.restore();\n}\n\nclass Shard{\n    constructor(x, y) {\n        this.velocity = {\n            x: Math.random() * 5,\n            y: Math.random() * 5\n        };\n        this.x = x;\n        this.y = y;\n        this.size = 7;\n        this.gravity = 0.1;\n        this.friction = 0.8;\n        this.frames = 200;\n        this.opacity = 1;\n    }\n\n\n    draw() {\n        ctx.save();\n        ctx.beginPath();\n        ctx.fillStyle = \"white\";\n        ctx.globalAlpha = 0.4;\n        // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);\n        ctx.moveTo(this.x, this.y);\n        ctx.lineTo(this.x+7, this.y-7);\n        ctx.lineTo(this.x-7, this.y-7);\n        ctx.lineTo(this.x-14.5, this.y);\n        ctx.shadowColor = \"#EEF8FB\";\n        ctx.shadowOffsetX = 3;\n        ctx.shadowOffsetY = 3;\n        ctx.fill();\n        ctx.restore();\n    }\n\n    update() {\n        this.draw();\n\n        if (this.y + this.size +this.velocity.y > canvas.height-50) {\n            this.velocity.y = -this.velocity.y * this.friction;\n        }\n        else {\n            this.velocity.y += this.gravity;\n        }\n        if (this.x + this.size + this.velocity.x > canvas.width || this.x - this.size <= 0) {\n            this.velocity.x = -this.velocity.x;\n        }\n\n        this.y += this.velocity.y;\n        this.x += this.velocity.x;\n        this.frames -= 1;\n        this.opacity -= 1 / this.frames;\n    }\n\n}\nlet game = false;\ndocument.addEventListener('keyup', event => {\n    if (event.code === 'Space') {\n        if(game === false){\n          \n            game = true;\n        }else{\n            game = false;\n           \n        }\n    }\n})\n\nclass Potion {\n    constructor(recipe, image, x, y, existance = 1) {\n        this.name = name;\n        this.recipe = recipe.sort();\n        this.image = new Image();\n        this.image.src = image;\n        this.size = 70;\n        this.velocity = {\n            x: 0,\n            y: Math.random() * 2+ 0.5\n        };\n        this.x = x;\n        this.y = y;\n        this.gravity = Math.random() * 2 + 1;\n        this.existance = existance;\n    }\n\n    draw() {\n        ctx.save();\n        ctx.globalAlpha = this.existance;\n        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);\n        ctx.restore();\n    }\n\n    update() {\n        if (this.y + this.size + this.velocity.y > canvas.height-45) {\n            this.draw();\n            this.explode();\n            this.existance = 0;\n        } else if(this.velocity.y){\n            this.draw();\n            this.y += this.velocity.y;   \n        }else{\n            this.break();\n            \n        }\n    }\n\n    respond(){\n        if (this.x + this.size/2 >= (mouse.x - 40) && this.x + this.size/2 <= (mouse.x + 40) && \n        this.y + this.size/2 >= (mouse.y - 40) && this.y + this.size/2<= (mouse.y + 40)){\n        \n            this.velocity.x = 0;\n            this.velocity.y = 0;\n\n        }\n        \n    }\n    break(){\n       for (let i = 0; i < 15; i++) {\n            ingredients.push(new Shard(this.x, this.y));\n            \n        }\n        this.existance = 0;\n    }\n\n    explode() {\n        for (let i = 0; i < 10; i++) {\n            ingredients.push(new Shard(this.x, this.y));\n            \n        }\n        this.recipe.forEach(item=>{\n            ingredients.push(new Item(item, this.x, this.y));\n        });\n    }   \n}\n\n\nclass Item {\n    constructor(image, x, y) {\n        this.image = new Image();\n        this.image.src = image;\n        this.velocity = {\n            x: Math.random() * 3,\n            y: Math.random() * 3\n        };\n        this.x = x;\n        this.y = y;\n        this.size = 40;\n        this.gravity = 0.1;\n        this.friction = 0.8;\n        this.frames = 100;\n        this.opacity = 1;\n    }\n\n\n    draw() {\n        ctx.save();\n        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);\n        ctx.shadowColor = \"#EEF8FB\";\n        ctx.shadowOffsetX = 3;\n        ctx.shadowOffsetY = 3;\n        ctx.restore();\n    }\n\n    update() {\n        this.draw();\n\n        if (this.y + this.size+ this.velocity.y > canvas.height-50) {\n            this.velocity.y = -this.velocity.y * this.friction;\n        }\n        else {\n            this.velocity.y += this.gravity;\n        }\n        if (this.x + this.size + this.velocity.x > canvas.width || this.x - this.size <= 0) {\n            this.velocity.x = -this.velocity.x;\n        }\n\n        this.y += this.velocity.y;\n        this.x += this.velocity.x;\n        this.frames -= 1;\n        this.opacity -= 1 / this.frames;\n    }\n\n}\n\n\nlet bottles;\nlet ingredients;\n\nfunction init(){\n    bottles = [];\n    ingredients = [];\n    for (let i = 0; i < 10; i++) {\n        let j = Math.floor(Math.random() * recipes.length);\n        let x = Math.floor((Math.random() * (canvas.width - 70)));\n        let y = Math.floor(0 - Math.random() * canvas.height);\n        let bottle = new Potion(recipes[j][0], recipes[j][1], x, y);\n        bottles.push(bottle);\n    }\n\n}\n\nfunction ground(){\n    ctx.save()\n    ctx.beginPath();\n    ctx.fillStyle = \"black\";\n    ctx.rect(0, canvas.height-50, canvas.width, canvas.height);\n    ctx.fill();\n    ctx.restore();\n}\n\nfunction background(){\n    let grd = ctx.createLinearGradient(0, 0, 0, canvas.height);\n    grd.addColorStop(0, \"#2A1E5C\");\n    grd.addColorStop(0.5, \"#890620\");\n    grd.addColorStop(1, \"#EE4266\");\n\n    ctx.fillStyle = grd;\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n}\nfunction destroyBottle(idx){\n    bottles.splice(idx, 1);\n    let j = Math.floor(Math.random() * recipes.length);\n    let x = Math.floor((Math.random() * (canvas.width - 70)));\n    let y = Math.floor(0 - Math.random() * canvas.height);\n    bottles.push(new Potion(recipes[j][0], recipes[j][1], x, y));\n}\n\n\n\n\n\nif (game === true) {\n    init(); \n    animate();\n}\n\n// function zapz(){\n//     ctx.save();\n//     ctx.beginPath();\n//     ctx.lineWidth = 6;\n//     ctx.strokeStyle = \"blue\";\n//     ctx.shadowColor = \"#EEF8FB\";\n//     ctx.shadowOffsetX = 3;\n//     ctx.shadowOffsetY = 3;\n\n//     ctx.moveTo(canvas.width/2, canvas.height - 50);\n//     let x = canvas.width/2;\n//     let y = canvas.height-50;\n//     for (let i = 0; i < 40; i++) {\n//         x -= Math.random()* 20;\n//         y -= Math.random()* 20;\n//         ctx.lineTo(x, y);  \n//     }\n//     ctx.lineTo(mouse.x -40, mouse.y);\n//     ctx.stroke();\n//     ctx.beginPath();\n//     ctx.moveTo(canvas.width / 2, canvas.height - 50);\n//     ctx.lineTo(mouse.x + 40, mouse.y);\n//     ctx.stroke();\n//     ctx.restore();\n\n// }\n\nfunction animate(){\n\n    requestAnimationFrame(animate);\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    background();\n    ground();\n    // zapz();\n\n    bottles.forEach((bottle, idx) =>{\n        bottle.update();\n        if (bottle.existance <= 0){\n            destroyBottle(idx);\n        } \n\n    });\n\n    ingredients.forEach((ingredient, idx)=>{\n        ingredient.update();\n        if (ingredient.frames === 0){\n            ingredients.splice(idx, 1);\n        }\n    });\n    draw();\n    \n}\n\ninit();\nanimate();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });