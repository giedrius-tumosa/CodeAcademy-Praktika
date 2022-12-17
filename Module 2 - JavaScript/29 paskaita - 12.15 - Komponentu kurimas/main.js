// Select
import Element from "./classes.js";

const card = new Element(
  {
    tag: "article",
    nested: [
      {
        tag: "h2",
        text: "Choose your movie!",
        attributes: { class: "articleTitle" }
      },
      {
        tag: "form",
        attributes: { class: "movieForm" },
        nested: [
          {//Select
            tag: "select",
            attributes: { id: "movies", name: "movies" },
            nested: [
              {
                tag: "option",
                text: "Doctor Strange",
                attributes: { value: "Doctor Strange" }
              },
              {
                tag: "option",
                text: "Dune",
                attributes: { value: "Dune" }
              },
              {
                tag: "option",
                text: "Avatar",
                attributes: { value: "Avatar" }
              },
              {
                tag: "option",
                text: "Black Panther",
                attributes: { value: "Black Panther" }
              },
              {
                tag: "option",
                text: "Jaws",
                attributes: { value: "Jaws" }
              },
              {
                tag: "option",
                text: "Prestige",
                attributes: { value: "Prestige" }
              }
            ]
          },
          {
            tag: "button",
            text: "Add movie",
            attributes: { type: "submit" }
          }
        ]
      }

    ]
  }
);

document.querySelector("main").append(card);

// document.querySelector("main").classList.add("center");
document.querySelector("body").classList.add("center");
document.querySelector("article").classList.add("center");
document.querySelector("form").classList.add("center");


// Table

// const table = new Element(
//   {
//     tag: "table",
//     attributes: { class: "table" },
//     nested: [
//       {
//         tag: "thead",
//         nested: [
//           {
//             tag: "tr",
//             nested: [{ tag: "th" }],
//             nestedCount: 2
//           }
//         ]
//       },
//       {
//         tag: "tbody",
//         nested: [
//           {
//             tag: "tr",
//             nested: [{ tag: "td" }],
//             nestedCount: 2
//           }
//         ]
//       }
//     ]
//   }
// );

const movieTable = new Element(
  {
    tag: `div`,
    attributes: { class: "tableDiv" },
    nested: [
      {
        tag: `table`,
        attributes: { class: "movieTable" },
        nested: [
          {
            tag: `thead`,
            nested: [
              {
                tag: `tr`,
                nested: [
                  {
                    tag: `th`,
                    text: "Selected movies:"
                  }
                ]
              }
            ]
          },
          {
            tag: `tbody`,
            nested: []
          }
        ]
      }
    ]
  }
);

document.querySelector("main").append(movieTable);

let form1 = document.querySelector(".movieForm");

form1.addEventListener("submit", function (e) {
  e.preventDefault();
  const moviesSlected = document.querySelectorAll(".movieTable td");
  if (moviesSlected.length < 6) {
    const selectedMovie = e.target.elements.movies.value;
    const tbody = document.querySelector(".movieTable tbody");
    const tableCell = new Element(
      {
        tag: `tr`,
        nested: [
          {
            tag: `td`,
            text: `${selectedMovie}`,
          }
        ]
      }
    );
    tbody.append(tableCell);
  }

});

let cities = [
  { name: `Vilnius`, country: `Lithuania`, continent: `Europe` },
  { name: `New York`, country: `USA`, continent: `North America` },
  { name: `Lima`, country: `Peru`, continent: `South America` },
  { name: `Seul`, country: `South Korea`, continent: `Asia` }
];

// PABAIGTI 
let cityTable = new Element(
  {
    tag: `table`,
    nested: [
      {
        tag: `thead`,
        nested: [
          cities.forEach(el => {

          })
        ]
      }
    ]
  }
);
