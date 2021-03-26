// Title: Overlapping Bubbles
// Created: Elijah Ko
// Date: 11/02/2019
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 7.3-7.5"

let bubbles = []; //create array
let controlBubble;

var totalBubbles = 20;

function setup() {
  createCanvas(750, 750);
  for (let i = 0; i < totalBubbles; i++) {
    bubbles[i] = new Bubble(width / 2, height / 2, random(20, 40), random(-3, 3), random(-3, 3), 0);
  }
  controlBubble = new Bubble(width / 2, height / 2, random(20, 40), random(-3, 3), random(-3, 3), color(12, 175, 171, 20));
}

function draw() {
  background(12, 175, 171);

  controlBubble.x = mouseX;
  controlBubble.y = mouseY;
  controlBubble.display();
  controlBubble.originalColor();

  //m1: for...of loop
  for (let everyElement of bubbles) {
    everyElement.display();
    everyElement.move();
    everyElement.bounce();
    everyElement.originalColor();

    for (let b of bubbles) {
      if (b !== everyElement && b.overlap(everyElement)) {
        everyElement.brightness = color(0, 0, 255, 100);
      }
    }

    if (controlBubble.overlap(everyElement)) {
      everyElement.brightness = color(255, 0, 0, 100);
      controlBubble.brightness = color(255, 0, 0, 100);
    }
  }
}

function keyPressed() {
  let b = new Bubble(width / 2, height / 2, random(20, 40), random(-3, 3), random(-3, 3), 0);
  bubbles.push(b); //add
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].pop(mouseX, mouseY)) {
      bubbles.splice(i, 1); //splice(thisElement, howManyElement)
    }
  }
}