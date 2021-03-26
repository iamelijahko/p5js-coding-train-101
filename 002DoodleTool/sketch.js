// Title: Doodle Tool
// Author: Elijah Ko
// Date: 2019-11-25
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 2.1"

function setup() {
  createCanvas(700, 700);
  //frameRate(15);
  background(252, 228, 0);
}

function draw() {
  //background(0);

  if (mouseIsPressed) {
    doodle();
  }
}

function doodle() {
  stroke(255, 120, 250, 50);
  strokeWeight(30);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function keyPressed() {
  background(252, 228, 0); //clear drawing
}