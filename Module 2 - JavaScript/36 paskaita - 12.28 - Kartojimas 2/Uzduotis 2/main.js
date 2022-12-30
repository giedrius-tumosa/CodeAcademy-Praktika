const numberArray = [9, 8, 50, 300, 2, 15, 64, 25, 154];
const stringArray = ["vienas", "Du", "trys", "Keturi"];

// 1) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra didenis už A (A - funkcijos parametras skaičius).

console.groupCollapsed("// 1) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra didenis už A (A - funkcijos parametras skaičius).");


let func1 = (array, number) => {
  if (!(array && number)) return "no args";
  return array.indexOf(array.find(el => el > number));
};

console.log(func1(numberArray, 5));



console.groupEnd();

// 2) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A (A - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 3) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda mažąja raide.

console.groupCollapsed("// 3) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda mažąja raide.");


let func3 = (array) => array.indexOf(array.find(el => el[0] === el[0].toLowerCase()));

console.log(func3(stringArray));



console.groupEnd();

// 4) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja raide.

console.groupCollapsed();








console.groupEnd();

// 5+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 6++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

console.groupCollapsed("// 6++)");

let func6 = (array, isUpperCase, minChars, maxChars) => {
  const withinLength = (el) => el.length > minChars && el.length < maxChars;
  if (isUpperCase) {
    return array
      .indexOf(array.find(el => el[0] === el[0].toUpperCase() && withinLength(el)));
  }
  return array
    .indexOf(array.find(el => el[0] === el[0].toLowerCase() && withinLength(el)));
};

console.log(func6(stringArray, true, 0, 5));






console.groupEnd();

// 7) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra didenis už A (A - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 8) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A (A - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 9) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda mažąja raide.

console.groupCollapsed();








console.groupEnd();

// 10) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja raide.

console.groupCollapsed();








console.groupEnd();

// 11+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 12++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 13) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra didenis už A (A - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 14) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A (A - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 15) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda mažąja raide.

console.groupCollapsed();








console.groupEnd();

// 16) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja raide.

console.groupCollapsed();








console.groupEnd();

// 17+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 18++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 19) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra didenis už A (A - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 20) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A (A - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 21) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda mažąja raide.

console.groupCollapsed();








console.groupEnd();

// 22) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja raide.

console.groupCollapsed();








console.groupEnd();

// 23+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 24++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

console.groupCollapsed();








console.groupEnd();

// 25) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė.

console.groupCollapsed();








console.groupEnd();

// 26) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė, nuo pasirinkto indekso.

const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

