// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  //1. Step - Initialize a variable to store the value of the max number
  //2. Step - Compare both parameters (num1 and num2) to see which is bigger.
  //3. Step - Store the bigger one in the variable
  //4. Step - Return the variable
  let maxNumber = num1 > num2 ? num1 : num2;
  return maxNumber;
}

console.log(maxOfTwoNumbers(5, 1));
console.log(maxOfTwoNumbers(1, 5));
console.log(maxOfTwoNumbers(10, 11));

// Find the longest word

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  //1. Step - Initialize a variable to store the value of the longest word
  //2. Step - Iterate over the array
  //3. Step - Compare the element's lengths and keep the longer one
  //4. Step - Return the variable
  let longestWord = "";

  words.forEach((word) => {
    longestWord = word.length > longestWord.length ? word : longestWord;
  });

  return longestWord;
}

console.log(findLongestWord(words));

// Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  //1. Step - Initialize a variable to store the value of the sum of numbers
  //2. Step - Iterate over the array
  //3. Step - Add the first number with the second
  //4. Step - Add the sum of that with the next number.. and so on
  //5. Step - Return the variable
  let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return sum;
}

console.log(sumNumbers(numbers));

// Calculate the average length of the words

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words) {
  //1. Step - Initialize a variable to store the value of the average length
  //2. Step - Iterate over the array
  //3. Step - Sum the string's length of each element in the array
  //4. Step - Divide the sum by the number of elements in the array
  //5. Step - Return the variable
  let totalStringLength = words.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.length;
  }, 0);

  let averageLength = totalStringLength / words2.length;
  return averageLength;
}

console.log(averageWordLength(words2));

// Unique arrays - return an array without duplicates

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  //1. Step - Initialize a variable to store a new array
  //2. Step - Iterate over the words3 array
  //3. Step - Add elements to the new array
  //4. Step - If a new element was already added, don't add it
  //5. Step - Return the new array
  let uniqueArray = [];

  words.forEach((word) => {
    if (!uniqueArray.includes(word)) {
      uniqueArray.push(word);
    }
  });
  return uniqueArray;
}

console.log(uniquifyArray(words3));

// Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(haystack, needle) {
  //1. Step - Initialize a variable to store the word you are looking for
  //2. Step - Iterate over the wordsFind array
  //3. Step - Check if any of the elements match the word you are looking for
  //4. Step - Return the word

  let findWord = haystack.find((element) => element === needle);
  return findWord;
}

console.log(doesWordExist(wordsFind, "trouble"));

// Count repetition

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  //1. Step - Initialize a variable to store the number of times a word appears
  //2. Step - Iterate over the wordsCount array
  //3. Step - Check how many times a specific word comes up
  //4. Step - Update the variable name with the number
  //5. Step - Return the number variable
  let count = 0;

  haystack.forEach((word) => {
    if (word === needle) {
      count++;
    }
  });

  return count;
}

console.log(howManyTimes(wordsCount, "matter"));

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  //1. Step - Initialize a variable to store the sum
  //2. Step - Iterate over the mixedArray
  //3. Step - Check what data type each element has
  //4. Step - If it is a string, add the length
  //5. Step - If it is a number, add the value normally
  //6. Step - If it is a boolean, add 1 for true and 0 for false
  //7. Step - Return the number variable with the sum
  let sum = 0;

  array.forEach((element) => {
    switch (typeof element) {
      case "string":
        sum += element.length;
        break;
      case "number":
        sum += element;
        break;
      case "boolean":
        sum += element ? 1 : 0;
        break;
    }
  });

  console.log(sum);
}

sum(mixedArray);

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  //1. Step - Initialize a variable to track the greatest product
  //2. Step - Iterate over each row in the nested arrays
  //3. Step - Iterate over each column in the nested arrays
  //3. Step - Check what data type each element has
  //4. Step - If it is a string, add the length
  //5. Step - If it is a number, add the value normally
  //6. Step - If it is a boolean, add 1 for true and 0 for false
  //7. Step - Return the number variable with the sum
  let maxProduct = 0;

  //Looping the outer arrays
  for (let i = 0; i < matrix.length; i++) {
    //Looping the inner arrays horizontally, each row
    for (let j = 0; j < matrix[i].length - 3; j++) {
      const product = 
      matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
      
      if (maxProduct < product) {
      maxProduct = product;
    }
    }
  }

  //Looping the outer arrays
  for (let i = 0; i < matrix.length - 3; i++) {
    //Looping the inner arrays vertically, each column
    for (let j = 0; j < matrix[i].length; j++) {
      const product =
        matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
      if (maxProduct < product) {
        maxProduct = product;
      }
    }
  }
console.log(maxProduct);
}

greatestProduct(matrix);

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};
