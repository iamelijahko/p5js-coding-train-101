// Title: Spellcasting Array
// Author: Elijah Ko
// Date: 09/02/2019
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 7.1"

var words = ["magic", "illusion", "imagination", "invention", "wonder", "curiosity", "exploration"]; //Processing: string[] words = new string[6];
var index = 0;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(0);
  stroke(255);

  fill(random(255));
  textSize(32);
  textAlign(CENTER);
  text(words[index], width / 2, height / 2, 0, width);
  line(0, height / 2, width, height / 2);
}

function mousePressed() {
  index++;
  if (index >= words.length) {
    index = 0;
  }
}