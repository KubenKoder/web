window.onload = function() {
	canv = document.getElementById("demo");
	ctx = canv.getContext("2d");
	setInterval(run, 1000/30);
}

var posx = 0;
var posy = 0;

var run = function() {
	ctx.fillStyle = "#FFF";
	ctx.fillRect(0, 0, canv.width, canv.height);
	ctx.fillStyle = "#000";
	ctx.fillRect(posx, posy, 20, 20);
}

var blockmovex = function(a) {
	posx = add(posx, a);
}

var blockmovey = function(a) {
	posy = add(posy, a);
}

var add = function(n, x) {
	return n += x;
}