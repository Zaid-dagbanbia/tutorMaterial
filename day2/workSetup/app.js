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

const age = 20;

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

const n = 10;

// looping from i = 1 to 5
for (let i = 0; i <= n; i = i + 2) {
  if (n % 2 === 0) {
    console.log(i);
    console.log(`I love JavaScript.`);
  }
}

let summ = 0;
let num = 10;

for (let i = 1; i <= num; i = i + 1) {
  console.log(summ);
  summ = summ + i;
}

console.log("total :", summ);

for (let i = 10; i >= 0; i = i - 1) {
  console.log(i);
}
