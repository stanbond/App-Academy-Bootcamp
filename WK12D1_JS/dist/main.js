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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n//default color purple default radius 100\nconst mediumAsteroid = new MovingObject(100, 100, 80, 0, 2 * Math.PI);\n// {pos: userinput}\nfunction Asteroid(options){\n  options.pos = options.pos; \n  options.vel = Utils.randomVec(DEFAULTS.LENGTH); \n  options.color = DEFAULTS.COLOR;\n  options.radius = DEFAULTS.RADIUS;\n  MovingObject.call(this, options);\n}\n\n\nconst DEFAULTS = {\n  COLOR: 'purple',\n  RADIUS: 15,\n  LENGTH: 3,\n}\n// function Asteroid() { }\n// Asteroid.inherits(MovingObject);\n\nUtils.inherits(Asteroid, MovingObject);\n\n\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n// const smallAsteroid = new MovingObject(100,100,20, 0, 2* Math.PI);\n// const mediumAsteroid = new MovingObject(100,100,80, 0, 2* Math.PI);\n\n// smallAsteroid.draw();\n// mediumAsteroid.draw();\n\n// const DIM_X = 1000; DIM_Y = 1000; NUM_ASTEROIDS = 10;\n\n// const Game = {\n//   classConstructor() {\n//     this.asteroids = [];\n//   },\n//   addAsteroids() {\n//     for (let i = 0; i < NUM_ASTEROIDS; i++) {\n//       let pos = this.randPosition();\n//       let ast = new Asteroid({ pos: pos });\n//       this.asteroids.push(ast);\n//     }\n//   },\n//   randPosition() {\n//     let x = Math.random() * Game.DIM_X;\n//     let y = Math.random() * Game.DIM_Y;\n//     let newPos = [x, y];\n//     return newPos;\n//   },\n//   draw(ctx) {\n//     ctx.clearRect(0, 0, DIM_X, DIM_Y);\n//     for (let i = 0; i < NUM_ASTEROIDS; i++) {\n//       this.asteroids[i].draw(ctx);\n//     }\n//   },\n//   move() {\n//     for (let i = 0; i < NUM_ASTEROIDS; i++) {\n//       this.asteroids[i].move();\n//     }\n//   }\n\n// };\n\nconst DEFAULTS = {};\n\nfunction Game(){\n  this.asteroids = [];\n  this.addAsteroids();\n  this.DIM_X = DEFAULTS.DIM_X;\n  this.DIM_Y = DEFAULTS.DIM_Y;\n  this.NUM_ASTEROIDS = DEFAULTS.NUM_ASTEROIDS;\n}\nGame.DIM_X = 1000;\nGame.DIM_Y = 1000;\nGame.NUM_ASTEROIDS = 10;  //why no const or let (or !!!!!var?!!!)\n\n\n\n\n\nGame.prototype.addAsteroids = function () {\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    let pos = this.randPosition();\n    let ast = new Asteroid({pos: pos});\n    this.asteroids.push(ast);\n  }\n};\n\nGame.prototype.randPosition = function () {\n  let x = Math.random() * Game.DIM_X;\n  let y = Math.random() * Game.DIM_Y;\n  let newPos = [x,y];\n  return newPos;\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    this.asteroids[i].draw(ctx);\n  }\n};\n\nGame.prototype.move = function() {\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    this.asteroids[i].move(); \n  }\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx){\n  this.game = new Game();\n  this.ctx = ctx;\n};\n\nGameView.prototype.start = function (){\n  setInterval(() => {\n  this.game.move();\n  this.game.draw(this.ctx);\n  } , 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\n\n// const mo1 = new MovingObject(100,100,50, 0, 2* Math.PI);\n\n// mo1.draw();m\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.GameView = GameView;\nwindow.Game = Game;\nwindow.Asteroid = Asteroid;\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext(\"2d\");\n\n  window.canvas = canvas;\n  window.ctx = ctx;\n  const view = new GameView(ctx);\n\n  view.start();\n});\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction MovingObject (options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2* Math.PI);\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function (){\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n}\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])\n\nmodule.exports = MovingObject;\n\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Utils = {\n  inherits(childClass, parentClass) {\n    function Surrogate() { }\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n},\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();  //random radian between 0 and 2pi \n    return Utils.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n}\n\n\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });