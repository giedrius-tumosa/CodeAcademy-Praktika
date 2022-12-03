// 4) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su string kintamaisiais))) abeceliškai ir ją išvestų į konsolę.

console.groupCollapsed("//4");

let miestai = ["Vilnius", "Klaipėda", "Kaunas", "Panevėžys"];

function rikiuoti(array) {
  return array.sort(function (a, b) { return a.localeCompare(b); });
}


console.log(rikiuoti(miestai));

console.groupEnd();



// 5) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.

console.groupCollapsed("//5");

let numArray = [10, 26, 85, 1002, 568, 99, 1254];

function sortNumbers(numArray) {
  return numArray.sort(
    function (a, b) { return a - b; }
  );
}
console.log(sortNumbers(numArray));

console.groupEnd();


// 6) Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro (imtinai) iki antrojo (imtinai). (paduodu 5,9 => grąžina 5,6,7,8,9)

console.groupCollapsed("//6");


function rangeOut(numStart, numEnd) {

  if (numStart > numEnd) {
    for (let i = numStart; i >= numEnd; i--) {
      console.log(i);
    }
  } else {
    for (let i = numStart; i <= numEnd; i++) {
      console.log(i);
    }
  }

}

rangeOut(5, 9);

console.groupEnd();


// 7) Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro (imtinai) iki trečiojo duotojo parametro (imtinai). (paduodu 2,5,9 => grąžina 5,7,9)

console.groupCollapsed("//7");


function seven(step, numStart, numEnd) {
  if (typeof (step) === 'string' || typeof (numStart) === 'string' || typeof (numEnd) === 'string') {
    console.log("ERROR: use numbers only.");
  } else if (numStart > numEnd) {
    for (let i = numStart; i >= numEnd; i -= step) {
      console.log(i);
    }
  } else {
    for (let i = numStart; i <= numEnd; i += step) {
      console.log(i);
    }
  }
}


seven(10, 6, 100);

console.groupEnd();

// 8) Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petrauskas" => 16).


console.groupCollapsed("//8");


function sumNames(firstName, lastName) {
  return firstName.length + lastName.length;
}
console.log(sumNames("Jonas", "Starkus"));


console.groupEnd();



// 9) Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.


console.groupCollapsed("//9");

function letters(letterNumber) {
  let letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  if (letterNumber > letterArray.length - 1 || letterNumber < 0 || typeof (letterNumber) !== "number") {
    console.log("Number is incorrect. Enter the number between 0 and 25.");
    return null;
  } else {
    console.log(letterArray[letterNumber]);
    return letterArray[letterNumber];
  }
}

console.groupEnd();




// 10) Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.



console.groupCollapsed("//10");

function calc(num1, num2, operator) {
  if (typeof (num1) !== "number" || typeof (num2) !== "number" || typeof (operator) !== "string") {
    return "Error: invalid entry.";
  } else {
    switch (operator) {
      case 'sum':
        console.log("sum => ", num1 + num2);
        break;
      case 'sub':
        console.log("sub => ", num1 - num2);
        break;
      case 'div':
        console.log("div => ", num1 / num2);
        break;
      case 'multi':
        console.log("sum => ", num1 * num2);
        break;
      default:
        console.log("Operator was not recognized. Available: sum, sub, div, multi.");
        break;
    }
  }
}



console.groupEnd();


// 11) Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

console.groupCollapsed("//11");

function randomNum() {
  let rand = Math.ceil(Math.random() * 10);
  return rand;
}

function powerOfTwo(number) {
  return number ** 2;
}


console.log(powerOfTwo(randomNum()));


console.groupEnd();



// extra0) Sukurti funkciją, kuri pirmojo parametro (masyvo) elementus sudėtų į kito parametro (masyvo irgi) vidų toje vietoje, kokio ilgio yra antrasis parametras (tuo momentu) tol kol antrasis parametras liks tuščias. (a=[1,2,3,4,5,6,7]b=[a,b,c]; a=[1,2,3,a,4,5,6,7]b=[b,c]; a=[1,2,b,3,a,4,5,6,7]b=[c]; a=[1,c,2,b,3,a,4,5,6,7]b=[])
console.groupCollapsed("//extra0");


let firstArray = [1, 2, 3, 4, 5, 6, 7];
let secondArray = ["a", "b", "c"];

function extraZero(firstArray, secondArray) {
  while (secondArray.length > 0) {
    firstArray.splice(secondArray.length, 0, secondArray.shift());
  }
  return firstArray;
}

console.log(extraZero(firstArray, secondArray));
console.groupEnd();


// extra1) Sukurti funkciją, kuri atlieka Fizz Buzz testą nuo-iki duotųjų parametrų.

console.groupCollapsed("//extra1");


function fizzBuzz(numStart, numEnd) {
  for (let i = numStart; i <= numEnd; i++) {
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
}
fizzBuzz(20, 60);
console.groupEnd();


// extra2) Sukurti funkciją, kuri randa visus pirminius skaičius iki nurodyto parametro.

console.groupCollapsed("//extra2");

function primaryNums(numStart, numEnd) {

  let isPrimary;
  for (let i = numStart; i <= numEnd; i++) {

    if (Math.abs(i) < 3 && Math.abs(i) >= 0) { //Special numbers 0, 1, 2
      isPrimary = (Math.abs(i) === 2) ? true : false;
    } else {
      // Ar likutis ne 0, dalinant is 2...i-1
      for (let k = Math.abs(i) - 1; k >= 2; k--) {
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
}

primaryNums(-5, 5);

console.groupEnd();

