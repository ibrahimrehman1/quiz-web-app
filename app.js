document.querySelector(".btn").addEventListener("click", func);

var dict = {
  a: [
    "Q) What is the Capital of Pakistan ?",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
  ],
  b: [
    "Q) What is the Capital of Afghanistan ?",
    "Karachi",
    "Kabul",
    "Rawalpindi",
  ],
  c: ["Q) What is the Capital of India ?", "Delhi", "Mumbai", "UP"],
  d: ["Q) What is the Capital of Turkey ?", "Istanbul", "Ankara", "Rawalpindi"],
  e: ["Q) What is the Capital of Iran ?", "Tehran", "Sana", "Multan"],
};

var k = false;
var l = false;
var m = false;
function func_2() {
  k = document.getElementById("r1").checked;
  l = document.getElementById("r2").checked;
  m = document.getElementById("r3").checked;
}

var count = 0;
var score = 0;

function func() {
  count++;
  if (count > 1) {
    if (k == false && l == false && m == false) {
      alert("Please Select a Value!");
      count--;
      return null;
    }
  }
  if (count == 1) {
    var t = dict.a[0];
    var s = dict.a[1];
    var u = dict.a[2];
    var v = dict.a[3];
  } else if (count == 2) {
    t = dict.b[0];
    s = dict.b[1];
    u = dict.b[2];
    v = dict.b[3];
    if (k) {
      score++;
    }
  } else if (count == 3) {
    t = dict.c[0];
    s = dict.c[1];
    u = dict.c[2];
    v = dict.c[3];
    if (l) {
      score++;
    }
  } else if (count == 4) {
    t = dict.d[0];
    s = dict.d[1];
    u = dict.d[2];
    v = dict.d[3];
    if (k) {
      score++;
    }
  } else if (count == 5) {
    t = dict.e[0];
    s = dict.e[1];
    u = dict.e[2];
    v = dict.e[3];
    if (l) {
      score++;
    }
  } else if (count == 6) {
    if (k) {
      score++;
    }
    alert("Score: " + score);
    document.getElementById(
      "container"
    ).innerHTML = `<h2>Score: ${score}</h2><br><button type="button" class="btn" onclick="refresh()">Retake Quiz</button>`;
    return null;
  }
  var x = document.getElementById("container");
  x.innerHTML = " ";
  var l1 = document.createElement("h2");
  var t1 = document.createTextNode(`${t}`);
  var r1 = document.createElement("input");
  var r2 = document.createElement("input");
  var r3 = document.createElement("input");
  var lab1 = document.createElement("label");
  var lab2 = document.createElement("label");
  var lab3 = document.createElement("label");
  var btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.classList.add("btn");
  btn.setAttribute("onclick", "func()");
  var ltn = document.createTextNode("Next");
  btn.appendChild(ltn);
  var tab1 = document.createTextNode(`${s}`);
  var tab2 = document.createTextNode(`${u}`);
  var tab3 = document.createTextNode(`${v}`);
  lab1.appendChild(tab1);
  lab2.appendChild(tab2);
  lab3.appendChild(tab3);
  r1.setAttribute("type", "radio");
  r1.setAttribute("name", "options");
  r1.setAttribute("value", `${s}`);
  r1.setAttribute("id", "r1");
  r1.setAttribute("onclick", "func_2()");
  r2.setAttribute("type", "radio");
  r2.setAttribute("name", "options");
  r2.setAttribute("value", `${u}`);
  r2.setAttribute("id", "r2");
  r2.setAttribute("onclick", "func_2()");
  r3.setAttribute("type", "radio");
  r3.setAttribute("name", "options");
  r3.setAttribute("value", `${v}`);
  r3.setAttribute("id", "r3");
  r3.setAttribute("onclick", "func_2()");
  l1.appendChild(t1);
  x.appendChild(l1);
  x.appendChild(r1);
  x.appendChild(lab1);
  x.appendChild(r2);
  x.appendChild(lab2);
  x.appendChild(r3);
  x.appendChild(lab3);
  x.appendChild(btn);
  r1.style.marginTop = "20px";
  r2.style.marginTop = "10px";
  r3.style.marginTop = "10px";
  btn.style.marginTop = "10px";
  k = false;
  l = false;
  m = false;
}

function refresh() {
  location.reload();
}
