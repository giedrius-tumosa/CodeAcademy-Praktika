import ItemCard from "./ItemCard.js";

export function uploadNewItem(newItem) {
  const formErrorResponse = document.querySelector(".formErrorResponse");
  fetch('https://robust-safe-crafter.glitch.me/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  })
    .then(response => response.json())
    .then(() => window.location.reload())
    .catch(err => {
      const errorMsg = document.createTextNode(`Kažkas nutiko: ${err}`);
      formErrorResponse.append(errorMsg);
    });
}

export function renderAllCards() {
  // reset
  const displayItemsSection = document
    .querySelector(".displayItemsSection");

  while (displayItemsSection.firstChild) {
    displayItemsSection.remove(displayItemsSection.firstChild);
  }
  // Fetchinam data renderinimui
  fetch('https://robust-safe-crafter.glitch.me/')
    .then(response => response.json())
    .then(json => {
      json.forEach(el => {
        return displayItemsSection.append(new ItemCard(el));
      });
    });
}
