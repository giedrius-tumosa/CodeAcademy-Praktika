import Element from "./Element.js";

export default class Modal {
  constructor() {
    return this.render();
  }

  render() {
    const modalBackground = new Element(
      {
        tag: `div`,
        attributes: { class: "modal-bg" },
      }
    );
    const modalContentBox = new Element(
      {
        tag: `div`,
        attributes: { class: "modal-content-box" },
        nested: [
          {
            tag: `button`,
            text: `Exit`,
            attributes: { type: "button", class: "modalExitBtn" },
          }
        ]
      }
    );
    document.querySelector("#app").classList.add("blocked-scrolling");
    modalContentBox.querySelector(".modalExitBtn").addEventListener("click", () => {
      modalContentBox.remove();
      modalBackground.remove();
      document.querySelector("#app").classList.remove("blocked-scrolling");
    });

    document.querySelector("#app").append(modalBackground, modalContentBox);
    return modalContentBox;
  }
}

