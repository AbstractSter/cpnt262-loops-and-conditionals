let rightTriangle = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    rightTriangle += "*";
  }
  rightTriangle += "<br>";
}

document.getElementById("right-triangle").innerHTML = rightTriangle;