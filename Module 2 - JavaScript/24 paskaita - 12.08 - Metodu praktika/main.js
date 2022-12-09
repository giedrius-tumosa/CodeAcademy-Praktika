// Uzduotys be ir su iteraciniais metodais

let zodziuMasyvas = ['labas', 'du', 'trys', 'namas', 'stalas', 'kede', 'antananarivas'];
let skaiciuMasyvas = [5, 9, 8, 4, 6, 10, 25, 44, 555, -65, -2, 0];
let misrusMasyvas = ['du', 'trys', 'namas', 25, 44, 555, -65, 25, false, true, false];

// 1) I console isvesti masyvo duomenis atskirose eilutese
console.groupCollapsed("1");

let uzd1Be = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

// uzd1Be(zodziuMasyvas);

let uzd1Su = (array) => array.forEach(el => console.log(el));
// uzd1Su(skaiciuMasyvas);

console.groupEnd();

// 2) Parasyti f-ja, kuri grazintu masyva, kur skaiciai didesni uz 10 is jai pateikto masyvo:

console.groupCollapsed("2");


let uzd2Be = (array) => {
  let newArray = [];
  for (let el of array) {
    if (el > 10) {
      newArray.push(el);
    }
  }
  return newArray;
};

// console.log(uzd2Be(skaiciuMasyvas));

let uzd2Su = (array) => array.filter(el => el > 10);


console.log(uzd2Su(skaiciuMasyvas));

console.groupEnd();

// 3) Parasyti f-ja, kuri patikrintu, ar jai paduotame string masyve bent vienas elementas yra ilgesnis nei 5 raidziu zodis ir grazintu true arba false:

// let zodziuMasyvas = ['labas', 'du', 'trys', 'namas', 'stalas', 'kede', 'antananarivas'];
// let skaiciuMasyvas = [5, 9, 8, 4, 6, 10, 25, 44, 555, -65, -2, 0];
// let misrusMasyvas = ['du', 'trys', 'namas', 25, 44, 555, -65, 25, false, true, false];

console.groupCollapsed("3");

let uzd3Be = (array) => {
  for (let el of array) {
    if (el.length > 5) {
      return true;
    }
  }
  return false;
};

// console.log(uzd3Be(zodziuMasyvas));

let uzd3Su = (array) => array.some((el) => el.length > 5);

console.log(uzd3Su(zodziuMasyvas));

console.groupEnd();


// 4) Parasyti f-ja, kuri jai paduotame misriame masyve rastu ir grazintu pirmaji kintamaji, kuris yra skaicius:

console.groupCollapsed("4");

let uzd4Be = (array) => {
  for (let el of array) {
    if (typeof (el) === "number") {
      return el;
    }
  }
  return "No numbers detected.";
};

// console.log(uzd4Be(zodziuMasyvas));

let uzd4Su = (array) => {
  return result = array.find(el => typeof (el) === "number");
};

console.log(uzd4Su(zodziuMasyvas));

console.groupEnd();

console.log(`
Iteraciniai metodai:
**********************************
`);



// Iteracinių masyvų metodų užduotys:
//   1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

console.groupCollapsed("Iter: 1");

const cars = ["BMW", "VW", "Audi"];

let iter1 = (array) => array.forEach(el => console.log(el));

iter1(cars);

console.groupEnd();


//   2) Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

console.groupCollapsed("Iter: 2");

let iter2 = (array) => array.forEach((el, i) => console.log(`${i}: ${el}`));

iter2(cars);

console.groupEnd();


//   3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

console.groupCollapsed("Iter: 3");

const friends = ["jonas", "peTRas", "antanAS", "JuoZas", "kaMiLė", "ONA"];

let iter3 = (array) => array.map(
  el => el = el[0].toUpperCase() + el.slice(1).toLowerCase()
);

console.log(iter3(friends));

console.groupEnd();


//   4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

console.groupCollapsed("Iter: 4");

const friendAge = [15, 16, 17, 18, 19, 20, 25, 30, 40];

let iter4 = (array) => array.filter(el => el >= 18).join(" ");

console.log(iter4(friendAge));

console.groupEnd();


//   5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

console.groupCollapsed("Iter: 5");

const miestaiLT = ["Akmenė", "Alytus", "Anykščiai", "Ariogala", "Baltoji Vokė", "Birštonas", "Biržai", "Daugai", "Druskininkai", "Dūkštas", "Dusetos", "Eišiškės", "Elektrėnai", "Ežerėlis", "Gargždai", "Garliava"];

let iter5 = (array, letter) => array.find(el => el[0] === letter.toUpperCase());

console.log(iter5(miestaiLT, "d"));

console.groupEnd();


//   6) Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

console.groupCollapsed("Iter: 6");


let iter6 = (array) => array.some(el => el[0].toLowerCase() === el[0]);

console.log(iter6(miestaiLT));

console.groupEnd();


//   7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.


console.groupCollapsed("Iter: 7");

let iter7 = (array) => array.every(el => el[0].toUpperCase() === el[0]);

console.log(iter7(miestaiLT));

console.groupEnd();

console.log(`
EXTRA:
***********************************************
`);

// ForEach, Filter, Reduce ir Map:
//   1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]

console.groupCollapsed("Extra: 1");

const items = [
  { id: 0, name: "CAT S53 Black", inStock: true, primeCost: 200, cost: 475 },
  { id: 1, name: "google Pixel 6 Pro", inStock: false, primeCost: 300, cost: 729 },
  { id: 2, name: "Asus Zenfone 9", inStock: false, primeCost: 320, cost: 749 },
  { id: 3, name: "Huawei Nova Y70", inStock: true, primeCost: 50, cost: 166 },
  { id: 4, name: "Nokia 110 TA-1192", inStock: true, primeCost: 10, cost: 29 },
  { id: 5, name: "iPhone 11 PRO MAX", inStock: true, primeCost: 400, cost: 1118 },
  { id: 6, name: "iPhone 12 Red, 6.1", inStock: false, primeCost: 350, cost: 954 },
  { id: 7, name: "XIAOMI Redmi Note 11", inStock: false, primeCost: 152, cost: 510 },
  { id: 8, name: "HONOR X8 6.7", inStock: true, primeCost: 120, cost: 256 },
  { id: 9, name: "Nokia G21 Blue", inStock: true, primeCost: 72, cost: 172 },
  { id: 10, name: "Doro 1360", inStock: true, primeCost: 15, cost: 41 }
];

console.groupEnd();


//   2) Naudojant forEach - išvesti masyvą į konsolę.

console.groupCollapsed("Extra: 2");

items.forEach(el => console.log(el));

console.groupEnd();

//   3) Naudojant forEach - išvesti tik masyvo vardus ir kainas į konsolę.

console.groupCollapsed("Extra: 3");


items.forEach(el => console.log(`${el.name} | ${el.cost}Eur`));


console.groupEnd();

//   4) Išfiltruoti (for{if{}}) tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

console.groupCollapsed("Extra: 4");

console.groupCollapsed("Extra: 4.0");

let whatIsInStock = (array) => {
  let newArray = [];
  for (let el of array) {
    if (el.inStock) {
      newArray.push(el);
    }
  }
  return newArray;
};
let itemsInStock = whatIsInStock(items);

console.log(itemsInStock);

console.groupEnd();


//     4.1) Naudojant map ir 4'tos užduoties masyvą - sukurti naują masyvą, kuriame būtų name ir suskaičiuotas bei išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).
console.groupCollapsed("Extra: 4.1");

let whatIsProfit = (array) => array.map(el => {
  let obj = { name: el.name, profit: el.cost - el.primeCost };
  return obj;
});

let itemProfits = whatIsProfit(items);

console.log(itemProfits);

console.groupEnd();


//     4.2) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (galima sukurti kelis užsakymus)

console.groupCollapsed("Extra: 4.2");

const order1 = [
  { name: "CAT S53 Black", quantity: 0 },
  { name: "google Pixel 6 Pro", quantity: 0 },
  { name: "Asus Zenfone 9", quantity: 0 },
  { name: "Huawei Nova Y70", quantity: 0 },
  { name: "Nokia 110 TA-1192", quantity: 0 },
  { name: "iPhone 11 PRO MAX", quantity: 0 },
  { name: "iPhone 12 Red, 6.1", quantity: 0 },
  { name: "XIAOMI Redmi Note 11", quantity: 0 },
  { name: "HONOR X8 6.7", quantity: 0 },
  { name: "Nokia G21 Blue", quantity: 0 },
  { name: "Doro 1360", quantity: 0 }
];

console.log(order1);


console.groupEnd();

//     4.3) Suskaičiuoti kiek pelno suteiks 4.2 masyvo užsakymas ir tai atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (arba užsakymai, jei 4.2 dalyje sukūrėte keletą užsakymų)

console.groupCollapsed("Extra: 4.3");

let orderProfit = (order, itemProfits) => {
  let overAllProfit = 0;
  order.forEach(el => {
    let quantity = el.quantity;
    let profit = itemProfits.find(item => item.name === el.name).profit;
    overAllProfit += quantity * profit;
  });
  return overAllProfit;
};

console.log(orderProfit(order1, itemProfits));

// oneItemProfit * quantity = groupProfit

console.groupEnd();

//     4.4) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

console.groupCollapsed("Extra: 4.4");
console.groupEnd();


console.groupEnd();


console.log(`
Destruktūrizavimas:
**********************************
`);

// Destruktūrizavimas:
//   1) Naudodami destructuring priskirkite 2 kintamiesiems 2 reikšmes.
console.groupCollapsed("Dest: 1");

const array1 = [1, 2];

let [a, b] = array1;

console.groupEnd();

//   2) Naudodami destructuring priskirkite 10 kintamųjų 10 reikšmių.

console.groupCollapsed("Dest: 2");

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [l, m, c, d, e, f, g, h, i, j] = array2;

console.groupEnd();

//   3) Naudodami destructuring priskirkite 3 kintamiesiems 5 reikšmes.

console.groupCollapsed("Dest: 3");

const array3 = ["vienas", "du", "trys", "keturi", "penki"];

let [q1, q2, ...q3] = array3;

console.groupEnd();

//   4) Naudodami destructuring priskirkite 1 kintamajam visas reikšmes išskyrus pirmas 3.

console.groupCollapsed("Dest: 4");

let [, , , ...kintamasis] = array3;

console.groupEnd();

//   5) Naudodami destructuring priskirkite 3 kintamiesiems 3 reikšmes paimtas iš objekto.

console.groupCollapsed("Dest: 5");

const user = { name: "John", age: 23, city: "Vilnius" };

let { name: vardas, age: amzius, city: miestas } = user;

console.groupEnd();

//   6) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.

console.groupCollapsed("Dest: 6");

let age1 = 30;
let age2 = 100;

[age1, age2] = [age2, age1];

console.groupEnd();
