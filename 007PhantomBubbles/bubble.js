class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display() {
    stroke(255, 50);
    noFill();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);
  }
}