// 1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" parametrus.
//   1.1) Sukurkite papildomą parametrą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").
//   1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').

console.groupCollapsed("1:");

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.helloCar = `Hi, this car is ${this.name} and was manufactured in ${this.year}.`;
  }
  getAge() {
    return new Date().getFullYear() - this.year;
  }
}

const auto = [
  new Car("Volvo", 1985),
  new Car("Nissan", 2003),
  new Car("Volkswagen", 2015),
  new Car("Tesla", 2021),
  new Car("BMW", 1995)
];

console.log(auto);
auto.forEach(car => console.log(`${car.name} - ${car.getAge()} year(s) old`));

console.groupEnd();


// 2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus.
//   2.1) Sukurkite papildomą parametrą "color" ir priskirkite jam randomly parinktą spalvą.
//   2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
//   2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.



console.groupCollapsed("2:");

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return (this.width + this.height) * 2;
  }
}

let rectangles = [
  new Rectangle(100, 80),
  new Rectangle(200, 300),
  new Rectangle(20, 40),
  new Rectangle(70, 150),
];

rectangles.forEach(el => console.log(`AREA ${el.area()} PERIMETER ${el.perimeter()}`));


// let body = document.querySelector("body");
// rectangles.forEach(el => {
//   let div = document.createElement("div");
//   body.append(div);
//   div.style.width = `${el.width}px`;
//   div.style.height = `${el.height}px`;
//   div.style.background = el.color;
// });

console.groupEnd();



// 3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus.
//   3.1) Sukurkite metodą "coordinates", kuris grąžina "x" ir "y" reikšmes.(x;y)
//   3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).


console.groupCollapsed("3:");

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  coordinates() {
    return `(${this.x}, ${this.y})`;
  }
  distance(point) {
    return Math.hypot((this.x - point.x), (this.y - point.y));
  }
}

let point1 = new Point(2, 5);
let point2 = new Point(10, 20);

console.log(point1.distance(point2));



console.groupEnd();



// 4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", "height" ir "depth" parametrus.
//   4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
//   4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
//   4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.




console.groupCollapsed("4:");

class Rectangle_3D {
  constructor(width, height, depth) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }
  volume() {
    return this.width * this.height * this.depth;
  }
  surfaceArea() {
    // S=2(ab+ac+bc)
    return 2 *
      (this.width * this.height
        + this.width * this.depth
        + this.height * this.depth);
  }
  perimeter() {
    // P = 4(L+B+H)
    return 4 * (this.width + this.height + this.depth);
  }
}

console.groupEnd();




// 5+) Pabandyti sukurti UI (User Interface (Vartotojo Sąsaja)) 1-4 užduotims ir spausdinti informaciją į ekraną. (Kas nori pasižiūrėkite JS Canvas ir su juo pabandykite atvaizduoti figūras puslapyje(bent jau 2D))

let pageWrapper = document.querySelector(".wrapper");
let main = document.createElement("main");
pageWrapper.append(main);

let createSections = (number) => {
  for (let i = 0; i < number; i++) {
    let section = document.createElement("section");
    main.append(section);
    section.classList.add(`section${i + 1}`);

    let form = document.createElement("form");
    form.classList.add(`form${i + 1}`);

    let submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Generate");
    submitBtn.classList.add(`submitBtn${i + 1}`);
    form.append(submitBtn);

    let divOutput = document.createElement("div");
    divOutput.classList.add(`outputDiv${i + 1}`);

    section.append(form, divOutput);
  }
};

createSections(4);

// Section 1

let inputName = document.createElement("input");
let inputYear = document.createElement("input");
inputName.setAttribute("id", "inputName");
inputName.setAttribute("name", "inputName");
inputName.setAttribute("type", "text");
inputYear.setAttribute("id", "inputYear");
inputYear.setAttribute("name", "inputYear");
inputYear.setAttribute("type", "number");

let labelName = document.createElement("label");
let labelYear = document.createElement("label");
labelName.setAttribute("for", "inputName");
labelYear.setAttribute("for", "inputYear");
let text = document.createTextNode("Car name: ");
labelName.append(text);
text = document.createTextNode("Car year: ");
labelYear.append(text);

let divName = document.createElement("div");
let divYear = document.createElement("div");
divName.append(labelName, inputName);
divYear.append(labelYear, inputYear);

let form1 = document.querySelector(".form1");
form1.prepend(divName, divYear);

let outputDiv1 = document.querySelector(".outputDiv1");
let p1 = document.createElement("p");
outputDiv1.append(p1);

form1.addEventListener("submit", function (e) {
  e.preventDefault();
  p1.textContent = "";

  let [carName, carYear] = [
    e.target.elements.inputName.value,
    e.target.elements.inputYear.value
  ];
  if (!carName || !carYear) {
    return p1.textContent = `Enter correct data.`;
  }

  let newCar = new Car(carName, carYear);

  p1.textContent = `${newCar.helloCar} It is ${newCar.getAge()} years old.`;
});


// Section 2

let inputRecWidth = document.createElement("input");
let inputRecHeight = document.createElement("input");
inputRecWidth.setAttribute("id", "inputRecWidth");
inputRecWidth.setAttribute("name", "inputRecWidth");
inputRecWidth.setAttribute("type", "number");
inputRecWidth.setAttribute("step", 0.01);
inputRecHeight.setAttribute("id", "inputRecHeight");
inputRecHeight.setAttribute("name", "inputRecHeight");
inputRecHeight.setAttribute("type", "number");
inputRecHeight.setAttribute("step", 0.01);

let labelRecWidth = document.createElement("label");
let labelRecHeight = document.createElement("label");
labelRecWidth.setAttribute("for", "inputRecWidth");
labelRecHeight.setAttribute("for", "inputRecHeight");
text = document.createTextNode("Rectangle width: ");
labelRecWidth.append(text);
text = document.createTextNode("Rectangle height: ");
labelRecHeight.append(text);

let divRecWidth = document.createElement("div");
let divRecHeight = document.createElement("div");
divRecWidth.append(labelRecWidth, inputRecWidth);
divRecHeight.append(labelRecHeight, inputRecHeight);

let form2 = document.querySelector(".form2");
form2.prepend(divRecWidth, divRecHeight);

let outputDiv2 = document.querySelector(".outputDiv2");
let p2 = document.createElement("p");
outputDiv2.append(p2);


form2.addEventListener("submit", function (e) {
  e.preventDefault();
  outputDiv2.innerHTML = "";

  let [recWidth, recHeight, color] = [
    e.target.elements.inputRecWidth.value,
    e.target.elements.inputRecHeight.value
  ];

  let newRectangle = new Rectangle(recWidth, recHeight);

  p2.textContent = `Area: ${newRectangle.area()}
  Perimeter: ${newRectangle.perimeter()}`;

  let div = document.createElement("div");
  outputDiv2.append(div);
  div.style.width = `${newRectangle.width}px`;
  div.style.height = `${newRectangle.height}px`;
  div.style.background = newRectangle.color;
});


// Section 3

let inputX1 = document.createElement("input");
let inputY1 = document.createElement("input");
inputX1.setAttribute("id", "inputX1");
inputX1.setAttribute("name", "inputX1");
inputX1.setAttribute("type", "number");
inputY1.setAttribute("id", "inputY1");
inputY1.setAttribute("name", "inputY1");
inputY1.setAttribute("type", "number");

let labelX1 = document.createElement("label");
let labelY1 = document.createElement("label");
labelX1.setAttribute("for", "inputX1");
labelY1.setAttribute("for", "inputY1");
text = document.createTextNode("X1: ");
labelX1.append(text);
text = document.createTextNode("Y1: ");
labelY1.append(text);

let divX1 = document.createElement("div");
let divY1 = document.createElement("div");
divX1.append(labelX1, inputX1);
divY1.append(labelY1, inputY1);

let inputX2 = document.createElement("input");
let inputY2 = document.createElement("input");
inputX2.setAttribute("id", "inputX2");
inputX2.setAttribute("name", "inputX2");
inputX2.setAttribute("type", "number");
inputY2.setAttribute("id", "inputY2");
inputY2.setAttribute("name", "inputY2");
inputY2.setAttribute("type", "number");

let labelX2 = document.createElement("label");
let labelY2 = document.createElement("label");
labelX2.setAttribute("for", "inputX2");
labelY2.setAttribute("for", "inputY2");
text = document.createTextNode("X2: ");
labelX2.append(text);
text = document.createTextNode("Y2: ");
labelY2.append(text);

let divX2 = document.createElement("div");
let divY2 = document.createElement("div");
divX2.append(labelX2, inputX2);
divY2.append(labelY2, inputY2);


let form3 = document.querySelector(".form3");
form3.prepend(divX1, divY1, divX2, divY2);

const canvas = document.createElement("canvas");
canvas.setAttribute('width', '450');
canvas.setAttribute('height', '300');
const outputDiv3 = document.querySelector(".outputDiv3");
outputDiv3.append(canvas);
const ctx = canvas.getContext("2d");


let distanceText = document.createElement("p");
distanceText.classList.add("distance");
outputDiv3.prepend(distanceText);

form3.addEventListener("submit", function (e) {
  e.preventDefault();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  distanceText.textContent = "";

  let [x1, y1, x2, y2] = [
    e.target.elements.inputX1.value,
    e.target.elements.inputY1.value,
    e.target.elements.inputX2.value,
    e.target.elements.inputY2.value
  ];

  let firstPoint = new Point(x1, y1);
  let secondPoint = new Point(x2, y2);

  // Begin the path
  // ctx.fillStyle = `violet`;
  // ctx.fillRect(x1, y1, 5, 5);
  ctx.beginPath();
  ctx.arc(x1, y1, 2, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x2, y2, 2, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  // Starting point
  ctx.moveTo(x1, y1);
  // End point
  ctx.lineTo(x2, y2);
  // Stroke will make the line visible
  ctx.stroke();

  distanceText.append(document.createTextNode(`Point 1: ${firstPoint.coordinates()}, Point 2: ${secondPoint.coordinates()}
  Distance: ${firstPoint.distance(secondPoint).toFixed(2)}px`));


});

let zeroPoint = document.createElement("p");
outputDiv3.append(zeroPoint);
zeroPoint.append(document.createTextNode("0"));
zeroPoint.classList.add("zeroPoint");





