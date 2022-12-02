// 6) Parašyti ciklą, kuris sukurtų 50 random skaičių (nuo 0 iki 100) masyvą.
console.groupCollapsed("6) Parašyti ciklą, kuris sukurtų 50 random skaičių (nuo 0 iki 100) masyvą.");


let myArray = [];

for (let i = 0; i < 50; i++) {
  myArray.push(Math.floor(Math.random() * 101));
}
console.log(myArray);

console.groupEnd();


// 7) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.

console.groupCollapsed("7) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.");

for (let i = 0; i < myArray.length; i += 3) {
  console.log(myArray[i]);
}

console.groupEnd();



// 8) Parašyti ciklą, kuris išspausdintų kas antrą masyvo elementą nuo galo.

console.groupCollapsed("8) Parašyti ciklą, kuris išspausdintų kas antrą masyvo elementą nuo galo.");



for (let i = myArray.length - 1; i >= 0; i -= 2) {
  console.log(myArray[i]);
}



console.groupEnd();






// 9) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.


console.groupCollapsed("9) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.");


for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] > 54) {
    console.log(myArray[i]);
  }
}


console.groupEnd();




// 10) Parašyti ciklą, kuris iš masyvo išspausdintų tik lyginius/nelyginius skaičius. (2ciklai)

console.groupCollapsed("10) Parašyti ciklą, kuris iš masyvo išspausdintų tik lyginius/nelyginius skaičius. (2ciklai)");


for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    console.log(myArray[i] + " - LYGINIS");
  }
}


console.log("***************************");


for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 !== 0) {
    console.log(myArray[i] + " - NELYGINIS");
  }
}



console.groupEnd();

// extra 1) Parašyti ciklą, kuris atlieka Fizz Buzz testą nuo 0 iki 100.
//   Fizz - jeigu skaičius yra 3 kartotinis/daliklis/dalijasi iš 3 be liekanos.
//   Buzz - jeigu skaičius yra 5 kartotinis/daliklis/dalijasi iš 5 be liekanos.
//   FizzBuzz - jeigu skaičius yra 3 ir 5 kartotinis/daliklis/dalijasi iš 3 ir 5 be liekanos.
//   skaičius - kitais atvejais.

console.groupCollapsed("extra 1) Parašyti ciklą, kuris atlieka Fizz Buzz testą nuo 0 iki 100.");



for (let i = 0; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log(i + "  FizzBuzz");
  } else if ((i % 3 === 0)) {
    console.log(i + "  Fizz");
  } else if ((i % 5 === 0)) {
    console.log(i + "  Buzz");
  } else {
    console.log(i + "     neidomus");
  }
}


console.groupEnd();





// EXTRA 2) Parašyti ciklą, kuris atrinktų ir į konsolę išspausdintų tik pirminius skaičius intervale nuo 0 iki 100.
//   Pirminis skaičius - dalinasi TIK iš savęs paties ir iš 1 be liekanos.
//   pvz(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101)

console.groupCollapsed("EXTRA 2) Parašyti ciklą, kuris atrinktų ir į konsolę išspausdintų tik pirminius skaičius intervale nuo 0 iki 100.");



let isPrimary;
for (let i = 0; i <= 100; i++) {

  if (i < 3 && i >= 0) { //Special numbers 0, 1, 2
    isPrimary = (i === 2) ? true : false;
  } else {
    // Ar likutis ne 0, dalinant is 2...i-1
    for (let k = i - 1; k >= 2; k--) {
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
    console.log(i);
  }
}



console.groupEnd();
