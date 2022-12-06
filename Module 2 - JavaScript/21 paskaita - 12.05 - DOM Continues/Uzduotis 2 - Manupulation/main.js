// 1) Naudodamiesi data[0] duomeninis atlikite šiuos veiksmus:
// 	1.1) JS'u sekcijoje sukurkite antraštę.
let mainSection1 = document.querySelector(".main_section1");
mainSection1.innerHTML += `<h2 class="heading1">${data[0].title}</h2>`;

// 	1.2) JS'u sekciją papildykite paragrafu su tekstu.

mainSection1.innerHTML += `<p class="para1">${data[0].paragraph}</p>`;

// 	1.3) JS'u sekciją papildykite paveikslėliu.
mainSection1.innerHTML += `
<img class="img1" src="${data[0].image}" alt="Mona Lisa painting." width="200" height="auto">
`;

// 	1.4) JS'u sekciją stilizuokite priskirdami klases.
let heading1 = document.querySelector(".heading1");
let para1 = document.querySelector(".para1");
let img1 = document.querySelector(".img1");

heading1.classList.add("heading-1");
heading1.classList.add("grid-col-span2");
mainSection1.classList.add("section-style");
mainSection1.classList.add("grid-1");


// 2) Naudodamiesi data[1] duomenimis atlikite šiuos veiksmus:
// 	2.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
let mainSection2 = document.querySelector(".main_section2");
mainSection2.innerHTML += `
<h2 class="heading-2">${data[1].title}</h2>
${create2(data, 1)}
`;

function create2(data, index) {
  let str = "";
  data[index].images.forEach(element => {
    str += `<img class="img2" src="${element}" alt="Picture." width="200" height="auto">
    `;
  });
  return str;
}

// 	2.2) JS'u sekciją stilizuokite priskirdami klases.

let heading2 = document.querySelector(".heading-2");
let images2 = document.querySelectorAll(".img2");

heading2.classList.add("heading-1");
mainSection2.classList.add("section-style2");

// 3) Naudodamiesi data[2] duomenimis atlikite šiuos veiksmus:
// 3.0) Sutvarkykite data[2] viduje esančius duomenis.
// 	3.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.;
// 3.2) JS'u sekciją papildykite paveiksliukų pavadinimais. (paveiksliukus ir jų pavadinimus laikyti atskiruose div'uose)
// 3.3) JS'u sekciją papildykite kiekvienam pavadinimui/paveiksliukui skirtais aprašymais.(paveiksliukus ir jų pavadinimus bei aprašymus laikyti atskiruose div'uose)
// 3.4) JS'u sekciją stilizuokite priskirdami klases.;

let mainSection3 = document.querySelector(".main_section3");

mainSection3.innerHTML += `
<h2 class="heading-1">${data[2].title}</h2>
<div class="article-list">${create3(data)}</div>
`;

function create3(data) {
  let str = "";
  data[2].articles.forEach(element => {
    str += `
    <article>
    <h4>${element.imagesTitle}</h4>
    <img class="img3" src="${element.image}" alt="Picture" width="200" height="auto">
    <p>${element.paragraph}</p>
    </article>
    `;
  });
  return str;
}

let heading3 = document.querySelectorAll("h4");
heading3.forEach(el => { el.classList.add("img-heading"); });

let articleList = document.querySelector(".article-list");
articleList.classList.add("grid-3");

document.querySelectorAll("article").forEach(el => el.classList.add("flex-col"));

// 4 extra)**********************************************

// Funkcija-fizz buzz
let mainSection4 = document.querySelector(".main_section4");

mainSection4.innerHTML += `
<div class="wrapper_fizz-buzz">
<h3>FIZZ BUZZ</h3>
<form action="" class="fizz-buzz">
<div class="number1-container">
  <label for="number1">Number 1</label>
  <input type="number" id="number1" name="number1">
</div>
<div class="">
  <label for="number2">Number 2</label>
  <input type="number" id="number2" name="number2">
</div>
<button class="btn-fbSubmit" type="submit">Submit</button>
</form>
<div class="fizzBuzzAnsw"></div>
</div>
`;


let fbSubmit = document.querySelector(".btn-fbSubmit");
let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let fbAnsw = document.querySelector(".fizzBuzzAnsw");
let bubblesFB = fbAnsw.childNodes;



function fizzBuzz(numStart, numEnd, element) {
  if (numStart > numEnd) {
    element.innerHTML += `First number must be smaller than the second.`;
  }
  for (let i = numStart; i <= numEnd; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      element.innerHTML += `<div><p>${i + "  FizzBuzz"}</p></div>`;
    } else if ((i % 3 === 0)) {
      element.innerHTML += `<div><p>${i + "  Fizz"}</p></div>`;
    } else if ((i % 5 === 0)) {
      element.innerHTML += `<div><p>${i + "  Buzz"}</p></div>`;
    } else {
      element.innerHTML += `<div><p>${i}</p></div>`;
    }
  }
}
fbSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  fbAnsw.innerHTML = "";
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  fizzBuzz(num1, num2, fbAnsw);
  if (!bubblesFB) {
    bubblesFB.forEach(el => {
      el.classList.add("bubbles");
    });
  }
});


// 5))) Funkcija - primary numbers

function primaryNums(numStart, numEnd, element) {

  let isPrimary;
  for (let i = numStart; i <= numEnd; i++) {

    if (Math.abs(i) < 3 && Math.abs(i) >= 0) { //Special numbers 0, 1, 2
      isPrimary = (Math.abs(i) === 2) ? true : false;
    } else {
      // Ar likutis ne 0, dalinant is 2...i-1
      for (let k = 2; k < Math.abs(i) - 1; k++) {
        if (i % k === 0) {
          isPrimary = false;
          break;
        } else {
          isPrimary = true;
        }
      }
    }
    // To console
    if (isPrimary) {
      element.innerHTML += `<div><p>${i}</p></div>`;
    }
  }
}


mainSection4.innerHTML += `
<div class="wrapper_primary-numbers">
<h3>PRIMARY NUMBERS</h3>
<form action="" class="primary-numbers">
<div class="numberOne-container">
  <label for="numberOne">Number 1</label>
  <input type="number" id="numberOne" name="numberOne">
</div>
<div class="numberTwo">
  <label for="numberTwo">Number 2</label>
  <input type="number" id="numberTwo" name="numberTwo">
</div>
<button class="btn-primeSubmit" type="submit">Submit</button>
</form>
<div class="primeAnsw"></div>
</div>
`;

let primeSubmit = document.querySelector(".btn-primeSubmit");
let numberOne = document.querySelector("#numberOne");
let numberTwo = document.querySelector("#numberTwo");
let primeAnsw = document.querySelector(".primeAnsw");
let bubblesPrime = primeAnsw.childNodes;


primeSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  primeAnsw.innerHTML = "";
  let num1 = Number(numberOne.value);
  let num2 = Number(numberTwo.value);
  primaryNums(num1, num2, primeAnsw);
  if (bubblesPrime) {
    bubblesPrime.forEach(el => {
      el.classList.add("bubbles");
    });
  }
});

STYLES;

fbAnsw.classList.add("flex-wrap");
primeAnsw.classList.add("flex-wrap");