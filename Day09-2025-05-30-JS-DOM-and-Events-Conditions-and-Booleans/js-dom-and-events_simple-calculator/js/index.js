console.clear();

let operand1 = 12;
let operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector("[data-js=add]");
const subtractButton = document.querySelector("[data-js=subtract]");
const multiplyButton = document.querySelector("[data-js=multiply]");
const divideButton = document.querySelector("[data-js=divide]");
const exponentButton = document.querySelector("[data-js=exponent]");
const moduloButton = document.querySelector("[data-js=modulo]");
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
addButton.addEventListener("click", () => {
  const sum = operand1 + operand2;
  console.log(sum);
});

subtractButton.addEventListener("click", () => {
  const subtraction = operand1 - operand2;
  console.log(subtraction);
});

multiplyButton.addEventListener("click", () => {
  const multiplication = operand1 * operand2;
  console.log(multiplication);
});

divideButton.addEventListener("click", () => {
  const division = operand1 / operand2;
  console.log(division);
});

exponentButton.addEventListener("click", () => {
  const exponentCalculation = operand1 ** operand2;
  console.log(exponentCalculation);
});

moduloButton.addEventListener("click", () => {
  const modCalculation = operand1 % operand2;
  console.log(modCalculation);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const increaseFirstOperandByOneButton = document.querySelector(
  "[data-js=increase-by-one]"
);
const increaseFirstOperandByFiveButton = document.querySelector(
  "[data-js=increase-by-five]"
);
const decreaseFirstOperandByOneButton = document.querySelector(
  "[data-js=decrease-by-one]"
);
const decreaseFirstOperandByFiveButton = document.querySelector(
  "[data-js=decrease-by-five]"
);
const multiplyFirstOperandByTwoButton = document.querySelector(
  "[data-js=multiply-by-two]"
);
const divideFirstOperandByTwoButton = document.querySelector(
  "[data-js=divide-by-two]"
);

increaseFirstOperandByOneButton.addEventListener("click", () => {
  let incrementFirstOperand = ++operand1;
  console.log(incrementFirstOperand);
});

increaseFirstOperandByFiveButton.addEventListener("click", () => {
  const incrementFirstOperandByFive = operand1 += 5;
  console.log(incrementFirstOperandByFive);
});

decreaseFirstOperandByOneButton.addEventListener("click", () => {
  const decrementFirstOperand = --operand1;
  console.log(decrementFirstOperand);
});

decreaseFirstOperandByFiveButton.addEventListener("click", () => {
  const decrementFirstOperandByFive = operand1 -= 5;
  console.log(decrementFirstOperandByFive);
});

multiplyFirstOperandByTwoButton.addEventListener("click", () => {
  const multiplyFirstOperandByTwo = operand1 *= 2;
  console.log(multiplyFirstOperandByTwo);
});

divideFirstOperandByTwoButton.addEventListener("click", () => {
  const divideFirstOperandByTwo = operand1 /= 2;
  console.log(divideFirstOperandByTwo);
});
// --^-- write your code here --^--
