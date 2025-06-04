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
  
  const articleElement = document.createElement("article");
  articleElement.classList.add("post");

  const paragraphElement = document.createElement("p");
  paragraphElement.classList.add("post__content");
  paragraphElement.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  const footerElement = document.createElement("footer");
  footerElement.classList.add("post__footer");

  const spanElement = document.createElement("span");
  spanElement.classList.add("post__username");
  spanElement.textContent = "@username";

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("post__button");
  buttonElement.textContent = "♥ Like";

  footerElement.append(spanElement, buttonElement);
  articleElement.append(paragraphElement, footerElement);
  document.body.append(articleElement);
};

createNewSocialMediaPost();
