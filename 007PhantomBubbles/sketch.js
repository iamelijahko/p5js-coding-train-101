// Title: Phantom Bubbles
// Author: Elijah Ko
// Date: 16/12/2019
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 6.1-6.4"

let bubble;
let bubble2;

function setup() {
  createCanvas(700, 700);
  bubble1 = new Bubble(width / 2, height / 2, 20);
  bubble2 = new Bubble(width / 2, height / 2, 30);
  frameRate(20);
  background(0);
}

function draw() {
  //background(0);
  bubble1.display();
  bubble1.move();
  bubble2.display();
  bubble2.move();
}