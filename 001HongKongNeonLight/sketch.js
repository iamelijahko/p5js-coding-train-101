// Title: Hong Kong's Neon Light
// Author: Elijah Ko
// Date: 2019-11-25
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 1 + 2.5"

function setup() {
  createCanvas(700, 700);
  frameRate(20);
  // print("Neon Light - A tribute to Hong Kong.");
  console.log("Neon Light - A tribute to Hong Kong.");
}

function draw() {
  background(0, 25, 60);

  //center
  stroke(random(150), random(150), random(20));
  strokeWeight(5);
  point(width / 2, height / 2);

  //top left
  stroke(random(150), random(150), random(20));
  noFill();
  arc(width / 4, height / 4, 50, 50, 0, PI + QUARTER_PI, OPEN);

  //top center
  stroke(random(150), random(150), random(20));
  ellipseMode(CENTER);
  ellipse(width / 2, height / 4, 50, 50);

  //top right
  stroke(random(150), random(150), random(20));
  line(3 * width / 4, height / 4 - 25, 3 * width / 4 - 25, height / 4 + 25);

  //middle left
  stroke(random(150), random(150), random(20));
  quad(width / 4, height / 2 - 25,
    width / 4 + 25, height / 2,
    width / 4, height / 2 + 25,
    width / 4 - 25, height / 2);

  //middle right
  stroke(random(150), random(150), random(20));
  rectMode(CENTER);
  rect(3 * width / 4, height / 2, 45, 45, 10);

  //bottom left
  stroke(random(150), random(150), random(20));
  line(width / 4 - 25, 3 * height / 4 - 25, width / 4 + 25, 3 * height / 4 + 25);
  line(width / 4 + 25, 3 * height / 4 - 25, width / 4 - 25, 3 * height / 4 + 25);

  //bottom center
  stroke(random(100), random(150), random(10));
  arc(width / 2 - 25, 3 * height / 4, 50, 50, PI + HALF_PI, HALF_PI);
  arc(width / 2 + 25, 3 * height / 4, 50, 50, HALF_PI, PI + HALF_PI, );

  //bottom right
  stroke(random(150), random(150), random(20));
  triangle(3 * width / 4, 3 * height / 4 - 25,
    3 * width / 4 + 30, 3 * height / 4 + 25,
    3 * width / 4 - 30, 3 * height / 4 + 25);
}