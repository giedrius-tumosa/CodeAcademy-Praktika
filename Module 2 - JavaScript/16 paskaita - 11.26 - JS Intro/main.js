// String
let str1 = "apple";
let str2 = "orange";
let str3 = "pineapple";
let str4 = "cucumber";
let str5 = "melon";

// Number
let num1 = 1;
let num2 = 20;
let num3 = 3.5;
let num4 = 425;
let num5 = 5.45;

// Boolean
let isVegetable = false;
let tastesGood = true;

// ---------------------------------------------------------------------

let hasDrivingLicense = true;
let hasCar = true;
let isSober = true;
let canDrive = hasDrivingLicense && hasCar && isSober;

if (canDrive) {
  console.log("Tu gali vairuoti.");
} else {
  console.log("Tu negali vairuoti, nes:");
  if (!hasDrivingLicense) {
    console.log("*Neturi vairuotojo pazymejimo.");
  }
  if (!hasCar) {
    console.log("*Neturi automobilio.");
  }
  if (!isSober) {
    console.log("*Esi neblaivus.");
  }
}
