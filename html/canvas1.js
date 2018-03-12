let canv1, ctx1;

let x, y, w, h;
let r, g, b;

let sliders

let clearField = () => {
	ctx1.fillStyle = "#111";
	ctx1.fillRect(0, 0, canv1.width, canv1.height);
}


//works as values to cycle through in clearVars
let pos = {x:0, y:0, w:0, h:0, xs:0, ys:0, ws:0, hs:0}
let clrs = {r:0, g:0, b:0, rs:0, gs:0, bs:0}

let clearVars = () => {

	for (let i in pos) {
		getinput(i).value = 25;
	}

	for (let i in clrs) {
		getinput(i).value = 100;
	}

}

let canvas1load = function() {
	canv1 = document.getElementById("canvas1");
	ctx1 = canv1.getContext("2d");
	
	clearField();
	getSliders();

	for (let i in sliders) {
		sliders[i].oninput = () => {
			getinput(i).value = sliders[i].value;
		}
	}
}

let buttonCall = function() {
	getinputs();
	drawBox();
}

let getSliders = () => {
	sliders = {
		x: document.getElementById("xs"),
		y: document.getElementById("ys"),
		w: document.getElementById("ws"),
		h: document.getElementById("hs"),

		r: document.getElementById("rs"),
		g: document.getElementById("gs"),
		b: document.getElementById("bs")
	}
}

let getinput = (re) => {
	return document.getElementById(re);
}

let getinputs = function(re) {
	
	//+ før verdien konverterer den til et tall
	x = +document.getElementById("x").value;
	y = +document.getElementById("y").value;
	w = +document.getElementById("w").value;
	h = +document.getElementById("h").value;

	r = +document.getElementById("r").value;
	g = +document.getElementById("g").value;
	b = +document.getElementById("b").value;

}

let drawBox = function() {
	ctx1.fillStyle = `rgb(${r}, ${g}, ${b})`;
	ctx1.fillRect(x, y, w, h);
}