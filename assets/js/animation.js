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
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('z-index', '1');
	canvas.parent('two');
	b = new Ball();
}

draw = () => {
	background(0);
	b.draw();
}