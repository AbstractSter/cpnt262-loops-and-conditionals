// Right Triangle
let rightTriangle = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    rightTriangle += "*";
  }
  rightTriangle += "<br>";
}

document.getElementById("right-triangle").innerHTML = rightTriangle;

// Full Pyramid
let n = 10;
let fullPyramid = "";

for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    fullPyramid += "*";
  }
    for (let k = 0; k < i * 2 - 1; k++) {
      fullPyramid += ""
  }
  fullPyramid += "<br>";
}

document.getElementById("full-pyramid").innerHTML = fullPyramid

