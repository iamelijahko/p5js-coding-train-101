// Title: Light Switch
// Author: Elijah Ko
// Date: 2019-12-16
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 3.4"

let button = false;
let buttonDiameter = 100;
// let extraCanvas;
let distance;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(0);
  
  distance = dist(mouseX, mouseY, width/2, height/2);
  
  if (button) {
    background(255);
  }

  noStroke();
  fill(255, 0, 100, 150);
  ellipseMode(CENTER);
  ellipse(width / 2, height / 2, buttonDiameter, buttonDiameter);
  
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text("Press Me!", width/2, height/2);
}

function mousePressed() {
  if (distance <= buttonDiameter/2) {
    button = !button;
  }
}