import Building from "./Building.js";


const myBuilding = new Building(9, 3, 81);

const kambariuSkaicius = parseInt("");
const aukstoNumerisNuo = parseInt("");
const aukstoNumerisIki = parseInt("");
const kainaIki = parseInt("1");

myBuilding.apartmentFinder(kambariuSkaicius, aukstoNumerisNuo, aukstoNumerisIki, kainaIki);

// kambariuSkaicius = 0, aukstoNumerisNuo = 1, aukstoNumerisIki = 9, kainaIki = Infinity)

const secondBuilding = new Building(3, 5, 30);