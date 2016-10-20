//http://codepen.io/pchiara/pen/eZKVmw
var canvas;
var balls = [];
var colors = [];
var al = 50;
var numBalls = 60;

function setup() {

	noStroke();
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.parent("sketch");
	canvas.style("right", "0");

  colors.push(color(51, 173, 255, al));
	colors.push(color(71, 117, 209, al));
	colors.push(color(128, 191, 255, al));
	colors.push(color(102, 179, 255, al));
	colors.push(color(77, 184, 255, al));

	for (var i = 0; i < numBalls; i++) {
		balls.push(new Ball());
	}
}

function draw() {
	background(255);
	for (var i = 0; i < numBalls; i++) {
		balls[i].move();
		balls[i].display();
	}
}

function Ball() {

  this.x = random(width);
  this.y = random(height);
	this.num = int(random(0,5));
	console.log(this.num);
	console.log(colors[this.num]);
  this.c = colors[this.num];
  this.diameter = random(20, 60);
  this.xSpeed = random(-0.5, 0.5);
  this.ySpeed = random(-0.5, 0.5);

  this.move = function() {

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  this.display = function() {
    fill(this.c);
    rect(this.x, this.y, this.diameter, this.diameter);
  }
}
