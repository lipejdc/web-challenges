console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

receivedPassword === SUPER_SECRET_PASSWORD
  ? console.log("Welcome! You are logged in as Brunhilde1984.")
  : console.log("Access denied!");

// Part 2: Even / Odd

const checkEvenOddNumber = (number) => {
  if (number % 2 === 0) {
    console.log("The number is even!");
  } else {
    console.log("The number is odd!");
  }
};

console.log(checkEvenOddNumber(6));
console.log(checkEvenOddNumber(27));
console.log(checkEvenOddNumber(35));
console.log(checkEvenOddNumber(0));
console.log(checkEvenOddNumber(23424));
console.log(checkEvenOddNumber(3534987534895));

// Part 3: Hotdogs
let pricePerHotDog;

const getHotDogPrice = (numberOfHotDogs) => {
  if (numberOfHotDogs < 5) {
    pricePerHotDog = 2;
    console.log(`The price per hotdog is ${pricePerHotDog}€!`);
  } else if (numberOfHotDogs >= 5 && numberOfHotDogs < 100) {
    pricePerHotDog = 1.5;
    console.log(`The price per hotdog is ${pricePerHotDog}€!`);
  } else if (numberOfHotDogs >= 100 && numberOfHotDogs < 1000000) {
    pricePerHotDog = 1;
    console.log(`The price per hotdog is ${pricePerHotDog}€!`);
  } else if (numberOfHotDogs >= 1000000) {
    pricePerHotDog = 0.5;
    console.log(`The price per hotdog is ${pricePerHotDog}€!`);
  }
};

console.log(getHotDogPrice(3));
console.log(getHotDogPrice(5));
console.log(getHotDogPrice(8));
console.log(getHotDogPrice(39));
console.log(getHotDogPrice(87));
console.log(getHotDogPrice(100));
console.log(getHotDogPrice(101));
console.log(getHotDogPrice(853));
console.log(getHotDogPrice(999));
console.log(getHotDogPrice(999999));
console.log(getHotDogPrice(1000000));
console.log(getHotDogPrice(43348573495));

// Part 4: Daytime
const currentHour = 12;

let statement = "";

currentHour < 17 ? statement = "Still need to learn..." : statement = "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName === "Roland" ? "Coach" : userName) + "!";

console.log(greeting);
