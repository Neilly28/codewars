"use strict";
console.log("hello from codewars practice");

("use strict");
console.log("hello from js copy!");

//CODING CHALLENGE 1

//1. store Mark and Johns mass and height as variables
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;
console.log(massMark, heightMark);
console.log(massJohn, heightJohn);

//2. calculate their BMI
const bmiMark = Math.trunc(massMark / heightMark ** 2);
const bmiJohn = Math.trunc(massJohn / heightJohn ** 2);

console.log(bmiMark, bmiJohn);

//3. Create Boolean
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

//4. Print message to console
console.log("IF STATEMENT STARTS HERE");
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})`);
}

console.log("TERNARY STARTS HERE");
bmiMark > bmiJohn
  ? console.log(
      `Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`
    )
  : console.log(
      `John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})`
    );

//FUNCTION PRACTICE
//1. Declare a function fruitProcessor which takes apples and oranges as arguments and returns them as juice.

const fruitProcessor = function (apples, oranges) {
  console.log(apples, oranges);
  const juice = `I have juice with ${apples} apples and ${oranges} oranges.`;
  console.log(juice);
  return juice;
};

const firstJuice = fruitProcessor(5, 9);
console.log(firstJuice);
console.log(`My very first juice is this: ${firstJuice}`);

// Functions coding challenge
//1. Create an arrow function calcAverage to calculate the average of 3 scores.

const calcAverage = (score1, score2, score3) => (score1, score2, score3) / 3;

//2. Use the function to calculate the average score of both teams.
const dolphinScore = Math.trunc(calcAverage(44, 23, 71));
const koalaScore = Math.trunc(calcAverage(65, 54, 49));
console.log(dolphinScore, koalaScore);

//3. Create a function checkWinner that takes the average score of both teams as parameters (avgDolphins, avgKoalas)
//and then logs the winner to the console, together with the victory points.
//example: Koalas win (30 vs. 13)

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("It's a tie! Humanity loses.");
  }
};

checkWinner(dolphinScore, koalaScore);

//IRONHACK PREWORK
//1. Create a function named calculateHours that: has two parameters hoursPerDay and days ( in that order), representing the numbers to multiply.

const calculateHours = function (hoursPerDay, days) {
  //2. calculates the total working hours by multiplying the numbers provided.
  return hoursPerDay * days;
};

//3. returns the number of total working hours. Important: You must use the keyword return to return the value from the function. Tests can only check the output value that your function returns. Any console.log output will be ignored.

//Task Instructions
//1. Create a function named milesToKilometers that: has 1 parameter named miles, representing the number of miles to convert into kilometers.

const milesToKilometers = function (miles) {
  //2. checks if the miles argument is provided,
  //3. if no argument is provided for miles, the function should return a number 1.60934. Hint: You can check this article explaining how to check if an argument is provided.
  if (!miles) {
    return 1.60934;
    //4. converts the number of miles into kilometers using a conversion rate where 1 mile = 1.60934 km. returns the number of kilometers.
  } else {
    return miles * 1.60934;
  }
};

const result = milesToKilometers();
console.log(result);

//Primitives practice
console.log(8 % 2 === 0);
console.log(8 % 3 === 0);

//odd or even
if (5 % 2 === 0) {
  console.log("EVEN");
} else if (5 % 2 === 1) {
  console.log("ODD");
}

const phrase = "Don't be evil";

console.log(phrase.indexOf("Don't")); // => 0

console.log(phrase.indexOf("be")); // => 6

//IMPORTANT ANNOUNCEMENT
const message = "important announcement!";
//1. Your task is to convert an existing string to uppercase:
//2. Using the method .toUpperCase() convert the string stored in the variable message to uppercase.
//3. Store the uppercased string to a new variable called urgentMessage.
//4. Use console.log() to print the new uppercased string stored in the variable urgentMessage

const urgentMessage = message.toUpperCase();
console.log(urgentMessage);

//capitallizing names
const firstName = "ava";
const surname = "scott";
//1. Format the string name and convert its starting letter to uppercase. You can do this using the string bracket notation[] and the string methods .toUpperCase() and .slice().
const nameFormatted =
  firstName[0].toUpperCase() + firstName.slice(1, firstName.length);
console.log(nameFormatted);
//2. Store the uppercased string to a new variable called nameFormatted. Expected result: 'ava' --> 'Ava'
//3. Next, format the string surname and convert its starting letter to uppercase. Again, you should use the string bracket notation[] and the string methods .toUpperCase() and .slice(). Expected result: 'scott' --> 'Scott'
//4. Store the uppercased string to a new variable called surnameFormatted.
const surnameFormatted =
  surname[0].toUpperCase() + surname.slice(1, surname.length);
console.log(surnameFormatted);
//5. Using console.log() and concatenation, print out the nameFormatted and surnameFormatted together, on the same line.
console.log(`${nameFormatted} ${surnameFormatted}`);

//TRUTHY AND FALSEY
console.log(true && false); // ==> ? false
console.log(11 % 3 === 2); // ==> ? true
console.log(false || true); // ==> ? true
console.log(!true || false); // ==> ? false
console.log(17 == "17"); // ==> ? true
console.log(123 === "123"); // ==> ? false

//CONDITIONALS
let favoriteNum;
if (favoriteNum !== undefined) {
  // Check if favoriteNumber has been initialized
  console.log("favoriteNum * 2 = ", favoriteNum * 2);
}

// Solution

const tax = 21;
let price;
price = 36;

// Your code here:
if (price === undefined) {
  console.log("Can't add tax if price is undefined!");
} else {
  const priceWithTax = price + price * tax;
  console.log(`The price with tax is ${priceWithTax} USD`);
}

//rock paper scissors
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

// these two variables will be changed to test the conditional
let firstPlayerChoice = scissors;
let secondPlayerChoice = rock;

let firstPossibility;
let secondPossibility;
let thirdPossibility;

let fourthPossibility;
let fifthPossibility;
let sixthPossibility;

let seventhPossibility;

// 3. store the first scenario in the firstPossibility variable
firstPossibility =
  firstPlayerChoice === rock && secondPlayerChoice === scissors;
secondPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
thirdPossibility =
  firstPlayerChoice === scissors && secondPlayerChoice === paper;

fourthPossibility = firstPlayerChoice === rock && secondPlayerChoice === paper;
fifthPossibility =
  firstPlayerChoice === paper && secondPlayerChoice === scissors;
sixthPossibility =
  firstPlayerChoice === scissors && secondPlayerChoice === rock;

seventhPossibility = firstPlayerChoice === secondPlayerChoice;

if (firstPossibility || secondPossibility || thirdPossibility) {
  console.log("Player 1 wins!");
} else if (fourthPossibility || fifthPossibility || sixthPossibility) {
  console.log("Player 2 wins!");
} else if (seventhPossibility) {
  console.log("It is a TIE!");
} else {
  console.log("TRY AGAIN");
}

//WEREWOLF
//1. Werewolves are hiding among us! However, they are terrible at naming themselves. All their names start with "were", like for example "werebob", "wereandy" and "weresarah".

//2. Implement a function named werewolfCheck that receives an argument name, which is a string and checks if it begins with "were".

const werewolfCheck = function (name) {
  const firstFour = name.slice(0, 4);
  console.log(firstFour);
  if (firstFour === "were") {
    return "it is a werewolf";
  } else {
    return "just a regular person";
  }
};

werewolfCheck("werreishshseil");

//3. If the provided name begins with were the function should return a string "it is a werewolf", otherwise it should return a string "just a regular person".

//switch
function daysInMonth(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;

    case 4:
    case 6:
    case 9:
    case 11:
      return 30;

    case 2:
      return 28;

    default:
      return "Invalid input";
  }
}

//arrays practice
const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

/* // Your code here:
for (let i = 0; i < prices.length; i++) {
  sum += prices[i];
  sum = Math.round(sum);
}
console.log(`The sum is ${sum}`); */

//2. Swap First and Last
//1.Your task is to create an array and manipulate its elements:
//2/ To start, open a new pen on Codepen.
//3. Create an array myArray with any 5 elements. Your choice of type and value!

const myArray = ["LeBron", "AD", "Lonnie", "Russ", "Bev"];
console.log(myArray[0]);
//4. Remove the last element from the array and save it into a variable named lastElement

console.log(myArray[myArray.length - 1]);
const lastElement = myArray.pop();
console.log(lastElement);

//5. Remove the first element from the array and save it into a variable named firstElement
console.log(myArray);
const firstElement = myArray.shift();
console.log(firstElement);
console.log(myArray);

//6. Add the value of lastElement to the start of the array
myArray.unshift(lastElement);
console.log(myArray);

//7. Add the value of firstElement to the end of the array
console.log(myArray);
myArray.push(firstElement);
console.log(myArray);

//ARRAY ASSESMENT
//1. Create a function named sumArray that receives an array of numbers as an argument.
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}
console.log(sumArray([]));

//3. Additionaly, the function should return 0, when an empty array [] is passed as the argument.

// Create function to count how many smileys are in a message.

// const countSmileys = function (message) {
//   let sum = 0;
//   for (let i = 0; i < message.length; i++) {
//     if (message[i] === ":" && message[i + 1] === ")") {
//       sum++;
//     }
//   }
//   console.log(`The sum of smileys is ${sum}`);
//   return sum;
// };

// countSmileys("hello there :) the angel from :) nightmer :)");

//Loop practice
//1. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

const checkY = function (arr) {
  if (arr.includes("y")) {
    console.log("yes");
  } else {
    console.log("no");
  }
};

checkY("helloz yr ut hter");

// function solution(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString = newString + str[i];
//   }
//   console.log(newString);
//   return newString;
// }

// solution("world");

function greet(name) {
  return `Hello ${name} how are you doing today?`;
  //your code here
}

sumMix([1, 2, 3]);

function sumMix(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseFloat(arr[i]);
  }
  console.log(`The sum is ${sum}`);
  return sum;
}

function simpleMultiplication(number) {
  // your code........
  let product = 0;
  if (number % 2 === 0) {
    product = number * 8;
  } else {
    product = number * 9;
  }
  console.log(product);
  return product;
}

simpleMultiplication(100);

const countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  console.log(str);
  return str;
};
countSheep(0);

const rps = function (p1, p2) {
  if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p1 === p2) {
    return "Draw!";
  } else {
    return "Player 2 won!";
  }
};

function repeatStr(n, s) {
  let word = "";
  for (let i = 0; i < n; i++) {
    word += s;
  }
  console.log(word);
  return word;
}

repeatStr(2, "sex");

function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  console.log(inputString[0]);
  return parseInt(inputString[0]);
}

getAge("33 years old");

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i] / classPoints.length;
  }
  const classAvg = sum;
  console.log(`the average class score is ${classAvg}`);
  return classAvg < yourPoints ? true : false;
}

betterThanAverage([10, 15, 23], 100);

//OBJECTS
const person = {
  name: "Neil",
  age: 34,
};

console.log(person.name, person.age);

const product = {
  brand: "Apple",
  model: "MacBook Air",
  available: false,
  price: 1200,
  tags: ["apple", "laptop", "mac"],
};

console.log(product);
console.log(Object.keys(product));
console.log(Object.values(product));
console.log(product);

product.year = 2019;
console.log(product);
product.available = true;
console.log(product);
delete product.tags;

if (product.price > 1000) {
  product.discountPercentage = 10;
  product.price = product.price - product.price * product.discountPercentage;
}

//ASSESMENT
//implement the function named printBio which has one parameter user.

const user = {
  name: "Bob",
  surname: "Martin",
  age: 25,
  address: {
    country: "USA",
  },
};

function printBio(user) {
  // Your code here
  console.log(
    `This is ${user.name} ${user.surname} from ${user.address.country}.`
  );
  return `This is ${user.name} ${user.surname} from ${user.address.country}.`;
}

printBio(user);

console.log(user.name);
console.log(user.address.country);

const pizzas = [
  { type: "pineapple", size: "M" },
  { type: "pineapple", size: "S" },
  { type: "banana", size: "S" },
  { type: "pineapple", size: "L" },
];

console.log(pizzas);

console.log("FUNCTION RETURN STARTS HERE");

function filterPizzas(pizzas) {
  // your code
  let arr = [];
  for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].type !== "pineapple") {
      arr.push(pizzas[i]);
    }
  }
  console.log(arr);
  return arr;
}

filterPizzas(pizzas);

function areYouPlayingBanjo(name) {
  // Implement me
  name[0].toUpperCase === "R"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

areYouPlayingBanjo("Ringo");

filter_list([1, 2, "a", "b"]) == [1, 2];
filter_list([1, "a", "b", 0, 15]) == [1, 0, 15];
filter_list([1, 2, "aasf", "1", "123", 123]) == [1, 2, 123];

function filter_list(x) {
  // Return a new array with the strings filtered out
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      arr.push(x[i]);
    }
  }
  console.log(arr);
  return arr;
}

function removeChar(str) {
  //You got this!
  const p = str.slice(1, -1);
  console.log(p);
  return p;
}

removeChar("Hello");

input: [1, 2, 3, 4];

function pickOdd(arr) {
  // Your code here
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

pickOdd([2, 10, 2, 6]);

let matrix = [
  [
    { category: "tech", product: "iPhone X", price: 320 },
    { category: "food", product: "Cheerios", price: 5 },
  ],

  [
    { category: "food", product: "Snickers", price: 1.5 },
    { category: "tech", product: "Air Pods", price: 129 },
  ],
];

console.log("MATRIX LOG STARTS HERE");
console.log(matrix[0]);

//FINAL
function sortProducts(matrix) {
  // Your code here
  let newObject = {
    tech: [],
    food: [],
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++)
      if (matrix[i][j].category === "tech") {
        newObject.tech.push(matrix[i][j]);
      } else {
        newObject.food.push(matrix[i][j]);
      }
  }
  console.log(newObject);
  return newObject;
}

sortProducts(matrix);

//Codewars
function digitize(n) {
  //code here
  const arr = Array.from(n);
  console.log(arr);
  return arr;
}

digitize(12);

function setAlarm(employed, vacation) {
  if (employed && !vacation) {
    return true;
  } else {
    return false;
  }
}

function findAverage(array) {
  // your code here
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    avg += array[i] / array.length;
  }
  console.log(avg);
  return avg;
}

findAverage([]);

// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// solution("abc", "");

const friends = ["Ryan", "Kieran", "Mark"];
console.log(friends);

function friend(friends) {
  //your code here
  let arr = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      arr.push(friends[i]);
    }
  }
  console.log(arr);
  return arr;
}

friend(friends);

function rentalCarCost(d) {
  // Your solution here
  let total = 40;
  if (d >= 7) {
    total = total * d - 50;
  } else if (d >= 3) {
    total = total * d - 20;
  } else {
    total = total * d;
  }
  console.log(total);
  return total;
}

rentalCarCost(7);

function abbrevName(name) {
  // code away
  const substr = name.indexOf(" ");
  const last = name[substr + 1].toUpperCase();
  const first = name[0].toUpperCase();
  const full = `${first}.${last}`;
  console.log(full);
  return full;
}

abbrevName("neil Pilarca");

function smash(words) {
  console.log(words.join(" "));
  return words.join(" ");
}

smash(["hello", "world", "this", "is", "great"]);

function highAndLow(numbers) {
  const arr = numbers.split();
  console.log(arr);
  const newArr = arr.map(Number);
  console.log(newArr);
}

highAndLow("1 2 3 4 5");

function DNAStrand(dna) {
  //your code here
  let str = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      str += "T";
    } else if (dna[i] === "T") {
      str += "A";
    } else if (dna[i] === "C") {
      str += "G";
    } else {
      str += "C";
    }
  }
  console.log(str);
  return str;
}

DNAStrand("GTAT");

function countPositivesSumNegatives(input) {
  // your code here
  let sum1 = 0;
  let sum2 = 0;
  let arr = [];

  if (input !== null) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        sum1++;
      } else {
        sum2 += input[i];
      }
    }
    if (sum1 || sum2 !== 0) {
      arr.push(sum1, sum2);
    }
  }

  console.log(sum1, sum2);
  console.log(arr);
  return arr;
}

countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);

countPositivesSumNegatives([]);

function grow(x) {
  let prod = 1;
  for (let i = 0; i < x.length; i++) {
    prod *= x[i];
  }
  console.log(prod);
  return prod;
}

grow([1, 2, 3, 4]);

function updateLight(current) {
  //your code here!
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}

function areaOrPerimeter(l, w) {
  // Return your answer
  let answer = 0;
  if (l === w) {
    answer = l * w;
  } else {
    answer = l * 2 + w * 2;
  }
  console.log(`The answer is ${answer}`);
  return answer;
}

areaOrPerimeter(6, 10);
areaOrPerimeter(3, 3);

var number = function (array) {
  //your awesome code here
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(`${i + 1}: ${array[i]}`);
  }
  console.log(arr);
  return arr;
};

number(["a", "b", "c"]);
number([]);

function booleanToString(b) {
  //your code here
  if (b === true) {
    return "true";
  } else {
    return "false";
  }
}

booleanToString(true);

function minMax(arr) {
  let newArr = [];
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  newArr.push(min, max);
  console.log(newArr);
  return newArr;
}

minMax([1]);

// Sum Numbers
/* function sum(numbers) {
  "use strict";
  let x = 0;
  for (let i = 0; i < numbers.length; i++) {
    x += numbers[i];
  }
  console.log(x);
  return x;
}

lol([1, 5.2, 4, 0, -1]); */

function findNeedle(haystack) {
  // your code here
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      console.log(`found the needle at position ${[i]}`);
      return `found the needle at position ${[i]}`;
    }
  }
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);

function removeExclamationMarks(s) {
  console.log(s.replace(/!/g, ""));
  return s.replace(/!/g, "");
}

removeExclamationMarks("!!Hel!lo World!!");

function maps(x) {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2);
  }
  console.log(arr);
  return arr;
}

maps([1, 2, 3]);

function disemvowel(str) {
  console.log(str.replace(/[aeiou]/gi, ""));
  return str.replace(/[aeiou]/gi, "");
}

disemvowel("This website is for losers LOL!");

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  let sum = 0;
  sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  console.log(sum);
  return sum;
}

goals(5, 10, 2);

function points(games) {
  let score = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      score += 3;
    } else if (games[i][0] < games[i][2]) {
      score += 0;
    } else if (games[i][0] === games[i][2]) {
      score++;
    }
  }
  console.log(score);
  return score;
}

points(["3:1", "2:2", "0:1"]);

function getGrade(s1, s2, s3) {
  let letter = "";
  let avg = (s1 + s2 + s3) / 3;
  if (avg >= 90) {
    letter = "A";
  } else if (avg >= 80 && avg < 90) {
    letter = "B";
  } else if (avg >= 70 && avg < 80) {
    letter = "C";
  } else if (avg >= 60 && avg < 70) {
    letter = "D";
  } else if (avg < 60) {
    letter = "F";
  }
  console.log(avg, letter);
  return letter;
  // Code here
}

getGrade(60, 91, 60);

// var humanYearsCatYearsDogYears = function (humanYears) {
//   // Your code here!S
//   let cat = 15;
//   let dog = 0;
//   if (humanYears === 2) {
//     cat += 9;
//   } else if (humanYears > 2) {
//     cat += 4;
//   }
//   console.log(cat);
//   return cat;
// };

// humanYearsCatYearsDogYears(7);

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    console.log(n * m);
    return n * m;
  }
}

function doubleChar(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
    arr.push(str[i]);
  }
  console.log(arr);
  return arr;
  // Your code here
}

doubleChar("hello");

/* var summation = function (num) {
  // Code here
  let sum = 0;
  for(let i = 0, i < num;)
  sum = sum + num - 1 + num;
  console.log(sum);
  return sum;
};

summation(8); */

function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  console.log(arr);
  return arr;

  // your code here
}

between(9, 19);

function arithmetic(a, b, operator) {
  let num = 0;
  if (operator === "add") {
    num = a + b;
  } else if (operator === "subtract") {
    num = a - b;
  } else if (operator === "multiply") {
    num = a * b;
  } else if (operator === "divide") {
    num = a / b;
  }
  console.log(num);
  return num;
  //your code here!
}

arithmetic(5, 2, "divide");

function XO(str) {
  //code here
  let sumx = 0;
  let sumy = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "X") {
      sumx++;
    } else if (str[i] === "o" || str[i] === "O") {
      sumy++;
    }
  }
  if (sumx === sumy) {
    return true;
  } else if (sumx !== sumy) {
    return false;
  } else if (sumx === undefined || sumy === undefined) {
    return true;
  }
}

function duplicateEncode(word) {
  // ...
  let lowerWord = word.toLowerCase();
  let str = "";
  for (let i = 0; i < lowerWord.length; i++) {
    if (
      lowerWord.indexOf(lowerWord[i]) !== lowerWord.lastIndexOf(lowerWord[i])
    ) {
      str += ")";
    } else {
      str += "(";
    }
  }
  console.log(str);
  console.log(typeof str);
  return str;
}
duplicateEncode("rEcede");

// function duplicateCount(text) {
//   // ...
//   let lowerText = text.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < lowerText.length; i++) {
//     if (
//       lowerText.indexOf(lowerText[i]) !== lowerText.lastIndexOf(lowerText[i])
//     ) {
//       true;
//     }
//   }
//   console.log(count);
//   console.log(typeof count);
//   return count;
//   //...
// }

// duplicateCount("aabbcde");

// const duplicateCount = (string) => {

//   // makes an array all lowercase and sorts the array in alpha order for easy comparrison
//   let newString = string.toLowerCase().split('').sort();

//   // this array will house the duplicated values so we can
//   // get the length of it (or the number of duplicated characters).
//   let newArray = []

//   // set a loop for the array
//   for(i = 0; i < newString.length; i++){
//      // if the current element equals the following element the push it to the new array AND
//      // ONLY if the new array doesn't already include the current element
//      if(newString[i] === newString[i + 1] && !newArray.includes(newString[i])){
//          // push elements to new array
//          newArray.push(newString[i])
//      }
//   }
//   // return the number of elements in the array to represent the number characters that were duplicated
//   return newArray.length
// }

function findUniq(arr) {
  // do magic
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}

findUniq([1, 1, 1, 2, 1, 1]);

function oddOrEven(array) {
  //enter code here
  let sum = 0;
  let ans = "";
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (sum % 2 === 0) {
    ans = "even";
  } else {
    ans = "odd";
  }
  console.log(sum, ans);
  return ans;
}

oddOrEven([0, 1, 4]);

function isPangram(string) {
  //...
  let str = string.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
}

isPangram("The quick brown fox jumps over the lazy dog");

function sortArray(array) {
  // Return a sorted array.
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      console.log("START HERE");
      console.log(array[i]);
      arr.push(array[i]);
      arr.sort();
    } else {
      arr.splice(array[i], 0, array[i]);
    }
  }
  console.log(arr);
  return arr;
}
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

// arr.splice(2, 0, "Lene");

function isIsogram(str) {
  //...
  let newstr = str.toLowerCase();
  for (let i = 0; i < newstr.length; i++) {
    if (newstr.indexOf(newstr[i]) !== newstr.lastIndexOf(newstr[i])) {
      return false;
    }
  }
  return true;
}

// function findShort(s) {
//   console.log(s);
//   const arr = s.split(" ");
//   console.log(arr);
//   arr.sort((a, b) => a.length - b.length);
//   console.log(arr);
//   return arr;
// }

// findShort("bitcoin take over the world maybe who knows perhaps");

// function findShort(s){
// 	var arr = s.split(' ');
// 	var smallest = arr[0];
// 	for (var i = 0; i < arr.length; i++) {
// 		if(arr[i].length < smallest.length){
// 			smallest = arr[i];
// 		}
// 	}
// 	return smallest.length;
// }

/* werewolfCheck (name) { 
if (name.slice(0,4) === 'were'){
      return "it is a werewolf";
     } else {
 return "just a regular person";
}}
 */

const args = [34, 55, 13, 88, 28];

function findSmallestInt(args) {
  console.log(Math.min(...args));
  return Math.min(args);
}

findSmallestInt(args);

function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    return true;
  } else {
    return false;
  }
}

// const word = "hello";
// const newWord = word.split("");
// const revWord = newWord.reverse();
// const finalWord = revWord.join("");

const word = "Madam";
const newWord = word.split("").reverse().join("");

console.log(word, newWord);

// function isPalindrome(x) {
//   let y = x.split("");
//   if (word === finalWord) {
//     return true;
//   } else {
//     return false;
//   }
// }

// isPalindrome("hello");

function validatePIN(pin) {
  //return true or false
  let ans = "";
  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      if (typeof pin[i] === "Number") {
        ans = true;
      } else {
        ans = false;
      }
    }
  } else {
    ans = false;
  }
  console.log(ans);
  return ans;
}

validatePIN(11223344);

// function correct(string) {
//   // your code here
//   let word = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "0") {
//       word += string[i].replace("0", "O");
//     } else if (string[i] === "5") {
//       word += string[i].replace("5", "S");
//     } else if (string[i] === "1") {
//       word += string[i].replace("1", "I");
//     } else {
//       word += string[i];
//     }
//   }
//   console.log(word);
//   return word;
// }

// correct("51NGAP0RE");

function correct(string) {
  // your code here
  return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");
}

correct("51NGAP0RE");

// var number = function (busStops) {
//   // Good Luck!
//   let sum = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     sum += busStops[i];
//   }
//   console.log(sum);
//   return sum;
// };

// const arr = [
//   [10, 3],
//   [3, 5],
// ];
// console.log(arr[0][0], arr[0][1]); //10 and 3
// console.log(arr[0][0], arr[1][1]); //10 and 5
// console.log(arr[0][0] - arr[0][1] + arr[1][0] - arr[1][1]);

// var number = function (busStops) {
//   let sum = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     for (let j = 0; j < busStops.length; j++) {
//       sum = busStops[i][i] - busStops[j][j + 1];
//     }
//   }
//   console.log(sum);
//   return sum;
// };

// number([
//   [10, 0],
//   [3, 5],
//   [5, 8],
// ]);

// var number = function(busStops){
// 	var totalPeople = 0;
//   for (var i=0; i<busStops.length; i++) {
//   	totalPeople += busStops[i][0];
//     totalPeople -= busStops[i][1];
//   }
//   return totalPeople;
// }

function gooseFilter(birds) {
  let arr = [];
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  for (let i = 0; i < birds.length; i++) {
    for (let j = 0; j < geese.length; j++) {
      if (birds[i] !== geese[j]) {
        arr.push(birds[i]);
      } else {
        arr.push("");
      }
    }
    console.log(arr);
    return arr;

    // return an array containing all of the strings in the input array except those that match strings in geese
  }
}

gooseFilter([
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
]);

function stray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      console.log(numbers[i]);
      return numbers[i];
    }
  }
}

stray([17, 17, 3, 17, 17, 17, 17]);

// function wave(str) {
//   let word = "";
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     word = word + str[i].toUpperCase();
//     arr.push(str[i].toUpperCase());
//   }
//   // Code here
//   console.log(word);
//   return arr;
// }

// wave("hello");

function greet(name, owner) {
  // Add code here
  let msg = "";
  if (name === owner) {
    msg = "Hello boss";
  } else {
    msg = "Hello guest";
  }
  console.log(msg);
  return msg;
}

greet("Greg", "Daniel");

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i][0] === ":" || arr[i][0] === ";") &&
      (arr[i][1] === ")" || arr[i][1] === "D")
    ) {
      sum++;
    } else if (
      (arr[i][0] === ":" || arr[i][0] === ";") &&
      (arr[i][1] === "-" || arr[i][1] === "~") &&
      (arr[i][2] === ")" || arr[i][2] === "D")
    ) {
      sum++;
    }
  }
  console.log(`there are ${sum} smileys`);
  return sum;
}

countSmileys([":D", ":~)", ";~D", ":)"]);

// const smile = [":D", ":~)", ";~D", ":)"];
// console.log(smile);
// console.log(smile[0]);
// console.log(smile[3]);

const arr = [100, 23, 31, 14, 5000];
console.log(Math.min(...arr));

function removeEveryOther(arr) {
  //your code here
  for (let i = 1; i <= arr.length; i++) {
    arr.splice(i, 1);
  }
  console.log(arr);
  return arr;
}

removeEveryOther([["Goodbye"], { Great: "Job" }]);

function hero(bullets, dragons) {
  //Get Coding!
  if (dragons * 2 > bullets) {
    return false;
  } else {
    return true;
  }
}

// const lol = [2, 3, 1];
// console.log(lol.slice(1, 2));
// console.log(lol);

function gimme(triplet) {
  triplet.sort(function (a, b) {
    let arr = a - b;
    return arr;
  });
  console.log(arr);
  return arr;
}

gimme([2, 3, 1]);

function noSpace(x) {
  let str = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      str += x[i];
    }
  }
  console.log(str);
  return str;
}

const stringToNumber = function (str) {
  // put your code here
  return Number(str);
};

function sumArray(array) {
  let sum = 0;
  if (array === null) {
    sum = 0;
  } else {
    let min = Math.min(...array);
    let max = Math.max(...array);
    for (let i = 0; i < array.length; i++) {
      if (
        array[i] !== min &&
        array[i] !== max &&
        array.indexOf(min) === array.lastIndexOf(min) &&
        array.indexOf(max) === array.lastIndexOf(max)
      ) {
        sum += array[i];
      }
    }
  }
  console.log(sum);
  return sum;
}

sumArray([0, 1, 6, 10, 10]);

// const boy = [6, 2, 1, 8, 10];
// console.log(boy);
// console.log(Math.min(...boy));
// console.log(Math.max(...boy));

String.prototype.isUpperCase = function (x) {
  // your code here
  if (x === x.toUpperCase()) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

String.prototype.isUpperCase("HELLO I AM DONALD");

function move(position, roll) {
  // return the new position
  return position + roll * 2;
}

function feast(beast, dish) {
  //your function here
  if (
    beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
}

function removeUrlAnchor(url) {
  // TODO: complete
  return url.split("#")[0];
}

// function removeExclamationMarks(s) {
//   console.log(s.replace(/!/g, ""));
//   return s.replace(/!/g, "");
// }

// const url = "www.codewars.com#about";
// console.log(url);
// const newUrl = url.split("#");
// console.log(newUrl[0]);

function reverseWords(str) {
  // Go for it
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// const str = "This is an example!";
// // console.log(str);
// // console.log(str.split(" "));
// // console.log(str.split(" ")[0]);
// console.log(str); //input
// console.log(str.split("")); //split by letter into array
// console.log(str.split("").reverse()); //reverse the array order
// console.log(str.split("").reverse().join("")); //join by letters
// console.log(str.split("").reverse().join("").split(" ")); //split by words into array
// console.log(str.split("").reverse().join("").split(" ").reverse()); //reverse the array
// console.log(str.split("").reverse().join("").split(" ").reverse().join(" ")); //join by words

// console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));

const reverseSeq = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.unshift(i);
  }
  console.log(arr);
  return arr;
};

reverseSeq(5);

function boolToWord(bool) {
  //...
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}
boolToWord(true);

function check(a, x) {
  // your code here
  if (a.includes(x)) {
    return true;
  } else {
    return false;
  }
}

function pipeFix(numbers) {
  let arr = [];
  for (let i = 0; i <= Math.max(...numbers); i++) {
    arr.push(numbers[i]);
  }
  console.log(arr);
  return arr;
}

pipeFix([6, 9]);

function lovefunc(flower1, flower2) {
  // moment of truth
  if (flower1 % 2 === 0 && flower2 % 2 === 1) {
    return true;
  } else if (flower1 % 2 === 1 && flower2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function getCount(str) {
  sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      sum++;
    }
  }
  console.log(sum);
  return sum;
}

function order(words) {
  // ...

  let arr = words.split(" ").slice(" ");
  console.log(arr);
}

order("is2 Thi1s T4est 3a");

// function findOdd(A) {
//   //happy coding!
//   let sum = 0;
//   for (let i = 0; i<A.length; i++) {
//     if (A.indexOf(A[i]) === A.lastIndexOf(A[i])){
//       sum++
//     }
//   }
//   return 0;
// }

function accum(s) {
  // your code
  let arr = s.split("");
  let word = "";
  let newArr = [word];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    word = arr[0] + arr[0];
  }
  console.log(word);
}

accum("abcd");

function positiveSum(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
  return sum;
}

// function high(x){
//   let score = 0;
//   for(let i = 0; i<x.length; i++){
//     for(let j = 0; j<x.length; j++) {
//       if(x[i][j])
//     }

//   }

// }
// function descendingOrder(n){
//   //...
// }

const num = 123456789;
console.log(num);
const numArr = Array.from(String(num));
console.log(numArr);
const newNum = numArr.sort(function (a, b) {
  return b - a;
});
console.log(newNum);
const final = newNum.join("");
console.log(final);

function descendingOrder(n) {
  //...
  const nWord = String(n);
  const nWordArr = Array.from(nWord);
  const nNum = nWordArr.sort(function (a, b) {
    return b - a;
  });
  const ans = nNum.join("");
  const final = Number(ans);
  console.log(final);
  return final;
}

descendingOrder(145263);

function squareDigits(num) {
  let arr = Array.from(String(num));
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr[i]);
  }
  console.log(newArr);
  let ans = Number(newArr.join(""));
  console.log(ans);
  return ans;
}

squareDigits(9119);

function problem(x) {
  //your code here
  if (typeof x === "string") {
    console.log("Error");
    return "Error";
  } else {
    console.log(x * 50 + 6);
    return x * 50 + 6;
  }
}

problem(1);

function sumTwoSmallestNumbers(numbers) {
  //Code here
  let sum = 0;
  numbers.sort(function (a, b) {
    return a - b;
  });
  sum = numbers[0] + numbers[1];
  console.log(sum);
  return sum;
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77]);

let sona = [19, 5, 42, 2, 77];
console.log(
  sona.sort(function (a, b) {
    return a - b;
  })
);

// complete the function
function solution(string) {}

function openOrSenior(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      arr.push("Senior");
    } else {
      arr.push("Open");
    }
  }
  console.log(arr);
  return arr;
  // ...
}

openOrSenior([
  [3, 12],
  [55, 1],
  [91, -2],
  [53, 23],
]);

function nameShuffler(str) {
  //Shuffle It
  console.log(str.split(" ").reverse().join(" "));
  return str.split(" ").reverse().join(" ");
}

nameShuffler("john McClane");

function enough(cap, on, wait) {
  // your code here
  if (on + wait <= cap) {
    return 0;
  } else {
    return on + wait - cap;
  }
}

// function twoSort(s) {
//   let arr = s.split("");
// }

let data = [
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
];

function twoSort(s) {
  let str = "";
  let last = "";
  let jeans = "";
  let final = "";
  const arr = s.sort();
  for (let i = 0; i < arr.length; i++) {
    str = arr[0];
  }
  for (let j = 0; j < str.length - 1; j++) {
    jeans += str[j] + "***";
    last = str.split("").pop();
    final = jeans + last;
  }
  console.log(final);
  return final;
}

twoSort([
  "turns",
  "out",
  "random",
  "test",
  "cases",
  "are",
  "easier",
  "than",
  "writing",
  "out",
  "basic",
  "ones",
]);

// let text = "How are you doing today?";
// const lols = text.split(" ");
// console.log(lols);

function strCount(str, letter) {
  //code here
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (letter === str[i]) {
      sum++;
    }
  }
  console.log(sum);
  return sum;
}

function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

function likes(names) {
  // TODO
  if (names.length === 1) {
    console.log(`${names} likes this`);
    return `${names} likes this`;
  } else if (names.length === 2) {
    console.log(`${names[0]} and ${names[1]} like this`);
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    console.log(
      `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    );
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  } else if (names.length === 0) {
    console.log("no one likes this");
    return "no one likes this";
  }
}

likes([]);
likes(["Jacob", "Alex"]);
likes(["Max", "John", "Mark"]);
likes(["Alex", "Jacob", "Mark", "Max"]);

// const sonic = ["Jacob", "Alex"];
// console.log(sonic);
// console.log(sonic[0]);

// console.log(Math.floor(3.3));
// 3.3;

var isSquare = function (n) {
  if (Number.isInteger(Math.sqrt(n))) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

isSquare(16);

// console.log(Math.sqrt(9));

console.log("CHECK STARTS HERE");

function printerError(s) {
  // your code
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      sum++;
    }
  }
  console.log(sum);
}

printerError("aaabbbbhaijjjmp");
printerError("aaaxbbbbyyhwawiwjjjwwm");

// let test = "abcdefghijklm";
// console.log(test.includes("m"));
//

function doubleChar(str) {
  var word = "";
  for (var i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  }
  return word;
}

function reverse(string) {
  //your code here
  return string.split("").reverse().join("").split(" ").reverse().join("");
}

// function solution(nums) {
//   nums.sort(function (a, b) {
//     let arr = a.length - b.length;
//   });
//   console.log("solution starts here");
//   console.log(arr);
//   return arr;
// }

// solution([1, 5, 100, 99]);

function capitalize(s) {
  let str = "";
  let str2 = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      str = str + s[i].toUpperCase();
      str2 = str2 + s[i].toLowerCase();
    } else if (i % 2 === 1) {
      str = str + s[i].toLowerCase();
      str2 = str2 + s[i].toUpperCase();
    }
  }
  console.log(str, str2);
  let arr = [str, str2];
  console.log(arr);
  return arr;
}

capitalize("hello");
capitalize("abracadabra");

// //odd or even
// if (5 % 2 === 0) {
//   console.log("EVEN");
// } else if (5 % 2 === 1) {
//   console.log("ODD");
// }

// const capitalize = s => {
//   const arr = s.split('');
//   let a = '', b = '';

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2) {
//       a += arr[i];
//       b += arr[i].toUpperCase();
//     } else {
//       a += arr[i].toUpperCase();
//       b += arr[i];
//     }
//   }

//   return [a, b];
// };

function reverseList(list) {
  return list.reverse();
}

function stringToArray(string) {
  return string.split(" ");
}

function solve(s) {
  //..
  let upperCount = 0;
  let lowerCount = 0;
  let str = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upperCount++;
    } else {
      lowerCount++;
    }
  }
  console.log(upperCount, lowerCount);

  if (upperCount > lowerCount) {
    console.log(true);
    console.log(s.toUpperCase());
    return s.toUpperCase();
  } else {
    console.log(false);
    console.log(s.toLowerCase());
    return s.toLowerCase();
  }
}

solve("coDe");
solve("CODe");
solve("coDE");

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

function smallEnough(a, limit) {
  let checker = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      checker++;
    }
  }
  console.log(checker);
  return checker > 0 ? false : true;
}

smallEnough([66, 101], 200);
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100);

let chars = ["A", "B", "A", "C", "B"];
console.log(chars);
console.log(...new Set(chars));
let unique = [...new Set(chars)];
console.log(unique);

function distinct(a) {
  return [...new Set(a)];
}

function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  array.sort(function (a, b) {
    return a.length - b.length;
  });
  console.log(array);
  return array;
}

console.log("sorting starts here");
sortByLength(["Beg", "Life", "I", "To"]);

function getMiddle(s) {
  //Code goes here!
  if (s.length % 2 === 1) {
    console.log(s[Math.floor(s.length / 2)]);
    return s[Math.floor(s.length / 2)];
  } else {
    console.log(s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)]);
    return s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
  }
}

getMiddle("testing");

let c = "testing";
console.log(c);
console.log(c[Math.floor(c.length / 2)]);

let m = "script";
console.log(m);
console.log(m[Math.floor(c.length / 2) - 1] + m[Math.floor(c.length / 2)]);

// complete the function
function solution(string) {
  console.log(string.split(/(?=[A-Z])/g).join(" "));
  return string.split(/(?=[A-Z])/g).join(" ");
}

solution("camelCasing");

// let bark = "camelCasing";
// console.log(bark.split(/(?=[A-Z])/).join(" "));

function xor(a, b) {
  // TODO: Program Me
  if (a === b) {
    return false;
  } else {
    return true;
  }
}

function invert(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      newArr.push(Math.abs(array[i]));
    } else {
      newArr.push(-Math.abs(array[i]));
    }
  }
  console.log(newArr);
  return newArr;
}
invert([1, 2, 3, 4, 5]);
invert([1, -2, 3, -4, 5]);
invert([]);

// const invert = array => array.map(num => -num);

// let x = -5;
// let y = 6;
// console.log(Math.abs(x));
// console.log(-Math.abs(y));

// function domainName(url){
//   //your code here
// }

var capitals = function (word) {
  // Write your code here
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      arr.push(Number([i]));
    }
  }
  console.log(arr);
  return arr;
};

capitals("CodEWaRs");

// function findOdd(A) {
//   //happy coding!
//   let count = 0;
//   for (const element of A) {
//     if (A.includes("f")) {
//       count++;
//     }
//   }
//   console.log("the answer is below");
//   console.log(count);
//   return count;
// }

// findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);

// function incrementString(strng) {
//   // return incrementedString
//   for(let i = 0; i<strng.length; i++) {
//     if()
//   }

// }

function shortcut(string) {
  console.log(string.replace(/[aeiou]/g, ""));
  return string.replace(/[aeiou]/g, "");
}

shortcut("codewars");

function remove(string) {
  //coding and coding....
  let str = "";
  for (let i = 0; i < string.length; i++) {
    if (string[string.length - 1] === "!") {
      str = string.slice(0, -1);
    } else {
      str = string;
    }
  }
  console.log(str);
  return str;
}

remove("hiii!");
remove("Hi!!!");
remove("!Hi");
remove("!Hi!");
remove("Hi! Hi!");
remove("Hi");
// let a = "Hi!!r!";
// console.log(a, a.length);
// console.log(a[(a.length, -1)] + a[a.length - 1].replace(/[!]/g, "x"));

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let unique = [...new Set(iterable)];
  return unique;
};

// let chars = ["A", "B", "A", "C", "B"];
// console.log(chars);
// console.log(...new Set(chars));
// let unique = [...new Set(chars)];
// console.log(unique);

console.log("hello from live server npm");

function spinWords(string) {
  let newStr = "";
  let str = string.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i].length >= 5) {
      let reversedWord = str[i].split("").reverse().join("");
      newStr += reversedWord + " ";
    } else {
      newStr += str[i] + " ";
    }
  }
  console.log(newStr);
  return newStr.trim();
}
spinWords("Hey fellow warriors");
spinWords("Welcome");
