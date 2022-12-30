import Element from "./Element.js";
import { uploadNewItem } from "./Functions.js";

export default class Form {
  constructor() {
    return this.render();
  }
  render() {
    const newForm = new Element(
      {
        tag: `form`,
        attributes: { class: "formAddItem" },
        nested: [
          {
            tag: `div`,
            attributes: { class: "inpImageUrlDiv" },
            nested: [
              {
                tag: `label`,
                text: `Image link: `,
                attributes: { for: "inpImageUrl" },
                nested: []
              }, {
                tag: `input`,
                attributes: { type: "url", id: "inpImageUrl", name: "inpImageUrl" },
              }
            ]
          }, {
            tag: `div`,
            attributes: { class: "inpCityDiv" },
            nested: [
              {
                tag: `label`,
                text: `City: `,
                attributes: { for: "inpCity" },
              }, {
                tag: `input`,
                attributes: { type: "text", id: "inpCity", name: "inpCity" },
              }
            ]
          }, {
            tag: `div`,
            attributes: { class: "inpPriceDiv" },
            nested: [
              {
                tag: `label`,
                text: `Price: `,
                attributes: { for: "inpPrice" },
              }, {
                tag: `input`,
                attributes: { type: "number", id: "inpPrice", name: "inpPrice", step: "0.01" },
              }
            ]
          }, {
            tag: `div`,
            attributes: { class: "inpDescriptionDiv" },
            nested: [
              {
                tag: `label`,
                text: `Description: `,
                attributes: { for: "npDescription" },
              }, {
                tag: `textarea`,
                attributes: { id: "npDescription", name: "npDescription" },
              }
            ]
          }, {
            tag: `div`,
            attributes: { class: "btnSubmitDiv" },
            nested: [
              {
                tag: `button`,
                text: `Add item`,
                attributes: { type: "submit" },
              }
            ]
          }
        ]
      }
    );
    newForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const [imageLink, city, price, description] = [
        e.target.elements.inpImageUrl.value,
        e.target.elements.inpCity.value,
        e.target.elements.inpPrice.value,
        e.target.elements.npDescription.value
      ];
      const newItem = {
        image: imageLink,
        city: city,
        price: price,
        description: description
      };
      uploadNewItem(newItem);
    });
    return newForm;
  }
}