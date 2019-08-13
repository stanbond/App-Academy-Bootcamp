console.log("Webpack is working!");

// const mo1 = new MovingObject(100,100,50, 0, 2* Math.PI);

// mo1.draw();m
const MovingObject = require("./moving_object.js");
const GameView = require("./game_view.js");
const Game = require("./game.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;
window.GameView = GameView;
window.Game = Game;
window.Asteroid = Asteroid;

window.addEventListener("DOMContentLoaded", (event) => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext("2d");

  window.canvas = canvas;
  window.ctx = ctx;
  const view = new GameView(ctx);

  view.start();
});



