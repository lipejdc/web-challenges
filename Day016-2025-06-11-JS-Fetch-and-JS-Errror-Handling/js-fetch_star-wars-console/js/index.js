console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  for (const person of data.results) {
    console.log(person.name);
    console.log(person.hair_color);
    console.log(person.gender);
  } 

  console.log(data.results[2].eye_color);
}

fetchData(url);
