// 1)  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. 
// "(123) 456-7890"

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function formatTel(numArray) {
  return "(" + arrayToString(numArray.slice(0, 3)) + ") " + arrayToString(numArray.slice(3, 6)) + "-" + arrayToString(numArray.slice(6, 10));
}

function arrayToString(array) {
  let str = "";
  array.forEach(el => str += el);
  return str;
}


// 2) Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:                                                                      
// []                                -->  "no one likes this"    
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


function likes(names) {
  let numberOfLikes = names.length;

  if (numberOfLikes === 0) {
    return "no one likes this";
  } else if (numberOfLikes === 1) {
    return names[0] + " likes this";
  } else if (numberOfLikes > 1 && numberOfLikes < 4) {
    let tempString = "";
    for (let i = 0; i < numberOfLikes; i++) {
      if (i === names.length - 1) {
        tempString += " and " + names[i];
      } else if (i === 0) {
        tempString += names[i];
      } else {
        tempString += ", " + names[i];
      }
    }
    return tempString + " like this";
  } else {
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }

}

let letdai = ["Peter", "John", "Giedrius"];


likes(["Peter", "John", "Giedrius", "Sarah"]);



// 3) Create a function which returns the number of true values there are in an array.

function countBool(array) {
  let count = 0;
  array.forEach(el => el === true && count++);
  return count;
}

let bools = [true, false, true, true, true, true, false];


// 4) The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function countLetters(entryString) {
  let string = entryString.toLowerCase();
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    let count = 1;
    if (obj.hasOwnProperty(`${string[i]}`) === false) {
      for (let j = i + 1; j < string.length; j++) {
        if (string[i] === string[j]) {
          count++;
        }
      }
      obj[`${string[i]}`] = count;
    }
  }
  return obj;
}

countLetters("Aba");

// 5) Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output): 

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)

function func5(number) {
  let numberArray = number.toString();
  let count = 0;
  while (numberArray.length > 1) {
    let prod = 1;
    for (let el of numberArray) {
      prod *= Number(el);
    }
    numberArray = prod.toString();
    count++;
  }
  return count;
}

func5(999);


// 6) Write a JavaScript function to merge two arrays and removes all duplicates elements.

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

function mergeArrays(ar1, ar2) {
  ar2.forEach(el => {
    if (!ar1.includes(el)) {
      ar1.push(el);
    }
  });
  return ar1;
}

mergeArrays(array1, array2);

// 7) Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "()()((()())())"  =>  true


function isClosed(str1, str2) {
  return str1 === "(" && str2 === ")";
}

function areBracesValid(string) {
  let stringArray = string.split("");
  let count = 1;
  let isValid = true;
  while (stringArray.length > 0 || count !== 0) {
    count = 0;
    for (let i = 0; i < stringArray.length - 1; i++) {
      if (isClosed(stringArray[i], stringArray[i + 1])) {
        count++;
        stringArray.splice(i, 2);
      }
    }
    if (stringArray.length > 0 && count === 0) {
      isValid = false;
      break;
    }
  }
  return isValid;

}