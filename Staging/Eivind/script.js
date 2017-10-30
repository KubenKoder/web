window.onload = function() {
	canv = document.getElementById("demo");
	ctx = canv.getContext("2d");
	setInterval(run, 1000/30);
}

var x = 0;
var h = 25;

var run = function() {

	if (x + h > canv.height) {
		x = 0;
		h += 25;
	}

	ctx.fillStyle = "#333";
	ctx.fillRect(0, 0, canv.width, canv.height);

	ctx.fillStyle = "#222";
	ctx.fillRect(0, x, canv.width, h);

	x++;
}