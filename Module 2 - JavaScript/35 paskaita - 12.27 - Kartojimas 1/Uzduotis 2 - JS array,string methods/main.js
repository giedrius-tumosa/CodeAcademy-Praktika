// 1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.

console.groupCollapsed("// 1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.");

const array1 = [1, 5, 10, true, false, "Vilnius"];

let func1 = (array) => {
  return array.toString();
};

console.log(func1(array1));


console.groupEnd();



// 2) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)

console.groupCollapsed("// 2) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su -  simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)");

const func2 = (number) => {
  const stringNumber = number.toString();
  let temp = "";
  for (let i = 0; i < stringNumber.length - 1; i++) {
    areBothEven = Number(stringNumber[i]) % 2 === 0 && Number(stringNumber[i + 1]) % 2 === 0;
    temp += (areBothEven)
      ? `${stringNumber[i]}-`
      : `${stringNumber[i]}`;
  }
  temp += stringNumber[stringNumber.length - 1];
  console.log(temp);
};

func2("645234"); //ka daryti del trailing zero, jei type Number?
console.groupEnd();


// 3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)

console.groupCollapsed("// 3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)");

let func3 = (array) => {
  for (let el of array) { console.log(typeof (el)); }
  const notOnlyNumbers = array.some(el => typeof (el) !== "number");
  console.log(notOnlyNumbers);
  if (!notOnlyNumbers) {
    array.sort((a, b) => b - a);
  } else if (notOnlyNumbers) {
    array.sort((a, b) => b.localeCompare(a));
  } //reiktu ir misriam masyvui
  return array;
};

console.log(func3([5, 1, 2, 3]));
console.log(func3(["obuolys", "saldainis", "ananasas", "stalas"]));

console.log();

console.groupEnd();


// 4) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]).


console.groupCollapsed("// 4) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes");

const func4 = (array, ...args) => {
  return array.filter(el => args.includes(el) === false);
};

const masyvas = [1, 4, 5, 6, 4, 8, 4, 5];
console.log(func4(masyvas, 4, 6, 8));

console.groupEnd();

// 5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.

console.groupCollapsed("// 5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.");

let func5 = (array) => {
  array.sort((a, b) => a - b);
  console.log(`Min: ${array[0]}, Max: ${array[array.length - 1]}`);
};

func5([5, 1, 2, 3]);

console.groupEnd();


// 6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.


console.groupCollapsed("// 6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes.");

let func6 = (array1, array2) => {
  array1.forEach(el => {
    if (array2.includes(el)) {
      console.log(el);
    }
  });
};

const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayB = [2, 4, 10, 58, 9];

func6(arrayA, arrayB);


console.groupEnd();

// 7) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])

console.groupCollapsed("// 7) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų)");

let func7 = (arrayInfo, arrayIndex) => {
  let newArray = [];
  arrayIndex.forEach(el => newArray.push(arrayInfo[el]));
  console.log(newArray);
  return newArray;
};

func7(["a", "b", "c", "d", "e", "f"], [0, 3, 4]);

console.groupEnd();


// 8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis.

console.groupCollapsed("// 8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis.");

let func8 = (array) => {
  let temp = [];
  array.forEach(el => !temp.includes(el) && temp.push(el));
  console.log(temp);
};

func8(["a", "b", "c", "d", "e", "f", "a", "b", "c"]);
console.groupEnd();


// 9) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.


console.groupCollapsed("// 9) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.");

let func9 = (...args) => {
  let count = 0;
  let arrayOfCommon = [];
  if (args && args.length > 1) {
    // pirmo masyvo elementus tikriname kituose masyvuose
    args[0].forEach(el => {
      for (let i = 1; i < args.length; i++) { //einam per kitus masyvus
        if (args[i].includes(el)) { //jei egzistuoja tame masyve, spridedame 1 prie count
          count++;
        }
      }
      if (count === args.length - 1) { //jei count dydis sutampa su agumentu skaiciumi minus 1, tai loginam kaip bendra elementa
        console.log(el);
        arrayOfCommon.push(el);
      }
      count = 0;
    });
  }
  !arrayOfCommon.length && console.log("Bendrų elementų nėra.");
};

func9([1, 2, 3, "tu"], [587, 698, 3, "tu"], ["labas", "tu", 3]);


console.groupEnd();

// 10) Parašykte funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių. (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).
console.groupCollapsed("// 10) Parašykte funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių.");


let func10 = (array, nthMax) => {
  return array.reverse((a, b) => b - a)[nthMax];
};
console.log(func10([12, 54, 1, 65, 78, 91, 45], 3));
console.groupEnd();