const firstInput = document.getElementById('first-input');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');


uppercaseButton.addEventListener("click", () => {
    firstInput.value = firstInput.value.toUpperCase();
});
