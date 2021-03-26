class Bubble {

  constructor(x, y, imageScale, xspeed, yspeed, img) {
    this.x = x;
    this.y = y;
    this.imageScale = imageScale;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.img = img;
  }

  display() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.imageScale * this.img.width, this.imageScale * this.img.height);
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x > width - (this.imageScale * this.img.width) / 2 || this.x < (this.imageScale * this.img.width) / 2) {
      this.xspeed = -this.xspeed;
    }
    if (this.y > height - (this.imageScale * this.img.height) / 2 || this.y < (this.imageScale * this.img.height) / 2) {
      this.yspeed = -this.yspeed;
    }
  }

  pop(px, py, mButton) {
    if (px > this.x - (this.imageScale * this.img.width) / 2 && px < this.x + (this.imageScale * this.img.width) / 2 && py > this.y - (this.imageScale * this.img.height) / 2 && py < this.y + (this.imageScale * this.img.height) / 2 && mButton == LEFT) {
      return true;
    } else {
      return false;
    }
  }

  clickChange(px, py, mButton) {
    if (px > this.x - (this.imageScale * this.img.width) / 2 && px < this.x + (this.imageScale * this.img.width) / 2 && py > this.y - (this.imageScale * this.img.height) / 2 && py < this.y + (this.imageScale * this.img.height) / 2 && mButton == CENTER) {
      this.img = random(totems);
    }
  }
}