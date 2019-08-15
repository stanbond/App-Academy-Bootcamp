class View {
  constructor(game, $el) {
    this.game = game;
    $el.append(this.setupBoard());
    this.bindEvents();
  }

  bindEvents() {
    let that = this;
    $("li").on("click", (el) => {
      let $target = $(el.target);
      this.makeMove($target, that);
      console.log($target.data("data-pos"));
    });
  }

  makeMove($square, that) {
    let pos = $square.data("data-pos");
    if ($square.css("background-color") === "rgb(255, 255, 0)") {
      this.game.playMove(pos);
      $square.text(this.game.currentPlayer);
      if (this.game.currentPlayer === "x") {
        $square.css("background-color", "purple");
        $square.css("color", "orange");
      } else {
        $square.css("background-color", "pink");
        $square.css("color", "green");
      }
    }
    if (this.game.isOver()) {
      if (this.game.winner()) {
        console.log(`${this.game.currentPlayer} has won!`);
        let $message = $(`<h2>${this.game.currentPlayer.toUpperCase()} HAS WON!!!</h2>`);
        $("body").append($message);
        $("li").off("click");
      } else {
        let $message = `NOBODY HAS WON!!!`
        $("body").append($message);
        $("li").off("click");
      }
    }
  }

  setupBoard() {
    const $grid = $("<ul></ul>");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $liEl = $("<li></li>");
        $liEl.data("data-pos", [i, j]);
        $grid.append($liEl);
      }
    }
    return $grid
  }

}

module.exports = View;
