import Element from "./Element.js";
import Form from "./Form.js";
import { renderAllCards } from "./Functions.js";


const app = document.querySelector("#app");
const formAddItem = new Form();

const header = new Element(
  {
    tag: `header`,
    attributes: { class: "header" },
    nested: [
      {
        tag: `h1`,
        text: `Butų pirkimas ir pardavimas`,
        attributes: { class: "hero_heading" },
      }
    ]
  }
);

const main = new Element(
  {
    tag: `main`,
    attributes: { class: "main" },
    nested: [
      {
        tag: `section`,
        attributes: { class: "addItemSection" },
      }, {
        tag: `section`,
        attributes: { class: "displayItemsSection" },
      }
    ]
  }
);

app.append(header, main);

const addItemSection = document.querySelector(".addItemSection");
addItemSection.append(formAddItem);

const formErrorResponse = new Element(
  {
    tag: `div`,
    attributes: { class: "formErrorResponse" },
  }
);
addItemSection.append(formErrorResponse);

renderAllCards();


