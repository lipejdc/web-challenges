console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const firstNameInputValue = event.target.elements.firstName.value;
  console.log(firstNameInputValue);

  const ageInputValueToNumber = Number(event.target.elements.age.value);
  console.log(ageInputValueToNumber);

  const badnessInputValueToNumber = Number(event.target.elements.badness.value);
  console.log(badnessInputValueToNumber);

  const ageBadnessSum = ageInputValueToNumber + badnessInputValueToNumber;
  console.log(ageBadnessSum);

  console.log(`The age-badness-sum of ${firstNameInputValue} is ${ageBadnessSum}!`);


  event.target.reset();
});
