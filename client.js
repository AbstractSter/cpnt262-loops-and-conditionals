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
let n = 25;
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

document.getElementById("full-pyramid").innerHTML = fullPyramid;

// Reverse a String
const cards = [
  {title: "Card A", content: "This is the first image card"},
  {title: "Card B", content: "This is the second image card"},
  {title: "Card C", content: "This is the third image card"},
];

const cardContainer = document.getElementById("card-container");

  // Render cards
  cards.forEach(card => {
    // Create a card element
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    // Set card title
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = card.title;

    // Set card content
    const cardContent = document.createElement("p");
    cardContent.textContent = card.content;

    // Append title and content to the card element
    cardElement.appendChild(cardTitle);
    cardElement.appendChild(cardContent);

    // Append the card element to the card container
    cardContainer.appendChild(cardElement);
});