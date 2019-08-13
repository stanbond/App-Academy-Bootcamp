const Game = require("./game.js");

function GameView(ctx){
  this.game = new Game();
  this.ctx = ctx;
};

GameView.prototype.start = function (){
  setInterval(() => {
  this.game.move();
  this.game.draw(this.ctx);
  } , 20);
};

module.exports = GameView;