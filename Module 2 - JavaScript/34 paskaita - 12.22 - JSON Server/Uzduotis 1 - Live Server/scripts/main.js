import Element from "./Element.js";
import AddItemForm from "./AddItemForm.js";
import EditItemForm from "./EditItemForm.js";
import GameCard from "./GameCard.js";
import { fetchGames, uploadGame, deleteGame, displayGameCards } from "./functions.js";

const app = document.querySelector("#app");

const header = new Element(
  {
    tag: `header`,
    attributes: { class: "appHeader" },
    nested: [
      {
        tag: `h1`,
        text: `Game Database`,
      }
    ]
  }
);

const aside = new Element(
  {
    tag: `aside`,
    attributes: { class: "appAside" },
  }
);

const main = new Element(
  {
    tag: `main`,
    attributes: { class: "appMain" },
  }
);

const gameCardDisplayArea = new Element(
  {
    tag: `section`,
    attributes: { class: "gameCardDisplayArea" },
    nested: []
  }
);

const wrapper = new Element(
  {
    tag: `div`,
    attributes: { class: "wrapper" },
  }
);

app.append(aside, wrapper);
wrapper.append(header, main);

aside.append(new AddItemForm(), new EditItemForm());
main.append(gameCardDisplayArea);
displayGameCards(gameCardDisplayArea);



