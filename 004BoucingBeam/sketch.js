// Title: Bouncing Beam
// Author: Elijah Ko
// Date: 2019-12-02
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 3.2-3.3"

let circle = {
  x: 100,
  y: 150,
  xspeed: 4.0,
  yspeed: 5.0,
  diameter: 50
};

function setup() {
  createCanvas(700, 700);
  background(0);
}

function draw() {
  //background(0);
  show();
  move();
  bounce();
}

function show() {
  noStroke();
  fill(255, 20);
  ellipseMode(CENTER);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
}

function move() {
  circle.x += circle.xspeed;
  circle.y += circle.yspeed;
}

function bounce() {
  if (circle.x > width - circle.diameter / 2 || circle.x < circle.diameter / 2) {
    circle.xspeed = -circle.xspeed;
  }

  if (circle.y > height - circle.diameter / 2 || circle.y < circle.diameter / 2) {
    circle.yspeed = -circle.yspeed;
  }
}