let leftTriangle = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    leftTriangle += "*";
  }
  leftTriangle += "<br>";
}

document.write(leftTriangle);