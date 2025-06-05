console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const createNewSocialMediaPost = () => {

  const newArticleElement = document.createElement("article");
  newArticleElement.classList.add("post");

  const newParagraphElement = document.createElement("p");
  newParagraphElement.classList.add("post__content");
  newParagraphElement.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  const newFooterElement = document.createElement("footer");
  newFooterElement.classList.add("post__footer");

  const newSpanElement = document.createElement("span");
  newSpanElement.classList.add("post__username");
  newSpanElement.textContent = "@username";

  const newButtonElement = document.createElement("button");
  newButtonElement.classList.add("post__button");
  newButtonElement.setAttribute("data-js", "like-button");
  newButtonElement.type = "button";
  newButtonElement.textContent = "♥ Like";
  newButtonElement.addEventListener("click", handleLikeButtonClick);

  newFooterElement.append(newSpanElement, newButtonElement);
  newArticleElement.append(newParagraphElement, newFooterElement);
  document.body.append(newArticleElement);
};

createNewSocialMediaPost();
