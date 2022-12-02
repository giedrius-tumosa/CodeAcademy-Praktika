//1) Susikurti kintamuosius su reikšmingais pavadinimais ir informacija.
//   1.1) 5 string.

let name = "John";
let surname = "Smith";
let homeCountry = "UK";
let job = "Web Developer";
let interest = "Computer games";
//   1.2) 5 int.
let age = 25;
let numOfEmployees = 2000;
let temperature = -5;
let score = 60;
let duration = 120;

//   1.3) 3 bool.
let isDrunk = true;
let hasPC = false;
let tastesGood = true;

//2) Susikurti konteinerius ir juos užpildyti reikšmėmis (bent po 1 kiekvieno tipo).
//   2.1) Masyvas bent 6 ilgio. []
let array1 = ["John", 36, "Smith", true, false, 2];

//   2.2) Objektas bent 6 ilgio. {}
let user = {
  name: "Peter",
  surname: "Pit",
  email: "p.pit@gmail.com",
  age: 45,
  hasDog: true,
  interest: ["Computer games", "Cooking", "Books", "Movies"],
};

// 2.3) Masyvas bent 4 ilgio, kurio viduje būtų kitas masyvas bent 4 ilgio.

let array2 = [1, 2, 3, [500, 600, 700, 800]];

// 2.4) Masyvas bent 4 ilgio, kurio viduje būtų objektas bent 4 ilgio.

let array3 = [1, 2, 3, { name: "John", surname: "Smith", age: 29, city: "Vilnius" }];

// 2.5) Objektas bent 4 ilgio, kurio viduje būtų masyvas bent 4 ilgio.
let user1 = {
  name: "George",
  surname: "Bush",
  email: "j.b@gmail.com",
  age: 22,
  hasPet: false,
  interest: ["Cars", "Traveling", "Music", "Nature"],
};

// 2.6) Objektas bent 4 ilgio, kurio viduje būtų objektas bent 4 ilgio.
let user2 = {
  name: "Sarah",
  surname: "Connor",
  age: 32,
  hasPet: true,
  pet: {
    species: "dog",
    breed: "poodle",
    petName: "Sparkly",
    petAge: "2",
  },
};
//3) Į konsolę išvesti:
//   3.1) Bent po 2 reikšmes iš 2.1 ir 2.2 konteinerių.

console.log(array1[0] + " | " + array1[array1.length - 1]);
console.log(user.name + " | " + user.email);

//   3.2) Bent po 3 reikšmes iš 2.3-2.6 konteinerių su bent 1 reikšme esančia konteinerio konteineryje.

console.log(array2[0] + " | " + array2[2] + " | " + array2[3][2]);
console.log(array3[0] + " | " + array3[1] + " | " + array3[3].name);
console.log(user1.age + " | " + user1.name + " | " + user1.interest[0]);

// 4) Palyginti ir į konsolę išvesti kokias nors:
//   4.1) 2.1 konteinerio reikšmes.
if (array1[1] > array1[5]) {
  console.log(array1[1] + " yra daugiau nei " + array1[5]);
} else if (array1[1] === array1[5]) {
  console.log(array1[1] + " yra lygu " + array1[5]);
} else {
  console.log(array1[1] + " yra mažiau nei " + array1[5]);
}

//   4.2) 2.2 konteinerio reikšmes.
if (user.name.length > user.surname.length) {
  console.log("Vardas ilgesnis už pavardę.");
} else if (user.name.length < user.surname.length) {
  console.log("Vardas trumpesnis už pavardę.");
} else {
  console.log("Vardas tokio paties ilgio kaip pavardė.");
}

//   4.3) 2.3-2.6 konteinerių reikšmes su jų viduje esančių konteinerių reikšmėmis.

console.log(array2[0] > array2[3][2]);
console.log(array2[2] > array3[3].age);
console.log(user1.name.length > user1.interest[0]);
console.log(user2.age > user2.pet.petAge);

//   4.4) 2.3-2.6 konteinerių reikšmes su kitų konteinerių reikšmėmis (3kartus skirtingas reikšmes).
console.log(user1.age < user2.age);
console.log(array2[3][0] > user2.pet.petAge);
console.log(user1.hasPet === user2.hasPet);

// 5) Parašyti if'ą, kuris tikrintų kokia tavo lytis

/*
let person = {};
let message;

person.firstName = prompt("Your first name?");
person.lastName = prompt("Your last name?");
person.age = prompt("Your age?");
person.city = prompt("Your city of residence?");
person.gender = prompt("Your gender?");

message = person.gender
  ? "You define yourself as " + person.gender.toLowerCase()
  : "You did not enter anything.";

alert(message); 
*/