console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => card.id === "2");

const allCardsWith3Tags = cards.filter((card) => card.tags.length === 3);

const allCardsThatAreNotBookmarked = cards.filter(
  (card) => !card.isBookmarked
);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  const cardHasTag = card.tags.includes("html") || card.tags.includes("js");
  const cardIsBookmarked = card.isBookmarked;
  return cardHasTag && cardIsBookmarked;
});

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
