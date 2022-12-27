import Element from "./Element.js";
import Modal from "./Modal.js";
import EditItemForm from "./EditItemForm.js";
import { displayGameCards, deleteGame, renderOneCard } from "./functions.js";

export default class GameCard {
  constructor(props) {
    this.props = props;
    return this.render();
  }

  render() {
    const newGameCard = new Element(
      {
        tag: `article`,
        attributes: { class: `gameCard`, id: `id${this.props.id}` },
        nested: [
          {
            tag: `div`,
            attributes: { class: "cardDeleteButton cardBtn" },
            nested: [
              {
                tag: `p`,
                text: `Del`
              }
            ]
          },
          {
            tag: `div`,
            attributes: { class: "cardEditButton cardBtn" },
            nested: [
              {
                tag: `p`,
                text: `Edit`
              }
            ]
          },
          {
            tag: `figure`,
            attributes: { class: "gamePoster" },
            nested: [
              {
                tag: `img`,
                attributes: { src: `${this.props.imageURL}`, width: "300", height: "auto", alt: `${this.props.title} poster.` },
              },
              {
                tag: `input`,
                attributes: { class: "cardSelectionInput hidden", type: "checkbox", id: "cardSelectionInput", name: "cardSelectionInput" },
              }
            ]
          }, {
            tag: `div`,
            attributes: { class: "cardInfo" },
            nested: [
              {
                tag: `div`,
                attributes: { class: "cardTitleArea" },
                nested: [
                  {
                    tag: `h3`,
                    text: `${this.props.title}`,
                    attributes: { class: "cardTitle" },
                  }, {
                    tag: `p`,
                    attributes: { class: "cardGenreYear" },
                    nested: [
                      {
                        tag: `span`,
                        text: `${this.props.genre.toUpperCase()} / `,
                        attributes: { class: "cardGenre" },
                      }, {
                        tag: `span`,
                        text: `${this.props.releaseYear}`,
                        attributes: { class: "cardYear" },
                      }
                    ]
                  }
                ]
              },
              {
                tag: `div`,
                attributes: { class: "cardAdditionalInfo" },
                nested: [
                  {
                    tag: `div`,
                    attributes: { class: "cardPublisherBox" },
                    nested: [
                      {
                        tag: `h4`,
                        text: `Publisher: `,
                      },
                      {
                        tag: `p`,
                        text: `${this.props.publisher}`,
                      }
                    ]
                  },
                  {
                    tag: `div`,
                    attributes: { class: "cardDeveloperBox" },
                    nested: [
                      {
                        tag: `h4`,
                        text: `Developer: `,
                      },
                      {
                        tag: `p`,
                        text: `${this.props.developer}`,
                      }
                    ]
                  },
                  {
                    tag: `div`,
                    attributes: { class: "cardDescriptionBox" },
                    nested: [
                      {
                        tag: `h4`,
                        text: `Description: `,
                      },
                      {
                        tag: `p`,
                        text: `${this.props.description}`,
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    );

    // Card events
    newGameCard
      .querySelector(".cardDeleteButton")
      .addEventListener("click", () => {
        const parent = newGameCard.parentElement;
        deleteGame(newGameCard.id.slice(2));
        displayGameCards(parent);
      });
    newGameCard
      .querySelector(".cardEditButton")
      .addEventListener("click", () => {
        console.log(newGameCard.getClientRects());
        const cardID = newGameCard.id.slice(2);
        const modal = new Modal();
        renderOneCard(cardID, modal);
        modal.append(new EditItemForm());
        const inputID = modal.querySelector("#inpGameId");
        const labelID = modal.querySelector(".inpGameIdDiv label");
        inputID.classList.add("hidden");
        inputID.setAttribute("value", cardID);
        labelID.classList.add("hidden");




      });

    return newGameCard;

  }
}
// newGameCard.addEventListener("click", (e) => {
//   e.preventDefault();
//   const selectCardInput = newGameCard.querySelector("#cardSelectionInput");
//   if (selectCardInput.checked) {
//     selectCardInput.checked = false;
//     newGameCard.classList.add("gameCard-selected");
//   } else {
//     selectCardInput.checked = true;
//     newGameCard.classList.remove("gameCard-selected");
//   }
//   displayGameCards(newGameCard.parentElement);
// });


