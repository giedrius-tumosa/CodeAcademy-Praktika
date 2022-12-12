const formSec = document.querySelector("#forma");

let form = document.createElement("form");


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
  form.append(div);
};

let mygtukoSukurimas = () => {
  let div = document.createElement("div");
  div.classList.add("submitDiv");
  let input = document.createElement('input');
  input.setAttribute("type", "submit");
  input.setAttribute("value", "Užsisakyti");
  div.append(input);
  form.append(div);
};

addMoreMygtukoSukurimas();
let addMoreDiv;
setTimeout(
  () => {
    addMoreDiv = document.querySelector(".addMoreDiv");
    patiekaloSelektoSukurimas(document.querySelectorAll(".patiekaloSelect").length);
    mygtukoSukurimas();
  }, 100
);


formSec.append(form);

// Saskaita
let gautiDabartiniLaika = () => {
  let date = new Date().toLocaleString("lt-LT");
  // let date = new Date().toISOString();
  // date = date.replace("T", " ");
  // date = date.slice(0, date.indexOf(" ") + 1);
  return date;
};

const saskaita = document.querySelector("#saskaita");

let saskaitosSukurimas = (preke) => {

  let mainDiv = document.createElement("div");
  let p1 = document.createElement("p");
  p1.classList.add("date");
  let text = document.createTextNode(gautiDabartiniLaika());
  p1.append(text);
  mainDiv.append(p1);

  let h4 = document.createElement("h4");
  text = document.createTextNode("Įmonės pavadinimas");
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
  let li = document.createElement("li");
  let div = document.createElement("div");
  let p = document.createElement("p");
  text = document.createTextNode(`${preke.pavadinimas}:`);
  p.append(text);
  div.append(p);
  let div2 = document.createElement('div');
  div2.classList.add("kiekisKaina");
  let span = document.createElement('span');
  text = document.createTextNode(`kiekis: ${preke.kiekis}`);
  span.append(text);
  div2.append(span);
  span = document.createElement('span');
  text = document.createTextNode(`${preke.kaina * preke.kiekis} Eur`);
  span.append(text);
  div2.append(span);
  li.append(div);
  li.append(div2);

  ul.append(li);



  // ul end

  const hr2 = document.createElement("hr");
  mainDiv.append(hr2);

  p2 = document.createElement("p");
  p2.classList.add("bendraKaina");
  text = document.createTextNode("bendraKaina");
  p2.append(text);
  mainDiv.append(p2);

  const hr3 = document.createElement("hr");
  mainDiv.append(hr3);

  let h2 = document.createElement("h2");
  text = document.createTextNode("Padėkojimas");
  h2.append(text);
  mainDiv.append(h2);

  saskaita.append(mainDiv);

};


document
  .querySelector("#forma > form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let [patiekaloID, patiekaloKiekis] = [
      e.target.elements.patiekalas.value,
      e.target.elements.kiekis.value
    ];
    let pateikiamaPreke = menu.find(el => el.id === patiekaloID);
    pateikiamaPreke.kiekis = patiekaloKiekis;

    saskaitosSukurimas(pateikiamaPreke);

  });

document
  .querySelector(".addMoreDiv > input")
  .addEventListener("click", function (e) {
    e.preventDefault();
    patiekaloSelektoSukurimas(document.querySelectorAll(".patiekaloSelect").length);

  });