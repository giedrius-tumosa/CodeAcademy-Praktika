// 1) Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname.
//   1.1) JavaScripte pasirašykite klasę su konstruktoriumi, kuris turės vardą ir pavardę. Metodą - atsirasti lentelėje.
//   1.2) Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization).
//   1.3) Sukurkite objektą naudojant Klasę.
//   1.4) Galiausiai iškvieskite metodą, kad pridėtų į lentelę.
//   Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje esančioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

class User {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
  getFirstName() {
    return this.#firstName;
  }
  getLastName() {
    return this.#lastName;
  }
  insertToTable() {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    row.append(td1, td2);
    let tbody = document.querySelector("#nameTable tbody");
    tbody.append(row);
    let text = document.createTextNode(this.#firstName);
    td1.append(text);
    text = document.createTextNode(this.#lastName);
    td2.append(text);
  }
}

// Event

const form1 = document.querySelector("#form1");
let users = [];

form1.addEventListener("submit", function (e) {
  e.preventDefault();
  let [firstName, lastName] = e.target.elements.fullName.value
    .trim()
    .split(" ")
    .map(el => el[0].toUpperCase() + el.toLowerCase().slice(1));

  const newUser = new User(firstName, lastName);
  users.push(newUser);

  newUser.insertToTable();

});

// ********************************************************************************

// 2) Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis).
//   2.1) Per Klasę, sukuriamas objektas ir jis atvaizduojamas po forma (CSS'ą rašykite CSS'e) kaip atvaizduota nuotraukoje (./images/cars.PNG).
//   3.1) Paspaudus ant automobilio bloko - turi alert išmesti kainą ir mileage. (gal su CSS'u gražiai padaryti, kad užėjus ant elemento su pele, atsiranda laukelis nuotraukoje...)

class Car {
  #brand;
  #model;
  #mileage;
  #price;
  #imgUrl;
  constructor(brand, model, mileage, price, imgUrl) {
    // this.#brand = brand;
    // this.#model = model;
    // this.#mileage = mileage;
    // this.#price = price;
    // this.#imgUrl = imgUrl;

    [this.#brand, this.#model, this.#mileage, this.#price, this.#imgUrl] = [brand, model, mileage, price, imgUrl];
  }

  getBrand() {
    return this.#brand;
  }
  getModel() {
    return this.#model;
  }
  getMileage() {
    return this.#mileage;
  }
  getPrice() {
    return this.#price;
  }
  getImgUrl() {
    return this.#imgUrl;
  }

}

const form2 = document.querySelector("#form2");

form2.addEventListener("submit", function (e) {
  e.preventDefault();
  let [brand, model, mileage, price, imgUrl] = [
    e.target.elements.carBrandInput.value,
    e.target.elements.carModelInput.value,
    e.target.elements.carMileageInput.value,
    e.target.elements.carPriceInput.value,
    e.target.elements.carImageInput.value,
  ];
  const out2 = document.querySelector('.out2');
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("carDiv");
  const figure = document.createElement("figure");
  cardDiv.append(figure);
  const carImg = document.createElement("img");
  carImg.setAttribute("src", imgUrl);
  carImg.setAttribute("width", 200);
  carImg.setAttribute("height", "auto");
  carImg.setAttribute("alt", "Car image.");
  const carDescription = document.createElement("p");
  carDescription.classList.add("carDescription");
  let text = document.createTextNode(`${brand} ${model}`);
  carDescription.append(text);
  figure.append(carImg);
  cardDiv.append(carDescription);
  out2.append(cardDiv);

  const carInfo = document.createElement('div');
  carInfo.classList.add('carInfo');
  const pInfo = document.createElement('p');
  pInfo.classList.add('pInfo');
  text = document.createTextNode(`Price: ${price}€ | Mileage: ${mileage}km`);
  pInfo.append(text);
  carInfo.append(pInfo);
  figure.append(carInfo);

});