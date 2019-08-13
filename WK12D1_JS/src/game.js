const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Utils = require("./utils.js");

// const smallAsteroid = new MovingObject(100,100,20, 0, 2* Math.PI);
// const mediumAsteroid = new MovingObject(100,100,80, 0, 2* Math.PI);

// smallAsteroid.draw();
// mediumAsteroid.draw();

// const DIM_X = 1000; DIM_Y = 1000; NUM_ASTEROIDS = 10;

// const Game = {
//   classConstructor() {
//     this.asteroids = [];
//   },
//   addAsteroids() {
//     for (let i = 0; i < NUM_ASTEROIDS; i++) {
//       let pos = this.randPosition();
//       let ast = new Asteroid({ pos: pos });
//       this.asteroids.push(ast);
//     }
//   },
//   randPosition() {
//     let x = Math.random() * Game.DIM_X;
//     let y = Math.random() * Game.DIM_Y;
//     let newPos = [x, y];
//     return newPos;
//   },
//   draw(ctx) {
//     ctx.clearRect(0, 0, DIM_X, DIM_Y);
//     for (let i = 0; i < NUM_ASTEROIDS; i++) {
//       this.asteroids[i].draw(ctx);
//     }
//   },
//   move() {
//     for (let i = 0; i < NUM_ASTEROIDS; i++) {
//       this.asteroids[i].move();
//     }
//   }

// };

const DEFAULTS = {};

function Game(){
  this.asteroids = [];
  this.addAsteroids();
  this.DIM_X = DEFAULTS.DIM_X;
  this.DIM_Y = DEFAULTS.DIM_Y;
  this.NUM_ASTEROIDS = DEFAULTS.NUM_ASTEROIDS;
}
Game.DIM_X = 1000;
Game.DIM_Y = 1000;
Game.NUM_ASTEROIDS = 10;  //why no const or let (or !!!!!var?!!!)





Game.prototype.addAsteroids = function () {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    let pos = this.randPosition();
    let ast = new Asteroid({pos: pos});
    this.asteroids.push(ast);
  }
};

Game.prototype.randPosition = function () {
  let x = Math.random() * Game.DIM_X;
  let y = Math.random() * Game.DIM_Y;
  let newPos = [x,y];
  return newPos;
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.move = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids[i].move(); 
  }
};

module.exports = Game;