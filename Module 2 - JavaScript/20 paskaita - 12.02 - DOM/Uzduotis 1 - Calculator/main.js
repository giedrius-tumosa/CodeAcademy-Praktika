let buttonSubmit = document.querySelector(".btn-submit");
let buttonReset = document.querySelector(".btn-reset");
let number1 = document.querySelector("#number1");
let operatorsAll = document.querySelectorAll(".operators input");
let number2 = document.querySelector("#number2");
let outputDisplay = document.querySelector(".output_display");
let outputText;
let calcResult;


// Skaičiavimo logika

function calc(num1, num2, operator) {

  if (isNaN(num1) || isNaN(num2)) {
    return "Klaida: pasitikrinkite, ar teisingai įvedėte skaičius: galimai įvestas tekstas ar dešimtainis skaičius su kableliu - naudokite tašką.";
  } else {
    switch (operator) {
      case 'addition':
        return num1 + num2;
      case 'subtraction':
        return num1 - num2;
      case 'division':
        return (num1 === 0 && num2 === 0) ? "Nulio dalyba iš nulio negalima." : num1 / num2;
      case 'multiplication':
        return num1 * num2;
      default:
        return "Klaida: pasitikrinkite, ar pasirinkote artimetinį veiksmą.";
    }
  }
}

// Event
buttonSubmit.addEventListener("click", function (e) {

  //Prevent page reload
  e.preventDefault();

  //Output reset
  outputDisplay.textContent = "";

  //Collect user input
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  let operatorSelected = function () {
    for (let element of operatorsAll) {
      if (element.checked) {
        return element.id;
      }
    }
  };

  // Calculate result
  calcResult = calc(num1, num2, operatorSelected());

  // Output
  outputText = document.createTextNode(calcResult);
  outputDisplay.append(outputText);
});


buttonReset.addEventListener("click", function (e) {
  outputDisplay.textContent = "";
});

//Helpers

function hasComma(number) {
  if (typeof (number) === "string") {
    for (let letter of number) {
      if (letter === ",") {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
}




