// Change this value to test different "weather" conditions.
const weather = "snowy";

switch (weather) {
  case "sunny":
    console.log("It's sunny!");
    break;
  case "rainy":
    console.log("It's raining, don't forget your umbrella!");
    break;
  case "snowy":
    console.log("It's snowing, stay warm!");
    break;
  default:
    console.log("I'm not sure what the weather is like.");
}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;

let weatherConditions = "";

if (weather === "sunny" && temperature > 20) {
  weatherConditions = "warm";
} else if (weather === "sunny" && temperature <= 20) {
  weatherConditions = "chilly";
} else if (weather === "rainy") {
  weatherConditions = "rainy";
} else if (weather === "snowy" && temperature < 0) {
  weatherConditions = "snowy-cold";
} else if (weather === "snowy") {
  weatherConditions = "snowy";
} else {
  weatherConditions = "unknown";
}

switch (weatherConditions) {
  case "warm":
    console.log("It's sunny and warm!");
    break;
  case "chilly":
    console.log("It's sunny, but a bit chilly!");
    break;
  case "rainy":
    console.log("It's raining, don't forget your umbrella!");
    break;
  case "snowy-cold":
    console.log("Freezing snow!");
    break;
  case "snowy":
    console.log("It's snowing, stay warm!");
    break;
  default:
    console.log("I'm not sure what the weather is like.");
}
