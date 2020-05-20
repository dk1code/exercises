"use strict";

// 1. 

// 1.a

console.log("1a: The LOWEST number between -1 and 4 is", Math.min(-1, 0, 1, 2, 3, 4));

// 1.b

console.log("\n1b: The HIGHEST number between -1 and 4 is", Math.max(-1, 0, 1, 2, 3, 4));

// 2

const ARRAYone = [3321.32321, 326.76, 76788.7, -9.78, 43.342];
const ARRAYtwo = [3321.32321, 326.76, 76788.7, -9.78, 28.329];
// not sure if the naming is against best practices

// 2.a

console.log("2a:\n")
for (let i = 0; i < ARRAYone.length; i++) {
    console.log(`${ARRAYone[i]} is rounded up ${Math.ceil(ARRAYone[i])}`)
}

// 2.b

console.log("\n2b:\n");
for (let i = 0; i < ARRAYtwo.length; i++) {
  console.log(`${ARRAYtwo[i]} is rounded down ${Math.floor(ARRAYtwo[i])}`);
}

// 3.

console.log(
  "\n3: A random integer between 1 and 6 is in this run",
  Math.round(Math.random() * 5 + 1)
);