import Element from "./Element.js";


export default class ItemCard {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    const newItemCard = new Element(
      {
        tag: `article`,
        attributes: { class: "itemCard" },
        nested: [
          {
            tag: `figure`,
            nested: [
              {
                tag: `img`,
                attributes: { src: `${this.props.image}`, width: "200", height: "auto" },
              }
            ]
          }, {
            tag: `div`,
            attributes: { class: "itemInfo" },
            nested: [
              {
                tag: `div`,
                attributes: { class: "cityPriceDiv" },
                nested: [
                  {
                    tag: `span`,
                    text: `${this.props.city}`,
                    attributes: { class: "itemCity" },
                  }, {
                    tag: `span`,
                    text: `${this.props.price} €`,
                    attributes: { class: "itemPrice" },
                  }
                ]
              }, {
                tag: `p`,
                text: `${this.props.description}`,
                attributes: { class: "itemDescription" }
              }
            ]
          }
        ]
      }
    );
    return newItemCard;
  }
}