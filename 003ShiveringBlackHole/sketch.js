// Title: Shivering Black Hole
// Author: Elijah Ko
// Date: 2019-11-25
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 2.2 - 2.4 + 3.1"

let time = 0.0;
let mappedNoise;

let circle = {
  diameter: 150,
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(198, 34, 152);

  mappedNoise = map(noise(time), 0.0, 1.0, 0.7, 1.0);

  noStroke();
  fill(0);
  ellipseMode(CENTER);
  ellipse(width / 2, height / 2, mappedNoise * circle.diameter, mappedNoise * circle.diameter);

  if (mouseIsPressed &&
    mouseX > width / 2 - (mappedNoise * circle.diameter) / 2 &&
    mouseX < width / 2 + (mappedNoise * circle.diameter) / 2 &&
    mouseY > height / 2 - (mappedNoise * circle.diameter) / 2 &&
    mouseY < height / 2 + (mappedNoise * circle.diameter) / 2) {

    // shivering circle
    ellipse(width / 2, height / 2, random(circle.diameter - 10, circle.diameter), random(circle.diameter - 10, circle.diameter));
  }

  rectMode(CORNER);
  textAlign(CENTER, BOTTOM);
  text("Ratio (mapped / original)", width / 2, height - 40);
  text(mappedNoise, width / 2, height - 20);

  time += 0.005;
}