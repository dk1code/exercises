"use strict";
4;

// 1,

const hOF = (num1) => {
  return function callback(num2) {
    return num1 + num2;
  };
};

console.log("1:", hOF(3)(4));

// 2.

const mulitplier = (num1) => {
  return function (num2) {
    return num1 * num2;
  };
};

let mulit = mulitplier(3)(4);
console.log("2:", mulit);

// 3.

let moneySaved = (function (age, retAge, wage, savingRate) {
  if (age >= retAge) {
    return "You're already retired";
  }
  return (retAge - age) * 12 * wage * (savingRate * 0.01);
})(40, 65, 2000, 5);
console.log("3:", moneySaved);
