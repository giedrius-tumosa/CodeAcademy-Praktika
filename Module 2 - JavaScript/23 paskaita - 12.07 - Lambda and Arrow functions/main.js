// 1) Parašykite lambda, kuri grąžina tekstą "Labas!".

console.groupCollapsed("1");

let text = (text) => console.log(text);
text("Labas");



console.groupEnd();

// 2) Parašykite lambda, kuri grąžina dviejų kintamųjų sudėtį.
console.groupCollapsed("2");

let sudetis = (num1, num2) => num1 + num2;
console.log(sudetis(1, 2));

console.groupEnd();

// 3) Parašykite lambda, kuri grąžina jai paduoto teksto ilgį.
console.groupCollapsed("3");

let textLength = (text) => text.length;
console.log(textLength("laba diena"));


console.groupEnd();

// 4) Parašykite lambda, kuri grąžina jai paduoto teksto pirmąją raidę.
console.groupCollapsed("4");

let firstChar = (text) => text.charAt(0);
console.log(firstChar("nauseda"));

console.groupEnd();

// 5) Parašykite lambda, kuri grąžina jai paduoto teksto paskutinę raidę.
console.groupCollapsed("5");

let lastChar = (text) => text.charAt(text.length - 1);
console.log(lastChar("nauseda"));

console.groupEnd();

// 6) Parašykite lambda, kuri grąžina jai paduoto skaičiaus kvadratą.
console.groupCollapsed("6");

let sqrd = (num) => num ** 2;
console.log(sqrd(4));

console.groupEnd();

// 7+) Parašykite lambda, kuri iš jai paduoto masyvo išveda visus kintamuosius į konsolę.

console.groupCollapsed("7");

let arrayToConsole = array => {
  for (let el of array) {
    console.log(el);
  }
};

arrayToConsole([1, 5, 2, 8, 10, 6]);
console.groupEnd();



// 8+) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas antrą kintamąjį į konsolę.

console.groupCollapsed("8");

let arrayEverySecond = array => {
  for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
  }
};
arrayEverySecond([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.groupEnd();

// 9++) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas kažkelintą (nurodytą) kintamąjį į konsolę.

console.groupCollapsed("9");

let arrayEveryNth = (array, step) => {
  for (let i = 0; i < array.length; i += step) {
    console.log(array[i]);
  }
};
arrayEveryNth([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);

console.groupEnd();



// 10+) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik lyginius skaičius.

console.groupCollapsed("10");

let arrayEveryEven = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);
    }
  }
};
arrayEveryEven([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.groupEnd();

// 11+) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik nelyginius skaičius.

console.groupCollapsed("11");

let arrayEveryOdd = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]);
    }
  }
};
arrayEveryOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.groupEnd();

// 12+) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius ilgesnius nei 3 simbolių.

console.groupCollapsed("12");

let textOverThreeChar = strArray => {
  strArray.forEach(el => {
    if (el.length > 3) {
      console.log(el);
    }
  });
};
textOverThreeChar(["labas", "tu", "jis", "namas"]);

console.groupEnd();

// 13++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie prasideda kažkokia (nurodyta) raide.

console.groupCollapsed("13");

let textStartsWith = (strArray, letter) => {
  strArray.forEach(el => {
    if (el[0].toLowerCase() === letter.toLowerCase()) {
      console.log(el);
    }
  });
};
textStartsWith(["labas", "tu", "jis", "namas", "laidas", "turkija"], "t");

console.groupEnd();


// 14+++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie yra ilgesni nei A, bet trumpesni nei B ir prasideda mažąja raide. (A - trumpiausias galimas žodžio ilgis, B - ilgiausias galimas žodžio ilgis).


console.groupCollapsed("14");

let strArray14 = (strArray, minLetters, maxLetters) => {
  strArray.forEach(el => {
    let hasMinLetters = el.length >= minLetters;
    let hasMaxLetters = el.length <= maxLetters;
    let startsLower = el[0].toLowerCase() === el[0];
    let validToPrint = hasMaxLetters && hasMinLetters && startsLower;

    if (validToPrint) {
      console.log(el);
    }
  });
};
strArray14(["labas", "tu", "jis", "Namas", "laidas", "turkija"], 3, 5);

console.groupEnd();




// 15+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais.

console.groupCollapsed("15");


let lamda15 = (array, minLength) => {
  let newArray = [];
  array.forEach(el => {
    if (typeof (el) === "string") {
      newArray.push(el);
    }
  });
  return newArray;
};
console.log(lamda15(["vienas", "du", "trys", 4, 5, true, false], 3));

console.groupEnd();



// 16++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie yra ilgesni nei A. (A - trumpiausias galimas žodžio ilgis).

console.groupCollapsed("16");

let lamda16 = (array, minLength) => {
  let newArray = [];
  array.forEach(el => {
    if (typeof (el) === "string" && el.length >= minLength) {
      newArray.push(el);
    }
  });
  return newArray;

};
console.log(lamda16(["vienas", "du", "trys", 4, 5, true, false], 3));


console.groupEnd();

// 17++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie prasideda didžiąja raide.

console.groupCollapsed("17");

let lamda17 = (array) => {
  let newArray = [];
  array.forEach(el => {
    if (typeof (el) === "string" && el[0].toUpperCase() === el[0]) {
      newArray.push(el);
    }
  });
  return newArray;
};
console.log(lamda17(["vienas", "du", "Trys", 4, 5, true, false]));

console.groupEnd();

// 18+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais.

console.groupCollapsed("18");

let lamda18 = (array) => {
  let newArray = [];
  array.forEach(el => {
    if (typeof (el) === "number") {
      newArray.push(el);
    }
  });
  return newArray;
};
console.log(lamda18(["vienas", "du", "Trys", 4, 5, true, false]));

console.groupEnd();


// 19+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A. (A - mažiausias galimas skaičius).

console.groupCollapsed("19");

let lamda19 = (array, minNum) => {
  let newArray = [];
  array.forEach(el => {
    if (typeof (el) === "number" && el >= minNum) {
      newArray.push(el);
    }
  });
  return newArray;
};
console.log(lamda19(["vienas", "du", "Trys", 4, 5, true, false, 100, 1], 5));

console.groupEnd();

// 20+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra mažesni negu A. (A - didžiausias galimas skaičius).

console.groupCollapsed("20");


let lamda20 = (array, maxNum) => {
  let newArray = [];
  array.forEach(el => {
    if (typeof (el) === "number" && el <= maxNum) {
      newArray.push(el);
    }
  });
  return newArray;
};
console.log(lamda20(["vienas", "du", "Trys", 4, 5, true, false, 100, 1], 5));

console.groupEnd();

// 21++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B. (A - mažiausias galimas skaičius, B - didžiausias galimas skaičius).

console.groupCollapsed("21");

let lamda21 = (array, minNum, maxNum) => {
  let newArray = [];
  array.forEach(el => {
    if (typeof (el) === "number" && el <= maxNum && el >= minNum) {
      newArray.push(el);
    }
  });
  return newArray;
};
console.log(lamda21(["vienas", "du", "Trys", 4, 5, true, 7, false, 100, 1], 5, 10));

console.groupEnd();

// 22+++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B ir lyginiai arba nelyginiai (lyginis - true, nelyginis - false) (arba galima priskirti raides, tarkim jei nori lyginių, parašai "l" kaip parametrą, jei nelyginių, parašai "n" kaip parametrą ir pns.)

console.groupCollapsed("22");

let lamda22 = (array, minNum, maxNum, oddOrEven) => {
  let newArray = [];

  array.forEach(el => {
    if (typeof (el) === "number" && el <= maxNum && el >= minNum) {

      switch (oddOrEven) {
        case "even":
          if (el % 2 === 0) {
            newArray.push(el);
          }
          break;
        case "odd":
          if (el % 2 !== 0) {
            newArray.push(el);
          }
          break;
        default:
          return "ERROR: wrong 3rd parameter.";
      }
    }
  });
  return newArray;
};

console.log(lamda22(["vienas", "du", "Trys", 4, 5, true, 7, false, 100, 1], 5, 10, "odd"));

console.groupEnd();




console.log("************************************************");
// ******************************************************




// Neiteracinių masyvų metodų užduotys:
//   1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.

console.groupCollapsed("Array 1");

let array1 = (array) => {
  return array.join(" "); //galima ir su .toString()
};

console.log(array1([1, 2, 3, 4, 5, 6]));

console.groupEnd();

//   2) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)

console.groupCollapsed("Array 2");

// let array2 = (array) => {
//   let reversed = [];
//   for (let i = 0; i < array.length; i++) {
//     reversed.unshift(array[i]);
//   }
//   return reversed;
// };

let array2 = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    array.splice(i, 0, array.shift());
  }
  return array;
};

console.log(array2([1, 2, 3, 4, 5, 6, 7, 8, 9]).join(" "));

console.groupEnd();

//   3) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius. (galima su forEach arba paprastu for)

console.groupCollapsed("Array 3");

let array3 = (array) => {
  let temp;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(array);
  return `Smallest: ${array[0]} | Largest ${array[array.length - 1]}`;
};

console.log(array3([1, 2, -100, 100, 4, -5, 6]));
console.groupEnd();

//   4) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.

console.groupCollapsed("Array 4");

let mas1 = ["a", "b", "c", "d", "e", "f"];
let mas2 = ["b", "d", "f", "g", "h"];


let array4 = (array1, array2) => {
  array2.forEach(el => {
    if (array1.includes(el)) {
      console.log(el);
    }
  });
};
array4(mas1, mas2);
console.groupEnd();

//   5) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])


console.groupCollapsed("Array 4");

let pirmas = ["a", "b", "c", "d", "e", "f"];
let antras = [0, 3, 4];

let array5 = (arrayInfo, arrayIndex) => {
  let newArray = [];
  arrayIndex.forEach(el => {
    newArray.push(arrayInfo.at(el));
  });
  return newArray;
};

console.log(array5(pirmas, antras).join(" "));

console.groupEnd();
