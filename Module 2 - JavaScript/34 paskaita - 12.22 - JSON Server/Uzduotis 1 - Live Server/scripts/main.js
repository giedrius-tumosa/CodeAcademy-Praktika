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







// RANDOM STUFF

// const game = {
//   id: 1,
//   title: "Demon's Souls",
//   publisher: "Sony Computer Entertainment",
//   developer: "FromSoftware",
//   releaseYear: "2009",
//   description: "Demon's Souls is set in Boletaria, a kingdom consumed by a dark being called the Old One, following its release through the use of forbidden Soul Arts. Players take on the role of a hero brought to Boletaria to kill its fallen king Allant and pacify the Old One. Gameplay has players navigating five different worlds from a hub called the Nexus, with a heavy emphasis on challenging combat and mechanics surrounding player death and respawning. Online multiplayer allows both player cooperation and world invasions featuring player versus player combat.",
//   genre: ["action", "role-playing"],
//   imageURL: "https://upload.wikimedia.org/wikipedia/en/9/91/Demon%27s_Souls_Cover.jpg"
// };



    // {
    //   "title": "God of War",
    //   "publisher": "Sony Computer Entertainment",
    //   "developer": "Santa Monica Studio",
    //   "releaseYear": "2018",
    //   "description": "Laba diena.",
    //   "genre": "third-person",
    //   "imageURL": "https://en.wikipedia.org/wiki/God_of_War_(2018_video_game)#/media/File:God_of_War_4_cover.jpg",
    //   "id": 2
    // }