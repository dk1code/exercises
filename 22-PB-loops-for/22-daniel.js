"use strict";

//  1. ***

let sumI = null;
for (let i = 0; i < 20; i++) {
  sumI += i + 1;
}
console.log("\n1: The sum of 1-20 is:", sumI);

// 2. ***
console.log("\n2.");
for (let i = 1; i < 6; i++) {
  console.log(`The is ${i} bottle of beer at the wall`);
}

// 3. ***
console.log("\n3.");
for (let i = 0; i < 21; i++) {
  if (i === 0) {
    console.log(`${i} is neither odd or even`);
  } else if (i % 2 !== 0) {
    console.log(`${i} is odd`);
  } else if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log("*** ERROR ***");
  }
}

// 4. ***
console.log("\n4.");
for (let i = 0; i < 11; i++) {
  console.log(`${i} * 9 = ${i * 9}`);
}

// 5. ***

console.log("\n5. FizzBuzz");
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`for ${i}: FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`for ${i}: Fizz`);
  } else if (i % 5 === 0) {
    console.log(`for ${i}: Buzz`);
  } else {
    console.log("");
  }
}

// 6. ***
console.log("\n6.");
sumI = null;
for (let i = 1; i < 1001; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sumI += i;
  }
}
console.log(sumI);
