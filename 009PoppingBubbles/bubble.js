class Bubble {
  
  constructor(x, y, r, yspeed, brightness) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.yspeed = yspeed;
    this.brightness = brightness;
  }

  display() {
    stroke(31, 67, 200, 50);
    fill(this.brightness);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
  }

  move() {
    this.y -= this.yspeed;
    if (this.y <= this.r) {
      this.x += random(-2, 2);
      this.y = this.r;
    }
  }

  rollover(px, py) {
    let d = dist(this.x, this.y, px, py);
    if (d < this.r) {
      this.brightness = color(31, 67, 200, 50);
    } else {
      this.brightness = color(12, 175, 171, 20);
    }
  }

  pop(px, py) {
    let d = dist(this.x, this.y, px, py);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
}