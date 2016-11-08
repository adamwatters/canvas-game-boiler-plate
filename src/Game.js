function Game(size) {
  this.size = size;
  this.bodies = [];
};

Game.prototype = {
  init: function() {
    var player = new Player();
    this.addBody(player);
  },

  update: function() {
    this.bodies.forEach(function(body) {
      body.update();
    });
  },

  draw: function(screen) {
    screen.clearRect(0, 0, this.size.x, this.size.y);

    this.bodies.forEach(function(body) {
      body.draw(screen);
    });
  },

  addBody: function(body) {
    this.bodies.push(body);
  }
};
