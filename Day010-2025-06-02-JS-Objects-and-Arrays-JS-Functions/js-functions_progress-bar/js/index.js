console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  //Gets how many pixels the page has been scrolled vertically from the very top. Top = 0.
  const scrollTop = window.scrollY;
  //Gets the height of the visible part of the browser window (the "viewport").
  const viewportHeight = window.innerHeight;
  //Gets the total height of the webpage (everything you could possibly scroll through).
  const totalHeight = document.body.clientHeight;
  //Calculates how much of the page is scrollable.
  const scrollable = totalHeight - viewportHeight;
  // If there's nothing to scroll, just return 0%
  if (scrollable === 0) return 0;
//Turns how far you’ve scrolled into a percentage:
// scrollTop / scrollable → a number between 0 and 1
//Multiply by 100 to get a value between 0 and 100 (i.e., a percentage)
  return (scrollTop / scrollable) * 100;
}

window.addEventListener("scroll", () => {
  const scrollPercent = calculateScrollPercentage();
  progressBar.style.width = `${scrollPercent}%`;
});
