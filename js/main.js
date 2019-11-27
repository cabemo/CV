class Ball {
	draw() {
		ellipse(mouseX, mouseY, 100);
	}
}

windowResized = () => {
	resizeCanvas(windowWidth, windowHeight);
}

let b;

setup = () => {
	createCanvas(windowWidth, windowHeight);
	b = new Ball();
}

draw = () => {
	background(175);
	b.draw();
}