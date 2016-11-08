function Block(center, size) {
  this.center = center;
  this.size = size;
}

Block.prototype.update = function() {
  this.center.x -= 1;
};

Block.prototype.draw = function(screen) {
  Game.draw(screen, this)
};