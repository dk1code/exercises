"use strict";

// let inputVar = parseInt(Math.random() * 100);
// console.log(inputVar);

let inputVar = 8;

if (inputVar % 3 === 0 && inputVar % 5 === 0) {
  console.log("FizzBuzz");
} else if (inputVar % 3 === 0) {
  console.log("Fizz");
} else if (inputVar % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(inputVar);
}

// Switch Method

let switchExpr = null;

if (inputVar % 3 === 0 && inputVar % 5 === 0) {
  switchExpr = 8;
} else if (inputVar % 3 === 0) {
  switchExpr = 3;
} else if (inputVar % 5 === 0) {
  switchExpr = 5;
}

switch (switchExpr) {
  case 3:
    console.log("Fizz");
    break;
  case 5:
    console.log("Buzz");
    break;
  case 8:
    console.log("FizzBuzz");
    break;
  default:
    console.log(inputVar);
}
