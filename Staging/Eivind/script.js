window.onload = function() {
	canv = document.getElementById("demo");
	ctx = canv.getContext("2d");
	setInterval(run, 1000/30);

	div = document.getElementById("tablecontainer");
	createButtons(div);
}

var div;
var table;
var trs = []
var tds = []
var buttons = []

/*
Dette ble en del lengre enn det jeg hadde forventet.
Det raskeste hadde nok vært å satt opp i html slik:
<tr>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
og lagt til knappene med js
*/

var createButtons = function(box) {
	table = document.createElement("table");

	console.log(box);
	box.appendChild(table);

	for (var i = 0; i < 2; i++) {

		trs[i] = document.createElement("tr");

		for (var j = 0; j < 6; j++) {
			tds[j+6*i] = document.createElement("td");


			buttons[j+6*i] = document.createElement("button");
			
			if (i == 0) {

				var num;
				switch(j) {
					case 0:
						num = -10;
						break;
					case 1:
						num = -5;
						break;
					case 2:
						num = -1;
						break;
					case 3:
						num = 1;
						break;
					case 4:
						num = 5;
						break;
					case 5:
						num = 10;
				}

				buttons[j+6*i].setAttribute("onclick",
					"blockmovex(" + num + ")"
				)

				buttons[j+6*i].appendChild(
					document.createTextNode(num + "x")
				)

			} else if (i == 1) {

				var num;
				switch(j) {
					case 0:
						num = -10;
						break;
					case 1:
						num = -5;
						break;
					case 2:
						num = -1;
						break;
					case 3:
						num = 1;
						break;
					case 4:
						num = 5;
						break;
					case 5:
						num = 10;
				}

				buttons[j+6*i].setAttribute("onclick",
					"blockmovey(" + num + ")"
				)

				buttons[j+6*i].appendChild(
					document.createTextNode(num + "y")
				)

			}

			tds[j+6*i].appendChild(buttons[j+6*i]);


			trs[i].appendChild(tds[j+6*i]);
		}

		table.appendChild(trs[i]);
	}
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