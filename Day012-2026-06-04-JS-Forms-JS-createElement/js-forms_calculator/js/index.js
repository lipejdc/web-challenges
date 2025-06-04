console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const firstNumber = data.numberA;
  const secondNumber = data.numberB;
  const operator = data.operator;
  let result;

  // --v-- write your code here --v--
  switch (operator) {
    case "addition":
      result = add(Number(firstNumber), Number(secondNumber));
      console.log(result);
      break;
    case "subtraction":
      result = subtract(Number(firstNumber), Number(secondNumber));
      console.log(result);
      break;
    case "multiplication":
      result = multiply(Number(firstNumber), Number(secondNumber));
      console.log(result);
      break;
    case "division":
      result = divide(Number(firstNumber), Number(secondNumber));
      console.log(result);
      break;
    // other cases...
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
