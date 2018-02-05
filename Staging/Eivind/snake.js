var canv, ctx;
var score;
var chg;

px = py = 10;
tc = gs = 20;
xv = yv = 0;

tail = []
length = 1;

ax = Math.floor(Math.random()*tc);
ay = Math.floor(Math.random()*tc);

var snakeload = function() {
	canv = document.getElementById("snake");
	ctx = canv.getContext("2d");
	setInterval(run, 1000/10);
	addEventListener("keydown", keydown);
}

var keyTyped = function() {
	return false;
}

var keydown = function(evt) {
	switch(evt.keyCode) {
		//WASD
		case 65:
			if ( (xv != 1 || length == 1 ) && chg == 0) {
				xv = -1; yv = 0; chg = 1;
			}
		break;
		case 87:
			if ( (yv != 1 || length == 1 ) && chg == 0) {
				xv = 0; yv = -1; chg = 1;
			}
		break;
		case 68:
			if ( ( xv != -1 || length == 1 ) && chg == 0) {
				xv = 1; yv = 0; chg = 1;
			}
		break;
		case 83:
			if ( (yv != -1 || length == 1 ) && chg == 0) {
				xv = 0; yv = 1; chg = 1;
			}
	}
}

var reset = function() {
	if (length > 1) {
		alert("Din poengsum ble " + length);
		ax = Math.floor(Math.random()*tc);
		ay = Math.floor(Math.random()*tc);
	}

	length = 1;
	tail = []

	px = py = 10;
	xv = yv = 0;
}

var run = function() {

	px += xv;
	py += yv;

	chg = 0;

	if (px >= tc || px < 0 || py >= tc || py < 0) {
		reset();
	}

	for (var i = 0; i < tail.length; i++) {
		if (px == tail[i].x && py == tail[i].y) {
			reset();
		}
	}

	if (px == ax && py == ay) {
		length += 1;

		ax = Math.floor(Math.random()*tc);
		ay = Math.floor(Math.random()*tc);
	}

	tail.push({x: px, y: py});

	if (tail.length > length) {
		tail.shift();
	}

	draw();
}

var colorfunc = function(num, length) {
	num = 128 + num * 128 / (length)
	return Math.floor(num);
}

var draw = function() {
	//bg
	ctx.fillStyle = "#111";
	ctx.fillRect(0,0,canv.width,canv.height);

	//player
	for (var i = 0; i < length; i++) {
		ctx.fillStyle = "rgb(0, " + colorfunc(i + 1, tail.length) + ", 0)";
		ctx.fillRect(tail[i].x*gs, tail[i].y*gs, gs, gs);
	}

	//apple
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(ax*gs,ay*gs,gs,gs);
}