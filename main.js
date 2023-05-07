// Define variables for the shape positions
let circleX = 50;
let circleY = 50;
let rectX = 150;
let rectY = 50;

// Define the canvas and webcam capture
let capture;
function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.hide(); // Hide the capture element
}

// Draw the shapes and webcam capture on the canvas and update their positions
function draw() {
  background(255);
  
  // Draw a red ellipse at the circleX and circleY positions
  fill(255, 0, 0);
  ellipse(circleX, circleY, 80, 80);
  
  // Draw a green rectangle at the rectX and rectY positions
  fill(0, 255, 0);
  rect(rectX, rectY, 80, 80);
  
  // Update the positions of the shapes
  circleX += 1;
  circleY += 1;
  rectX += 1;
  rectY += 1;
  
  // Draw the webcam capture on the canvas
  image(capture, 0, 0, width, height); // Draw the capture element on the canvas
}