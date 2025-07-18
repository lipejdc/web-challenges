console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--

for (const language in languages) {
  console.log(languages[language]);
  const optionElement = document.createElement('option');
  optionElement.setAttribute("value", languages[language]);
  optionElement.textContent = language;
  select.append(optionElement);
}

// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--

for (const key in nav) {
  
  const listElement = document.createElement('li');
  const anchorElement = document.createElement('a');
  
  anchorElement.href = nav[key].href;
  anchorElement.textContent = nav[key].text;

  ul.append(listElement);
  listElement.append(anchorElement);
}

// --^-- write or modify code above this line --^--
