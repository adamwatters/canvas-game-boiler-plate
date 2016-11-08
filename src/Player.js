function Player(center, size){
  this.center = center;
  this.size = size
}

Player.prototype.update = function() {
  
};

Player.prototype.draw = function(screen) {
  Game.drawBody(screen, this)
};

