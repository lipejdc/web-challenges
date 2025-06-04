console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newToastMessage = document.createElement('li');
  newToastMessage.classList.add("toast-container__message");
  newToastMessage.classList.add("js-new-toast-message");
  newToastMessage.textContent = "I am a new toast message!"

  toastContainer.append(newToastMessage);
});

clearButton.addEventListener("click", () => {
  const newToasts = document.querySelectorAll(".js-new-toast-message");
  newToasts.forEach((toast) => toast.remove());
});
