import Element from "./Element.js";
import { uploadGame } from "./functions.js";
import Game from "./Game.js";

export default class AddItemForm {
  constructor() {
    return this.render();
  }
  render() {
    const form = new Element(
      {
        tag: `form`,
        attributes: { class: "addItemForm" },
        nested: [
          {
            tag: `div`,
            attributes: { class: "inpGameTitleDiv" },
            nested: [
              {
                tag: `label`,
                text: `Title: `,
                attributes: { for: "inpGameTitle" },
              },
              {
                tag: `input`,
                attributes: { type: "text", id: "inpGameTitle", name: "inpGameTitle", required: "required" },
              }
            ]
          },
          {
            tag: `div`,
            attributes: { class: "inpGamePublisherDiv" },
            nested: [
              {
                tag: `label`,
                text: `Publisher: `,
                attributes: { for: "inpGamePublisher" },
              },
              {
                tag: `input`,
                attributes: { type: "text", id: "inpGamePublisher", name: "inpGamePublisher", required: "required" },
              }
            ]
          },
          {
            tag: `div`,
            attributes: { class: "inpGameDeveloperDiv" },
            nested: [
              {
                tag: `label`,
                text: `Developer: `,
                attributes: { for: "inpGameDeveloper" },
              },
              {
                tag: `input`,
                attributes: { type: "text", id: "inpGameDeveloper", name: "inpGameDeveloper", required: "required" },
              }
            ]
          },
          {
            tag: `div`,
            attributes: { class: "inpGameYearDiv" },
            nested: [
              {
                tag: `label`,
                text: `Release year: `,
                attributes: { for: "inpGameYear" },
              },
              {
                tag: `input`,
                attributes: { type: "number", id: "inpGameYear", name: "inpGameYear", min: "1900", required: "required" },
              }
            ]
          },
          {
            tag: `div`,
            attributes: { class: "inpGameDecsriptionDiv" },
            nested: [
              {
                tag: `label`,
                text: `Description: `,
                attributes: { for: "inpGameDecsription" },
              },
              {
                tag: `textarea`,
                attributes: { id: "inpGameDecsription", name: "inpGameDecsription", required: "required" },
              }
            ]
          },
          {
            tag: `div`,
            attributes: { class: "inpGameGenreDiv" },
            nested: [
              {
                tag: `label`,
                text: `Genre: `,
                attributes: { for: "inpGameGenre" },
              },
              {
                tag: `input`,
                attributes: { type: "text", id: "inpGameGenre", name: "inpGameGenre", required: "required" },
              }
            ]
          },
          {
            tag: `div`,
            attributes: { class: "inpGameImageURLDiv" },
            nested: [
              {
                tag: `label`,
                text: `Poster link: `,
                attributes: { for: "inpGameImageURL" },
              },
              {
                tag: `input`,
                attributes: { type: "url", id: "inpGameImageURL", name: "inpGameImageURL", required: "required" },
              }
            ]
          },
          {
            tag: `div`,
            attributes: { class: "btnAddMovietDiv" },
            nested: [
              {
                tag: `button`,
                text: `Add movie`,
                attributes: { class: "btnAddMovie", type: "submit" },
              }
            ]
          }
        ]
      }
    );
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      uploadGame(new Game(
        e.target.elements.inpGameTitle.value,
        e.target.elements.inpGamePublisher.value,
        e.target.elements.inpGameDeveloper.value,
        e.target.elements.inpGameYear.value,
        e.target.elements.inpGameDecsription.value,
        e.target.elements.inpGameGenre.value,
        e.target.elements.inpGameImageURL.value,
      ));

    });
    return form;
  }
}

