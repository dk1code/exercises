"use strict";

// 1.
let stringT1 = "Hello, my name is Daniel and I am ";
let ageT1 = 35;
let concatenateT1 = stringT1 + ageT1;
console.log(`1. ${concatenateT1}`);

/* This is a special case, since on of the var is a string. If this is the case, a number value get added as a string to the other string. The so called string accumulation or concatenation.*/

// 2.

let stringInt = "1005", stringFloat = "10.05";
console.log(`2.\nInteger: ${parseInt(stringInt)}\nFloat number: ${parseFloat(stringFloat)}`);

// 3.

let a = 30, b = 939, c = 40.9;
let moduloA = a % 2;
let moduloB = b % 2;
let moduloC = c % 2;
console.log(
    `3.
${a} is ${(moduloA === 0
    ? "an even number"
        : "an odd number")}
${b} is ${(moduloB === 0
    ? "an even number"
        : "an odd number")}
${c} is ${(moduloC === 0
    ? "an even number"
    : "an odd number")}`
);