function showCodeBox() {
  document.getElementById("c--text").style.animation = "fadeInCodeContainer 0.5s forwards";
}

setTimeout(showCodeBox, 6500);



function writeCode() {
  var textInput = document.getElementById("textInput");
  var textResult = document.getElementById("textResult");

  if (textInput.value == "<h1>Hallo verden!</h1>") {
    textResult.style.color = "black";
    textResult.style.fontSize = "30px";
    textResult.innerHTML = "Hallo verden!";
  } else {
    textResult.style.color = "red";
    textResult.style.fontSize = "20px";
    textResult.innerHTML = "Ikke helt riktig enda...";
  }
}



var i = 0;
var sentence = "<h1>Lær deg å kode din første linje nedenfor!</h1>";
var speed = 75;

function codeLine_1() {
  if (i < sentence.length) {
    document.getElementById("codeLine_1").innerHTML += sentence.charAt(i);
    i++;
    setTimeout(codeLine_1, speed);
  }
}

var i2 = 0;
var sentence2 = "<p>Det er ikke så vanskelig!</p>";

function codeLine_2() {
  if (i2 < sentence2.length) {
    document.getElementById("codeLine_2").innerHTML += sentence2.charAt(i2);
    i2++;
    setTimeout(codeLine_2, speed);
  }
}

setTimeout(codeLine_2, 4200);
