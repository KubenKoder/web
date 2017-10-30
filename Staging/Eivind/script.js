window.onload = function() {
	canv = document.getElementById("demo");
	ctx = canv.getContext("2d");
	setInterval(run, 1000/30);
}

var run = function() {
	ctx.fillStyle = "#FFF";
	ctx.fillRect(0, 0, canv.width, canv.height);
}