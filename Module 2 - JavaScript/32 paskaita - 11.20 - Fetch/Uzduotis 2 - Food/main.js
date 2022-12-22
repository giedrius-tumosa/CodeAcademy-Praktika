import Element from "./Element.js";

// Sukuriam main ir dvi html sekcijas

const app = document.querySelector("#app");
const main = new Element(
  {
    tag: `main`,
    attributes: { class: "appMain" },
  }
);
const sectionMeals = new Element(
  {
    tag: `section`,
    attributes: { class: "sectionMeals" },
  }
);
const sectionSearch = new Element(
  {
    tag: `section`,
    attributes: { class: "sectionSearch" },
  }
);
app.append(main);
main.append(sectionSearch, sectionMeals);


// Sukuriam forma

const mealSearchForm = new Element(
  {
    tag: `form`,
    attributes: { class: "mealSearchForm" },
    nested: [
      { //Main meal ingredient search div
        tag: `div`,
        attributes: { class: "mealIngredientSearchDiv" },
        nested: [
          {
            tag: `label`,
            text: `Meal ingredient: `,
            attributes: { for: "inptMealIngredient" },
          },
          {
            tag: `input`,
            attributes: { type: "text", id: "inptMealIngredient", name: "inptMealIngredient" },
          }
        ]
      },
      {
        tag: `button`,
        text: `Search`,
        attributes: { type: "submit", class: "btnMealSearch" },
      }
    ]
  }
);

sectionSearch.append(mealSearchForm);

// Sukuriam vieta outputui

const mealResultsDisplay = new Element(
  {
    tag: `div`,
    attributes: { class: "mealResultsDisplayDiv" },
  }
);
sectionMeals.append(mealResultsDisplay);

// Sukuriam pirmine meal card creation f-tion

const createMealCard = async (data) => {
  return new Element(
    {
      tag: `article`,
      attributes: { class: "meal_card", id: `id${data.idMeal}` },
      nested: [
        { //CARD HEADER
          tag: `header`,
          attributes: { class: "card_header" },
          nested: [
            {//meal pic
              tag: `figure`,
              attributes: {},
              nested: [
                {
                  tag: `img`,
                  attributes: { src: `${data.strMealThumb}`, width: "200", height: "auto", alt: `${data.strMeal} picture.` }, //meal picture link
                  nested: []
                }
              ]
            }
          ]
        },
        { //CARD MAIN
          tag: `main`,
          attributes: { class: "card_main" },
          nested: [
            {
              tag: `div`,
              attributes: { class: "meal_description" },
              nested: [
                { //meal name
                  tag: `h4`,
                  text: `${data.strMeal}`, //meal name
                  attributes: { class: "meal_name" },
                }
              ]
            }
          ]
        }
      ]
    }
  );
};

// Sukuriam papildomos info elementa, atsirasianti paspaudus ant korteles
const createMealDetails = async (data) => {

  const [ingredients, ingredientMeasures] = [
    Object.keys(data)
      .filter(el => el.includes("strIngredient") && data[el])
      .map(el => data[el]),
    Object.keys(data)
      .filter(el => el.includes("strMeasure") && data[el])
      .map(el => data[el])
  ];

  const ingredientListElement = (ingredients, ingredientMeasures) => {
    const ul = new Element({ tag: `ul` });
    ingredients.forEach((el, i) => {
      const li = new Element(
        {
          tag: `li`,
          nested: [
            {
              tag: `span`,
              text: `${el}`,
            },
            {
              tag: `span`,
              text: `${ingredientMeasures[i]}`,
            }
          ]
        }
      );
      ul.append(li);
    });
    return ul;
  };

  const mealDetails = new Element(
    {// meal other info
      tag: `div`,
      attributes: { class: "meal_other_info" },
      nested: [
        { //ingredients
          tag: `p`,
          attributes: { class: "meal_ingredients" },
          nested: [
            {
              tag: `p`,
              text: `Ingredients: `,
              attributes: { class: "subHeading" },
            },
            {
              tag: `p`,
            }
          ]
        },
        { //recipe
          tag: `p`,
          attributes: { class: "meal_recipe" },
          nested: [
            {
              tag: `p`,
              text: `Recipe: `,
              attributes: { class: "subHeading" },
            },
            {
              tag: `p`,
              text: `${data.strInstructions}`,
            }
          ]
        }
        // { //video error Cross-Origin Read Blocking (CORB) blocked cross-origin
        //   tag: `video`,
        //   text: `Video is not available`, //meal video
        //   attributes: { class: "meal_video", width: "320", height: "240" },
        //   nested: [
        //     {
        //       tag: `source`,
        //       attributes: { src: `${data.strYoutube}` },
        //     }
        //   ]
        // }
      ]
    }
  );

  // mealDetails.prepend(
  //   ingredientListElement(ingredients, ingredientMeasures)
  // );

  mealDetails
    .querySelector(".meal_ingredients")
    .append(
      ingredientListElement(ingredients, ingredientMeasures)
    );

  return mealDetails;
};

const cardClickEvent = (card) => {
  card.addEventListener("click", (e) => {
    if (card.querySelector(".meal_other_info")) {
      card.querySelector(".meal_other_info").remove();
      card.classList.remove("rise-above");
      document.querySelector(".blur-overlay").remove();
      app.classList.remove("blocked-scrolling");
    } else {
      fetchMealByID(card.id.slice(2));
      card.classList.add("rise-above");
      const blurOverlayBox = document.createElement("div");
      blurOverlayBox.classList.add("blur-overlay");
      app.append(blurOverlayBox);
      app.classList.add("blocked-scrolling");
    }

  });
};

// Fetchinam

// pirma su vienu zodziu, po to padaryti su keliais
const fetchMealByIngredient = (ingredient) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(res => res.json())
    .then(data => {
      data.meals.forEach(meal => createMealCard(meal)
        .then(card => { mealResultsDisplay.append(card); return card; })
        .then(card => cardClickEvent(card)));
    }).catch(() => {
      const paragraph = document.createElement("p");
      const errorMsg = document.createTextNode("CANNOT FIND REQUESTED MEAL");
      paragraph.append(errorMsg);
      mealResultsDisplay.append(paragraph);
    });
};

const fetchMealByID = (mealID) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(data => createMealDetails(data.meals[0]))
    .then(details => {
      const cardMain = mealResultsDisplay.querySelector(`#id${mealID} .card_main`);
      cardMain.append(details);
    })
    .catch(() => {
      const paragraph = document.createElement("p");
      const errorMsg = document.createTextNode("CANNOT FIND REQUESTED MEAL");
      paragraph.append(errorMsg);
      mealResultsDisplay.append(paragraph);
    });
};

// Formos submit eventas

mealSearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Reset
  while (mealResultsDisplay.firstElementChild) {
    mealResultsDisplay.removeChild(mealResultsDisplay.firstElementChild);
  }
  const inputMealIngrediant = e.target.elements.inptMealIngredient.value
    .trim();

  if (inputMealIngrediant) {
    fetchMealByIngredient(inputMealIngrediant);
  } else {
    const paragraph = document.createElement("p");
    const errorMsg = document.createTextNode("INVALID MEAL INPUT");
    paragraph.append(errorMsg);
    mealResultsDisplay.append(paragraph);
  }
});


