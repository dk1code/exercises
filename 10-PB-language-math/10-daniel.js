"use strict";

// 1. 

// 1.a

console.log("1a: The LOWEST number between -1 and 4 is", Math.min(-1, 0, 1, 2, 3, 4));

// 1.b

console.log("\n1b: The HIGHEST number between -1 and 4 is", Math.max(-1, 0, 1, 2, 3, 4));

// 2

const ARRAY_ONE = [3321.32321, 326.76, 76788.7, -9.78, 43.342];
const ARRAY_TWO = [3321.32321, 326.76, 76788.7, -9.78, 28.329];
// not sure if the naming is against best practices

// 2.a

console.log("2a:\n")
for (let i = 0; i < ARRAY_ONE.length; i++) {
  console.log(`${ARRAY_ONE[i]} is rounded up ${Math.ceil(ARRAY_ONE[i])}`);
}

// 2.b

console.log("\n2b:\n");
for (let i = 0; i < ARRAY_TWO.length; i++) {
  console.log(`${ARRAY_TWO[i]} is rounded down ${Math.floor(ARRAY_TWO[i])}`);
}

// 3.

console.log(
  "\n3: A random integer between 1 and 6 is in this run",
  Math.round(Math.random() * 5 + 1)
);