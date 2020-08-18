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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n// const items = require(\"./item\");\n\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\n\n\ncanvas.width = innerWidth;\ncanvas.height = innerHeight;\n\nctx.fillStyle = \"blue\";\nctx.beginPath();\nctx.arc(200, 300, 60, 0, Math.PI * 2, false);\nctx.shadowColor = \"#e3eaef\";\nctx.shadowBlur = 20;\nctx.fill();\nctx.closePath();\n// const img = new Image();\n// img.src = items[1].image;\n// img.onload = function(){\n\n//     ctx.drawImage(img, 0, 0, 70, 70);\n// }\n\n_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][1].draw(ctx);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"items\", function() { return items; });\n class Item {\n    constructor(name, type, img) {\n        this.name = name;\n        this.type = type;\n        this.image = new Image();\n        this.image.src = img;\n        this.velocity = {\n            x : 0,\n            y : 0\n        };\n        this.x = 0;\n        this.y = 0;\n        this.size = 50;\n        this.gravity = 0.1;\n        this.friction = 0.8;\n        this.frames = 100;\n        this.opacity = 1;\n    }\n\n    draw(ctx) {\n        this.image.unload = function (){\n            ctx.drawImage(this.image, this.size, this.size);\n            console.log(this.image);\n        };\n        return this.image.unload();\n    }\n\n    update(){\n        this.draw();\n    }\n\n}\n\nconst grapes = new Item(\"Grapes\", \"fruit\", \"./assets/Ingredients/berrys1.png\");\nconst cranberries = new Item(\"Cranberries\", \"fruit\", \"./assets/Ingredients/berrys2.png\");\nconst bone = new Item(\"Bone\", \"animal\", \"./assets/Ingredients/bone.png\");\nconst iceButterfly = new Item(\"Ice Butterfly \", \"animal\", \"./assets/Ingredients/butterfly_wing1.png\");\nconst fireButterfly = new Item(\"Fire Butterfly\", \"animal\", \"./assets/Ingredients/butterfly_wing2.png\");\nconst cotton = new Item(\"Cotton\", \"flower\", \"./assets/Ingredients/cotton.png\");\nconst ametyst = new Item(\"Ametyst\", \"rock\", \"./assets/Ingredients/crystal1.png\");\nconst quartz = new Item(\"Quartz\", \"rock\", \"./assets/Ingredients/crystal2.png\");\nconst roe = new Item(\"Roe\", \"animal\", \"./assets/Ingredients/eggs.png\");\nconst feather = new Item(\"Feather\", \"animal\", \"./assets/Ingredients/feather.png\");\nconst daisy = new Item(\"Daisy\", \"flower\", \"./assets/Ingredients/flower1.png\");\nconst fireFlower = new Item(\"Fire Flower\", \"flower\", \"./assets/Ingredients/flower2.png\");\nconst rose = new Item(\"Rose\", \"flower\", \"./assets/Ingredients/flower3.png\");\nconst blazingStar = new Item(\"Blazing star\", \"flower\", \"./assets/Ingredients/flower4.png\");\nconst redAester = new Item(\"Red aester\", \"flower\", \"./assets/Ingredients/flower5.png\");\nconst tulip = new Item(\"Tulip\", \"flower\", \"./assets/Ingredients/flower6.png\");\nconst iris = new Item(\"Iris\", \"flower\", \"./assets/Ingredients/flower7.png\");\nconst blueHeart = new Item(\"Blue bleading heart\", \"flower\", \"./assets/Ingredients/flower8.png\");\nconst trailing = new Item(\"Trailing abutilon\", \"flower\", \"./assets/Ingredients/flower9.png\");\nconst lilly = new Item(\"Lilly of the Valley\", \"flower\", \"./assets/Ingredients/flower10.png\");\nconst wheat = new Item(\"Wheat\", \"grain\", \"./assets/Ingredients/grass.png\");\nconst mint = new Item(\"Mint\", \"herb\", \"./assets/Ingredients/leaf1.png\");\nconst nettle = new Item(\"Nettle\", \"herb\", \"./assets/Ingredients/leaf2.png\");\nconst black = new Item(\"Black gum\", \"herb\", \"./assets/Ingredients/leaf3.png\");\nconst hawthorn = new Item(\"Hawthorn\", \"herb\", \"./assets/Ingredients/leaf4.png\");\nconst raspberry = new Item(\"Raspberry leaf\", \"herb\", \"./assets/Ingredients/leaf5.png\");\nconst maple = new Item(\"Maple leaf\", \"herb\", \"./assets/Ingredients/leaf6.png\");\nconst ivy = new Item(\"Ivy leaf\", \"herb\", \"./assets/Ingredients/leaf7.png\");\nconst rosebud = new Item(\"Rosebud cordyline\", \"herb\", \"./assets/Ingredients/leaf8.png\");\nconst helly = new Item(\"Helly\", \"herb\", \"./assets/Ingredients/leaf9.png\");\nconst fern = new Item(\"Fern\", \"herb\", \"./assets/Ingredients/leaf10.png\");\nconst por = new Item(\"Porcini mushroom\", \"mushroom\", \"./assets/Ingredients/mushroom1.png\");\nconst rosy = new Item(\"Rosy mushroom\", \"mushroom\", \"./assets/Ingredients/mushroom2.png\");\nconst amanita = new Item(\"Amanita mushroom\", \"mushroom\", \"./assets/Ingredients/mushroom3.png\");\nconst magic = new Item(\"Magic mushrooms\", \"mushroom\", \"./assets/Ingredients/mushroom4.png\");\nconst blue = new Item(\"Blue milk mushroom\", \"mushroom\", \"./assets/Ingredients/mushroom5.png\");\nconst magicPod = new Item(\"Magic beans\", \"fruit\", \"./assets/Ingredients/pod.png\");\nconst dragon = new Item(\"Dragon scales\", \"animal\", \"./assets/Ingredients/scales.png\");\nconst  wood = new Item(\"Treant fingers\", \"flower\", \"./assets/Ingredients/wood1.png\");\nconst lumber = new Item(\"Lumber\", \"flower\", \"./assets/Ingredients/wood2.png\");\n\nconst items = [\n    bone, cotton, daisy, lilly, amanita, //0-4\n    feather, iris, wheat, raspberry, rosy, //5-9\n    fireButterfly, fireFlower, roe, maple, ivy, //10-14\n    rosebud, trailing, redAester, rose, cranberries, //15-19\n    mint, magicPod, nettle, fern, hawthorn, //20-24\n    helly, black, blueHeart, quartz, magic, //25-29\n    iceButterfly, dragon, blue, tulip, grapes, //30-34\n    blazingStar,  ametyst, por, wood, lumber ]; //35 -39\n\n// module.exports = items;\n\n//# sourceURL=webpack:///./src/item.js?");

/***/ })

/******/ });