const arrayNumbers = [8, 1, 2, 200, 3, 100, 5, 4, 7, 300];
const arrayStrings = ["Vilnius", "Kaunas", "Klaipėda", "Panevėžys"];
const arrayMixed = ["Vilnius", "Kaunas", "Klaipėda", "Panevėžys", 1, 2, 3, 5, 4, 8, 7, 100, 200, 300, false, true];

// 1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.

console.groupCollapsed("1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.");



for (el of arrayNumbers) {
  console.log(el);
}

console.groupEnd();


// 2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.


console.groupCollapsed("2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.");

for (let i = 0; i < arrayNumbers.length; i += 3) {
  console.log(arrayNumbers[i]);
}

console.groupEnd();

// 3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.

console.groupCollapsed("3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.");

let nthNumber = (step, array) => {
  for (let i = 0; i < array.length; i += step) {
    console.log(array[i]);
  }
};

nthNumber(3, arrayMixed);

console.groupEnd();


// 4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.


console.groupCollapsed("4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.");

for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] > 54) {
    console.log(arrayNumbers[i]);
  }
}

console.groupEnd();

// 5) Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide.

console.groupCollapsed("5) Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide.");

let firstLetter = (letter, array) => {
  for (let el of array) {
    if (el[0].toLowerCase() === letter.toLowerCase()) {
      console.log(el);
    }
  }
};
firstLetter("K", arrayStrings);
console.groupEnd();


// 6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka. (tik su string ir tik su numbers (2ciklus)).

console.groupCollapsed("6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka. (tik su string ir tik su numbers (2ciklus)).");

let sortNumbers = (array) => {
  array.sort((a, b) => a - b);
  console.log(array);
};

let sortStrings = (array) => {
  array.sort((a, b) => { return a.localeCompare(b); });
  console.log(array);
};

sortNumbers(arrayNumbers);
sortStrings(arrayStrings);


console.groupEnd();


// 7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje.

console.groupCollapsed("7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje.");

let sortEvenNums = (array) => {
  const evenNums = [];
  for (let el of array) {
    el % 2 === 0 && evenNums.push(el);
  }
  evenNums.sort((a, b) => b - a);
  console.log(evenNums);
};

sortEvenNums(arrayNumbers);

console.groupEnd();