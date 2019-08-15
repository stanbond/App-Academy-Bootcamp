const View = require('./ttt-view.js');
const Game = require('../NodeSolution/game.js');

  $(() => {
    let g = new Game();
    let $view = $("figure.ttt");
    let myView = new View(g, $view);
  });
