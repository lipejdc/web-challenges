console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

hideTosError();
hideSuccessMessage();
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // --v-- write your code here --v--
  const isTosCheckboxChecked = e.target.elements.tos.checked;
  console.log(isTosCheckboxChecked);

  if (isTosCheckboxChecked) {
    alert("Form submitted");
    showSuccessMessage();
    return;
  }

  showTosError();
  

  // --^-- write your code here --^--

});

tosCheckbox.addEventListener("change", (e) => {
  
  const isTosCheckboxChecked = e.target.checked;
  console.log(isTosCheckboxChecked);

  if (isTosCheckboxChecked) {
  hideTosError();
} else {
  showTosError();
}
})
