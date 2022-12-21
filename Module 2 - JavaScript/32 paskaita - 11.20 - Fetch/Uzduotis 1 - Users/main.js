import Element from "./Element.js";

const body = document.querySelector("body");
const sectionUsers = new Element(
  {
    tag: `section`,
    attributes: { class: "section_users" },
  }
);
body.append(sectionUsers);

const createUserCard = async (data) => {
  return new Element(
    {
      tag: `article`,
      attributes: { class: "user_card" },
      nested: [
        { //CARD HEADER
          tag: `header`,
          attributes: { class: "card_header" },
          nested: [
            {//profile pic
              tag: `figure`,
              attributes: {},
              nested: [
                {
                  tag: `img`,
                  attributes: { src: `${data.results[0].picture.large}` }, //user picture link
                  nested: []
                }
              ]
            },
            {
              tag: `span`,
              text: `refresh`,
              attributes: { class: "btn_refresh material-symbols-outlined" },
            }
          ]
        },
        { //CARD MAIN
          tag: `main`,
          attributes: { class: "card_main" },
          nested: [
            {
              tag: `div`,
              attributes: { class: "user_info" },
              nested: [
                {
                  tag: `h4`,
                  text: `${Object.values(data.results[0].name).join(" ")}`, //user name
                  attributes: { class: "user_name" },
                },
                { //COUNTRY
                  tag: `p`,
                  attributes: { class: "user_country" },
                  nested: [
                    {
                      tag: `span`,
                      text: `Country: `,
                      attributes: { class: "text-bold" },
                    },
                    {
                      tag: `span`,
                      text: `${data.results[0].location.country}`,
                    }
                  ]
                },
                { //AGE
                  tag: `p`,
                  attributes: { class: "user_age" },
                  nested: [
                    {
                      tag: `span`,
                      text: `Age: `,
                      attributes: { class: "text-bold" },
                    },
                    {
                      tag: `span`,
                      text: `${data.results[0].dob.age}`,
                    }
                  ]
                },
                { //REGISTRATION YEAR
                  tag: `p`,
                  text: ``, //user registration year
                  attributes: { class: "user_registration_year" },
                  nested: [
                    {
                      tag: `span`,
                      text: `Registered in: `,
                      attributes: { class: "text-bold" },
                    },
                    {
                      tag: `span`,
                      text: `${data.results[0].registered.date.slice(0, 4)}`,
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
};

const fetchOnReload = () => {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      createUserCard(data)
        .then(card => {
          while (sectionUsers.firstElementChild) {
            sectionUsers.removeChild(sectionUsers.firstElementChild);
          }
          sectionUsers.append(card);
        })
        .finally(() => btnRefreshEvent());
    });
};

const btnRefreshEvent = () => {
  const btnRefresh = document.querySelector(".btn_refresh");
  btnRefresh.addEventListener('click', (e) => {
    fetchOnReload();
  });
};


fetchOnReload();



// Refresh mygtuko funkcionaluma pabaigti!!!!!!!!!!