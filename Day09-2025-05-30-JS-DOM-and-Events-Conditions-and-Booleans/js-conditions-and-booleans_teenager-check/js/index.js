const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  let message;

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
  if (age >= 12 && age < 18) {
    message = "You are a teen!";
  }
  else if (age >= 0 && age < 12) {
    message = "You are NOT a teen! You are a baby or a child!";
  }
  else {
    message = "You are an adult!";
  }

  console.log(message);
});
