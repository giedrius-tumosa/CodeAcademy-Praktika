const formSec = document.querySelector("#forma");
let form = document.createElement("form");
const saskaita = document.querySelector("#saskaita");
const mygtukuDiv = document.createElement("div");

mygtukuDiv.classList.add("buttonDiv");
form.append(mygtukuDiv);


let patiekaloSelektoSukurimas = (kelintas) => {
  let div = document.createElement("div");
  div.classList.add("patiekaloSelect");
  let select = document.createElement("select");
  select.setAttribute("name", "patiekalas" + kelintas);
  select.setAttribute("id", "patiekalas" + kelintas);

  menu.forEach(el => {
    let option = document.createElement("option");
    option.setAttribute("value", el.id);
    let tekstas = document.createTextNode(el.pavadinimas);
    option.append(tekstas);
    select.append(option);
  });

  let input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", "kiekis" + kelintas);
  input.setAttribute("id", "kiekis" + kelintas);
  input.setAttribute("min", "1");
  input.setAttribute("value", "1");

  div.append(select, input);
  form.append(div);
};


let addMoreMygtukoSukurimas = () => {
  let div = document.createElement("div");
  div.classList.add("addMoreDiv");
  let input = document.createElement('input');
  input.setAttribute("type", "button");
  input.setAttribute("value", "+");
  div.append(input);
  mygtukuDiv.append(div);
};

let mygtukoSukurimas = () => {
  let div = document.createElement("div");
  div.classList.add("submitDiv");
  let input = document.createElement('input');
  input.setAttribute("type", "submit");
  input.setAttribute("value", "Užsisakyti");
  div.append(input);
  mygtukuDiv.append(div);

};

addMoreMygtukoSukurimas();
mygtukoSukurimas();
let addMoreDiv;
setTimeout(
  () => {
    addMoreDiv = document.querySelector(".addMoreDiv");
    patiekaloSelektoSukurimas(document.querySelectorAll(".patiekaloSelect").length);
  }, 100
);


formSec.append(form);

// Saskaita
let gautiDabartiniLaika = () => {
  let date = new Date().toLocaleString("lt-LT");
  return date;
};



let saskaitosSukurimas = (prekes) => {

  let mainDiv = document.createElement("div");
  let p1 = document.createElement("p");
  p1.classList.add("date");
  let text = document.createTextNode(gautiDabartiniLaika());
  p1.append(text);
  mainDiv.append(p1);

  let h4 = document.createElement("h4");
  text = document.createTextNode(`"Kebabų Rojus", UAB`);
  h4.append(text);
  mainDiv.append(h4);

  let h1 = document.createElement("h1");
  text = document.createTextNode("Sąskaita");
  h1.append(text);
  mainDiv.append(h1);

  const hr = document.createElement("hr");
  mainDiv.append(hr);

  const ul = document.createElement("ul");
  mainDiv.append(ul);


  //ul start
  let bendraKaina = 0;

  prekes.forEach((preke, i) => {
    bendraKaina += preke.kaina * preke.kiekis;
    let li = document.createElement("li");
    let div = document.createElement("div");
    let p = document.createElement("p");
    text = document.createTextNode(`${i + 1}) ${preke.pavadinimas}`);
    p.append(text);
    div.append(p);
    let div2 = document.createElement('div');
    div2.classList.add("kiekisKaina");
    let span = document.createElement('span');
    text = document.createTextNode(`${preke.kiekis} vnt.`);
    span.append(text);
    div2.append(span);
    span = document.createElement('span');
    text = document.createTextNode(`${preke.kaina * preke.kiekis} Eur`);
    span.append(text);
    div2.append(span);
    li.append(div);
    li.append(div2);
    ul.append(li);
  });

  // ul end

  const hr2 = document.createElement("hr");
  mainDiv.append(hr2);

  p2 = document.createElement("p");
  p2.classList.add("bendraKaina");
  text = document.createTextNode(`Galutinė kaina: ${bendraKaina.toFixed(2)} Eur`);
  p2.append(text);
  mainDiv.append(p2);

  const hr3 = document.createElement("hr");
  mainDiv.append(hr3);

  let h2 = document.createElement("h2");
  text = document.createTextNode("Ačiū, kad renkatės mus!");
  h2.append(text);
  mainDiv.append(h2);

  saskaita.append(mainDiv);

};


document
  .querySelector("#forma > form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let uzsakymuMasyvas = [];
    for (let i = 2; i < (e.target.elements.length); i += 2) {
      let [patiekaloID, patiekaloKiekis] = [
        e.target.elements[i].value,
        e.target.elements[i + 1].value
      ];
      let pateikiamaPreke = menu.find(el => el.id === patiekaloID);
      pateikiamaPreke.kiekis = patiekaloKiekis;
      uzsakymuMasyvas.push(pateikiamaPreke);
    }

    saskaitosSukurimas(uzsakymuMasyvas);
  });

document
  .querySelector(".addMoreDiv > input")
  .addEventListener("click", function (e) {
    e.preventDefault();
    patiekaloSelektoSukurimas(document.querySelectorAll(".patiekaloSelect").length);

  });


// Menu

const menuSec = document.querySelector("#menu");

let menuSukurimas = () => {
  menu.forEach(item => {
    let [patiekaloKortele, pavadinimas, sudetis, kaina] = [
      document.createElement("article"),
      document.createElement("h4"),
      document.createElement("p"),
      document.createElement("p")
    ];
    patiekaloKortele.append(pavadinimas, sudetis, kaina);
    let text = document.createTextNode(item.pavadinimas);
    pavadinimas.append(text);
    text = document.createTextNode(item.sudetis.join(`, `));
    sudetis.append(text);
    text = document.createTextNode(`${item.kaina} Eur`);
    kaina.append(text);
    menuSec.append(patiekaloKortele);
  });
};

menuSukurimas();