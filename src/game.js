function Game(size) {
  this.size = size;
  this.bodies = [];
};

Game.prototype = {
  update: function() {
    console.log(this)
  },

  draw: function(screen) {
    screen.clearRect(0, 0, this.size.x, this.size.y);

    this.bodies.forEach(function(body) {
      body.draw(screen);
    });
  }
};
