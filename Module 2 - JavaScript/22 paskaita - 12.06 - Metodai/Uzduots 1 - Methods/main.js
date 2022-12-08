/* Number:
  1) Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją console() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas). */

let milkPrice = 1.35487;
const message = Number.isInteger(milkPrice) ?
  "Kaina - sveikasis skaičius. Centų nereikės." :
  "Centų reikės - kaina nėra sveikasis skaičius.";

console.log(message);


/* 2) Pakoreguok pirmą pratimą, kad console taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).*/

console.log(`Kaina: ${milkPrice.toFixed(2)} EUR ==>`, message);

/* 3) Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trimis skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).*/

// HTML
let container = document.querySelector(".container");

let section1 = document.createElement("section");
section1.classList.add("section1");
container.append(section1);

let form1 = document.createElement("form");
form1.classList.add("form1");
section1.append(form1);

let priceInputContainer = document.createElement("div");
priceInputContainer.classList.add("priceInputContainer");
form1.append(priceInputContainer);

let labelPrice = document.createElement("label");
labelPrice.setAttribute("for", "#inputPrice");
labelPrice.append(document.createTextNode("Price (EUR):"));
priceInputContainer.append(labelPrice);

let inputPrice = document.createElement("input");
inputPrice.setAttribute("type", "number");
inputPrice.setAttribute("id", "inputPrice");
inputPrice.setAttribute("name", "inputPrice");
inputPrice.setAttribute("step", "0.001");
priceInputContainer.append(inputPrice);

let fuelInputContainer = document.createElement("div");
fuelInputContainer.classList.add("fuelInputContainer");
form1.append(fuelInputContainer);

let labelFuel = document.createElement("label");
labelFuel.setAttribute("for", "#inputFuel");
labelFuel.append(document.createTextNode("Fuel (L):"));
fuelInputContainer.append(labelFuel);

let inputFuel = document.createElement("input");
inputFuel.setAttribute("type", "number");
inputFuel.setAttribute("id", "inputFuel");
inputFuel.setAttribute("name", "inputFuel");
inputFuel.setAttribute("step", "0.1");
fuelInputContainer.append(inputFuel);

let buttonCalcPrice = document.createElement("button");
buttonCalcPrice.classList.add("buttonCalcPrice");
buttonCalcPrice.setAttribute("type", "submit");
buttonCalcPrice.append(document.createTextNode("Calculate"));
form1.append(buttonCalcPrice);

let fullPriceContainer = document.createElement("h1");
fullPriceContainer.classList.add("answer_box");
section1.append(fullPriceContainer);


// Event
buttonCalcPrice.addEventListener("click", function (e) {
  e.preventDefault();
  fullPriceContainer.textContent = "";
  let result = Number(inputPrice.value) * Number(inputFuel.value);
  fullPriceContainer.textContent = `${result.toString()} EUR`;
});


// String:
//   1) Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - console). Jei sveikas, po apačia sukurk h1 elementą, kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

let section2 = document.createElement("section");
section2.classList.add("section2");
container.append(section2);

section2.innerHTML += `
<form class="form2">
<div><label for="userName">Your name:</label><input id="userName" name="userName" type="text"></div>
<div><label for="repetition">Number:</label><input type="number" id="repetition" name="repetition"></div>
<button class="buttonDisplayRep" type="submit">Display</button>
</form>
<h1 class="answer_box answ2"></h1>
`;

let buttonDisplayRep = document.querySelector(".buttonDisplayRep");
let answerRep = document.querySelector(".answ2");
let userName = document.querySelector("#userName");
let repetition = document.querySelector("#repetition");



buttonDisplayRep.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Veikia");
  answerRep.textContent = "";
  let rep = Number(repetition.value);
  let nameToRep = userName.value;

  if (Number.isInteger(rep)) {
    for (let i = 0; i < rep; i++) {
      answerRep.textContent += nameToRep + " ";
    }
  } else {
    answerRep.textContent = "Enter and a whole number.";
  }

});


//   2) Sukurk input, kur vartotojas įves savo vardą. Įvedus - console'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

let section3 = document.createElement("section");
section3.classList.add("section3");
container.append(section3);

section3.innerHTML += `
<form class="form3">
<div><label for="userName2">Your name:</label><input id="userName2" name="userName2" type="text"></div>
<button class="buttonLengthDisplay" type="submit">Display</button>
</form>
<h1 class="answer_box answ3"></h1>
`;

let buttonLengthDisplay = document.querySelector(".buttonLengthDisplay");
let answerLength = document.querySelector(".answ3");
let userName2 = document.querySelector("#userName2");



buttonLengthDisplay.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Veikia");
  answerLength.textContent = "";
  let nameToCount = userName2.value.trim();
  answerLength.textContent = `${nameToCount.length} characters`;
});

//   3) Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.

let section4 = document.createElement("section");
section4.classList.add("section4");
container.append(section4);

section4.innerHTML += `
<form class="form4">
<div><label for="userName3">Your name:</label><input id="userName3" name="userName3" type="text"></div>
<button class="buttonSplitNames" type="submit">Display</button>
</form>
`;

let buttonSplitNames = document.querySelector(".buttonSplitNames");
let userName3 = document.querySelector("#userName3");


buttonSplitNames.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Veikia-section4");
  let headings = section4.querySelectorAll("h1");
  if (headings.length !== 0) {
    headings[0].remove();
    headings[1].remove();
  }
  let nameSplit = userName3.value.trim().split(" ");
  let answ4 = document.createElement("h1");
  let answ5 = document.createElement("h1");
  answ4.classList.add("answer_box");
  answ5.classList.add("answer_box");
  answ4.textContent = nameSplit[0];
  let tekstas = array => {
    let str = "";
    for (let i = 1; i < nameSplit.length; i++) {
      str += nameSplit[i] + " ";
    }
    return str;
  };
  answ5.textContent = tekstas(nameSplit);

  section4.append(answ4);
  section4.append(answ5);
});

//   4) Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis. Jeigu žodžių daugiau negu du, tuomet antrąjį, trečiąjį ir visus likusius išvesti į antrąjį h1 laukelį.