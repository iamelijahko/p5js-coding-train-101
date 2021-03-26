// Title: Poppy Changing Totems
// Created: Elijah Ko
// Date: 05/08/2019
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 7.8"

/* Instruction:
Pop totem: Left click
Change totem: Center click
*/

let totems = [];
let bubbles = [];
var totalBubbles = 30;
// let img;

function preload() { //because of the asynchronous nature of JavaScript
  for (let i = 0; i < 10; i++) {
    // totems[i] = loadImage("totems/FISMQuebec2022Totem" + i + ".png"); //M1
    totems[i] = loadImage(`totems/FISMQuebec2022Totem${i}.png`); //M2 template literals backtick
  }
  // img = loadImage("totems/FISMQuebec2022Totem" + 9 + ".png");
}

function setup() {
  // img = bubbles[9];

  createCanvas(750, 750);
  // createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < totalBubbles; i++) {
    let imageScale = random(0.01, 0.1);
    let totem = random(totems); //load random totem from the totems array
    bubbles[i] = new Bubble(width / 2, height / 2, imageScale, random(-3, 3), random(-3, 3), totem);
  }
}

function draw() {
  background(44, 65, 158);

  //for...of loop
  for (let everyElement of bubbles) {
    everyElement.display();
    everyElement.move();
    everyElement.bounce();
  }
}

function keyPressed() {
  let imageScale = random(0.01, 0.1);
  let totem = random(totems);
  let b = new Bubble(width / 2, height / 2, imageScale, random(-3, 3), random(-3, 3), totem);
  bubbles.push(b); //add
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].pop(mouseX, mouseY, mouseButton)) {
      bubbles.splice(i, 1); //splice(thisElement, howManyElement)
    }
    bubbles[i].clickChange(mouseX, mouseY, mouseButton);
  }
}