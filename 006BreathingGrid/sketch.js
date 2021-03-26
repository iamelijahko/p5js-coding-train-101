// Title: Breathing Grid
// Author: Elijah Ko
// Date: 2019-12-16
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 4.1-4.2"

let rectSize = 30;
let mappedNoise1;
let mappedNoise2;
let time = 0.0;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(255);
  fill(0);
  rectMode(CORNER);

  for (var x = 0; x < width; x += rectSize + 10) {
    for (var y = 0; y < height; y += rectSize + 10) {
      mappedNoise1 = map(noise(time), 0.0, 1.0, 0.1, 2.4);
      mappedNoise2 = map(noise(time), 0.0, 1.0, 0.5, 1.4);
      rect(x, y, mappedNoise1 * rectSize, mappedNoise2 * rectSize);
    }
  }

  time += 0.01;
  console.log(mappedNoise1 + " " + mappedNoise2);
}