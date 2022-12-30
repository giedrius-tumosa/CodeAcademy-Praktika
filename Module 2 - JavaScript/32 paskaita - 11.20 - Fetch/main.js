import Element from "./Element.js";


const create_movie_card = (data) => {
  return new Element(
    {
      tag: `article`,
      attributes: { class: "movie_card" },
      nested: [
        {
          tag: `figure`,
          attributes: {},
          nested: [
            {
              tag: `img`,
              attributes: { src: `${data.posterLink}`, width: "200", height: "auto" },
            }
          ]
        },
        {
          tag: `div`,
          attributes: { class: "movie_info" },
          nested: [
            {
              tag: `h3`,
              text: `${data.title}`,
              attributes: { class: "movie_title" },
            },
            {
              tag: `p`,
              attributes: { class: "movie_duration" },
              nested: [
                {
                  tag: `span`,
                  text: `Duration: `,
                  attributes: { class: "font-bold" }
                },
                {
                  tag: `span`,
                  text: `${data.duration}`,
                }
              ]
            },
            {
              tag: `p`,
              attributes: { class: "movie_cast" },
              nested: [
                {
                  tag: `span`,
                  text: `Cast: `,
                  attributes: { class: "font-bold" }
                },
                {
                  tag: `span`,
                  text: `${data.actors.join(", ")}`,
                }
              ]
            }
          ]
        }
      ]
    }
  );
};
const body = document.querySelector("body");

const section_movies = new Element(
  {
    tag: `section`,
    attributes: { class: "movie_section" },
  }
);
body.append(section_movies);

fetch("./data/movies.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(el => section_movies.append(create_movie_card(el)));
  });



fetch("./data/data.txt")
  .then(resp => resp.text())
  .then(data => {
    console.log(data.split(/\r?\n/));
  });