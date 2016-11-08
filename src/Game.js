function Game(size) {
  this.size = size;
  this.bodies = [];
};

Game.prototype = {
  init: function() {
    var centerPosition = {x: this.size.x / 2, y: this.size.y / 2};
    var player = new Player(centerPosition);
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

Game.drawBody = function(screen, body) {
  screen.fillRect(body.center.x - body.size.x / 2,
                  body.center.y - body.size.y / 2,
                  body.size.x,
                  body.size.y);
};
