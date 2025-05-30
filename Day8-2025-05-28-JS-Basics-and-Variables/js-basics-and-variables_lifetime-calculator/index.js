console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.

console.log("Your current age is: " + currentAge);


const averageLifeSpan = 80;
const daysPerYear = 365;

const daysLived = currentAge * daysPerYear;

console.log (`You have lived ${daysLived} in total!`);

const remainingYears = averageLifeSpan - currentAge;
const remainingDays =  daysPerYear * remainingYears;

console.log (`You have ${remainingDays} days remaining! So... carpe diem! :)`);


const percentageOfLifeLived = (currentAge / averageLifeSpan) * 100;

console.log(`You have lived ${percentageOfLifeLived} percent of an average 80-year lifespan.`);

const averageSleepingDays =  daysLived / 3;

console.log(`You have spent roughly ${averageSleepingDays} days sleeping!`);
console.log("Damn! Aren't these numbers quite depressing?");




