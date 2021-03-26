class Bubble {

  constructor(x, y, r, xspeed, yspeed, brightness) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.brightness = brightness;
  }

  display() {
    stroke(31, 67, 200, 50);
    fill(this.brightness);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
  }

  //   move() {
  //     this.y -= this.yspeed;
  //     if (this.y <= this.r) {
  //       this.x += random(-2, 2);
  //       this.y = this.r;
  //     }
  //   }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x > width - this.r || this.x < this.r) {
      this.xspeed = -this.xspeed;
    }
    if (this.y > height - this.r || this.y < this.r) {
      this.yspeed = -this.yspeed;
    }
  }

  originalColor(){
    this.brightness = color(12, 175, 171, 20);
  }
  
  pop(px, py) {
    let d = dist(this.x, this.y, px, py);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  overlap(otherBubble) {
    let d = dist(this.x, this.y, otherBubble.x, otherBubble.y);
    if (d < this.r + otherBubble.r) {
      return true;
    } else {
      return false;
    }
  }
}