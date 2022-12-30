// 3) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())

console.groupCollapsed("// 3) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. ");

let func3 = (arrayLength, minNumber, maxNumber) => {
  const result = [];
  for (let i = 0; i < arrayLength; i++) {
    result.push(
      (Math.random() * ((maxNumber + 1) - minNumber) + minNumber).toFixed(2)
    );
  }
  return result;
};

// console.log(func3(50, 10, 11));

console.groupEnd();

// 4) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį. (tarpai ir skiriamieji ženklai neturi būti įtraukti).

console.groupCollapsed("// 4) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį.");

let func4 = (string) => {
  const regex = /[^A-Za-z0-9’_‑‐-]/g;
  const strArray = string
    .trim()
    .split(" ")
    .map((word, i) => word.replace(regex, ""));

  strArray.forEach((word, i, array) => !word && array.splice(i, 1));
  return strArray;
};

console.log(
  func4("The exact number of arguments depends on whether the first argument is a RegExp object — and, if so, how many capture groups it has.")
);
console.groupEnd();

// 5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.


console.groupCollapsed("// 5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.");

console.log(
  func3(10, 30, 600).filter(el => el % 2 === 0)
);

console.groupEnd();

// 6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius.


console.groupCollapsed("// 6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius.");

console.log(
  func3(10, 30, 600).filter(el => el % 2 !== 0)
);

console.groupEnd();

// 7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.


console.groupCollapsed("// 7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.");

console.log(
  func3(10, 30, 600).filter(el => Number.isInteger(el))
);

console.groupEnd();

// 8) Sukurti funkciją, kuri 3'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).


console.groupCollapsed("// 8) Sukurti funkciją, kuri 3'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).");

const mas8 = func3(20, 30, 60);

let func8 = (array, lowRange, highRange) => {
  return array.filter(el => el >= lowRange && el <= highRange);
};

console.log(mas8);
console.log(func8(mas8, 40, 50));

console.groupEnd();

// 9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.


console.groupCollapsed("// 9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.");

const mas9 = func4("Reinforced by aircraft from Sweden, United Nations peacekeepers completed the first phase of the operation, securing the Katangese capital, Élisabethville, and destroying much of the Katangese Air Force by the end of the year. In early January, the United Nations forces turned their attention towards remaining strongholds in southern Katanga. Indian peacekeepers surpassed their orders and crossed the Lufira River ahead of schedule, generating panic behind the Katangese lines and embarrassing the United Nations leadership.");

let func9 = (array) => {
  return array.filter(word => word[0] === word[0].toUpperCase());
};

console.log(func9(mas9));

console.groupEnd();

// 10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.


console.groupCollapsed("// 10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.");

let func10 = (array) => {
  return array.filter(word => word[0] === word[0].toLowerCase());
};
console.log(func10(mas9));
console.groupEnd();

// 11) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.


console.groupCollapsed("");

let func11 = (array, startLetter) => array.filter(word => word[0].toLowerCase() === startLetter.toLowerCase());

console.log(func11(mas9, 's'));

console.groupEnd();

// 12) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.


console.groupCollapsed("");

let func12 = (array, startLetter) => array.filter(word => word[word.length - 1].toLowerCase() === startLetter.toLowerCase());

console.log(func12(mas9, 's'));

console.groupEnd();

// 13) Naudojant reduce metodą suskaičiuoti 5'tos užduoties masyvo bendrą sumą.


console.groupCollapsed("");



console.groupEnd();

// 14) Naudojant reduce metodą suskaičiuoti 6'tos užduoties masyvo bendrą sandaugą.


console.groupCollapsed("");



console.groupEnd();
