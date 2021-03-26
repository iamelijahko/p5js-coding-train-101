// Title: Images Basics
// Created: Elijah Ko
// Date: 05/08/2020
// Credit: Daniel Shiffman's Coding Train - p5.js "Chapter 7.7"

//Format: .jpg .png .gif .svg

let totems = [];
let imageScale = 0.1;
let img;

function preload() { //because of the asynchronous nature of JavaScript

  //There is a bug. Remember to rename the file number in your computer first before uploading the images here, otherwise you cannot cocatenate the images successfully

  for (let i = 0; i < 10; i++) {
    totems[i] = loadImage('totems/FISMQuebec2022Totem' + i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = totems[9];
}

function draw() {
  background(44, 65, 158);
  imageMode(CENTER);
  image(img, mouseX, mouseY, imageScale * img.width, imageScale * img.height);
}