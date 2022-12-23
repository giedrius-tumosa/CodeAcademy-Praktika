import Element from "./Element.js";
import GameCard from "./GameCard.js";

export const fetchGames = (id) => {
  let item = [];
  fetch(`http://localhost:3000/games/${id ? id : ""}`)
    .then(response => response.json())
    .then(data => item.push(data));
  return item;
};

export const uploadGame = (gameData) => {
  fetch(`http://localhost:3000/games/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(gameData)
  });
};

export const deleteGame = (id) => {
  fetch(`http://localhost:3000/games/${id}`, {
    method: "DELETE",
  });
};

export const editGame = (id, gameData) => {
  fetch(`http://localhost:3000/games/${id}`, {
    method: "PATCH",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(gameData)
  });
};

export const displayGameCards = (cardsContainer) => {
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
  fetch(`http://localhost:3000/games`)
    .then(response => response.json())
    .then(data => {
      data.forEach(game => {
        const newGameCard = new GameCard(game);
        cardsContainer.append(newGameCard);
      });
    });
};

export const renderOneCard = (id, cardsContainer) => {
  console.log(`http://localhost:3000/games/${id}`);
  fetch(`http://localhost:3000/games/${id}`)
    .then(response => response.json())
    .then(data => {
      const newGameCard = new GameCard(data);
      cardsContainer.append(newGameCard);
    });
};