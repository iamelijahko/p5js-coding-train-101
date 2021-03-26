// Title: Popping Bubbles
// Created: Elijah Ko
// Date: 11/02/2019
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 7.3-7.5"

let bubbles = []; //create array

var total = 0;

function setup() {
  createCanvas(700, 700);
  for (let i = 0; i < 10; i++) {
    bubbles[i] = new Bubble(random(width), height, random(20, 40), random(1, 3), 0); //constructor(x, y, r, yspeed, brightness)
  }
}

function draw() {
  background(12, 175, 171);

  //M1: for-loop
  // for (let i = 0; i < bubbles.length; i++) {
  //   bubbles[i].display();
  //   bubbles[i].move();
  //   bubbles[i].rollover(mouseX, mouseY);
  // }

  // M2: for...of loop
  for (let everyElement of bubbles) {
    everyElement.display();
    everyElement.move();
    everyElement.rollover(mouseX, mouseY);
  }
}

function keyPressed() {
  let b = new Bubble(random(width), height, random(20, 40), 1, 0);
  bubbles.push(b); //add
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].pop(mouseX, mouseY)) {
      bubbles.splice(i, 1); //splice(thisElement, howManyElement)
    } 
  } 
}