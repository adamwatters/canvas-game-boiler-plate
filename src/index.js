window.addEventListener("load", function() {
  var screen = document.getElementById("screen").getContext("2d");
  var gameSize = { x: screen.canvas.width, y: screen.canvas.height };
  var game = new Game(gameSize);

  function tick() {
    game.update();
    game.draw(screen);
    requestAnimationFrame(tick);
  };

  tick();
});