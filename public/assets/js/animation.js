// window.addEventListener('DOMContentLoaded', () => {
	const iframe = document.querySelector('div[name="infogram"]');
	console.log(iframe);
	iframe.addEventListener('load', () => {
			const button = this.contentWindow.document.querySelector('button.ig-share-button.fullWidth');
			const logo = this.contentWindow.document.querySelector('img[alt="Infogram logo"');
			const infolink = this.contentWindow.document
				.querySelector(
					'a[href="https://infogram.com/ec688f8f-87c1-4d21-b710-21d6db278f0e"]'
				)
				;
			const infolink2 = this.contentWindow.document.querySelector('a[href="https://infogram.com"]');

			console.log(button);
			console.log(logo);
			console.log(infolink);
			console.log(infolink2);
	});
	
// })
// class Ball {
// 	draw() {
// 		ellipse(mouseX, mouseY, 100);
// 	}
// }

// windowResized = () => {
// 	resizeCanvas(windowWidth, windowHeight);
// }

// let b;

// setup = () => {
// 	canvas = createCanvas(windowWidth, windowHeight);
// 	canvas.style('z-index', '1');
// 	canvas.parent('two');
// 	b = new Ball();
// }

// draw = () => {
// 	background(0);
// 	b.draw();
// }