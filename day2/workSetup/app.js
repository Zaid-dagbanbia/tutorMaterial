// let rand = Math.random();

// if (rand < 0.5) {
//   console.log(`"hello", ${rand}`);
// } else if (rand === 0.5) {
//   console.log("equal");
// } else {
//   console.log("greater than 5");
// }

// if (rand >= 0.5) {
//   console.log(`"hello1", ${rand}`);
// }

// check if the number is positive
// const number = +prompt("Enter a number: ");

// check if number is greater than 0
/* if (number > 0) {
  // the body of the if statement
  console.log("The number is positive");
}
console.log("The if statement is easy"); */

// check if number is greater than 0
/* if (number > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else if (number === 0) {
  console.log("The number is  0");
} else {
  console.log("the number is negetive");
}

console.log("The if...else statement is easy"); */

/* const age = 20;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young.Wait another ${yearsLeft}  years:)`);
}

let hour = 20;

if (hour > 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening!");
}
 */
/* const n = 10;

// looping from i = 1 to 5
for (let i = 0; i <= n; i = i + 2) {
  if (n % 2 === 0) {
    console.log(i);
    console.log(`I love JavaScript.`);
  }
} */

/* let summ = 0;
let num = 10;

for (let i = 1; i <= num; i = i + 1) {
  console.log(summ);
  summ = summ + i;
}
 */
/* console.log("total :", summ);

for (let i = 10; i >= 0; i = i - 1) {
  console.log(i);
} */

console.log("hello");
// program to display number from  0 to five

for (let i = 1; i <= 5; i += 1) {
  console.log(`I love JavaScript. ${i}`);
}

// Even Number from 0 to 21

// for (let i = 0; i < 21; i += 2) {
//   console.log(i);
// }

// program to display the sum of natural numbers
let sum = 0;
const n = 10;

for (let i = 1; i <= n; i++) {
  sum = sum + i;
  console.log(i);
}

console.log(sum);

// Even Number from 21 to 0
console.log("**************");
for (let i = 20; i >= 0; i = i - 2) {
  console.log(i);
}

// JavaScript Infinite for loop

/* for (let i = 1; i > 0; i++) {
  // block of code
  console.log("hello");
} */

//JavaScript for... of Loop

const students = ["John", "Sara", "Jack"];

for (let student of students) {
  console.log(student);
}

const products = ["tomato", "pen", "shoes", "sleeper"];

for (let product of products) {
  console.log(product);
}

const doubles = [2, 4, 6, 8];
for (let num of doubles) {
  console.log(num * 2);
}

console.log("***********");

let natural = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let summ = 0;

for (let num of natural) {
  summ = summ + num;
  console.log(num);
}
console.log(summ);

console.log("***********");

const string = "code";

for (let nat of string) {
  console.log(nat);
}

console.log("***********");

const seatingChart = [
  ["kristin", "Erik", "Namita"],
  ["Geioffre", "Yaw", "james"],
  ["Alluta", "Sakura", "Jack", "Erika"],
];
//[1,2,3]
console.log(seatingChart);
console.log("***********");
for (let row of seatingChart) {
  console.log(row);
  for (let name of row) {
    console.log(name);
  }
}

console.log("***********");

let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}

console.log("***********");

/* let input = prompt("Hey, say something!");
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === "stop copying me") {
    break;
  }
} */

const testScores = {
  keenan: 80,
  damon: 85,
  jomana: 90,
  malon: 72,
  nadia: 80,
};

console.log(testScores["keenan"]);
console.log(testScores.keenan);

for (let person in testScores) {
  console.log(person);
}

console.log(Object.keys(testScores));
console.log(Object.values(testScores));
