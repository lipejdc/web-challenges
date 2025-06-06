console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {

  const filledStarSrc = "assets/star-filled.svg";
  const emptyStarSrc = "assets/star-empty.svg";

  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  for (let i = 1; i <= 5; i++) {
    const newStarImageElement = document.createElement("img");

    newStarImageElement.src = i <= filledStars
      ? filledStarSrc
      : emptyStarSrc

    newStarImageElement.addEventListener("click", () => {
      renderStars(i);
    })

    starContainer.append(newStarImageElement);
  }

  // --^-- write or modify code above this line --^--
}

renderStars(3);
