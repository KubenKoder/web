let xoff = yoff = zoff = 0;
let fogcanvas;
let enable = false;

setup = () => {
	fogcanvas = createCanvas(100, 100);
	fogcanvas.parent("fogeffect");
}
draw = () => {
	if (enable || frameCount == 1) {
		yoff = 0;
		loadPixels();
		for (let y = 0; y < height; y++) {
			xoff = 0;
			for (let x = 0; x < width; x++) {
				let r = noise(xoff, yoff, zoff) * 200;
				let index = (x + y * width) * 4;
				pixels[index+0] = r+100;
				pixels[index+1] = r+100;
				pixels[index+2] = r+100;
				pixels[index+3] = 50;
				xoff += 0.04;
			}
			yoff += 0.04;
		}
		zoff += 0.01;
		updatePixels();
	}
}

let fogchange = () => {
	enable = !enable;
}