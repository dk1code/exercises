"use strict";

// 1 *** Create a `while` loop that runs as long as the variable `i` is less than 15. Print `i`.

{
    console.log("\n1a.");
    let i = 0;
    while (i < 15) {
        console.log("Value if 'i':", i);
        i++;
    }
}

console.log("\n1b.");
for (let i = 0; i < 15; i++){
    console.log("Value if 'i':", i);
}

// 2. *** Create a function which sums up numbers from 1-20 using a `while` loop.
let sumI = null;
{
    let i = 0;
  while (i < 20) {
      sumI += i + 1;
    i++;
  }
    console.log("\n2a: The sum of 1-21 is:", sumI);
}
sumI = null;
for (let i = 0; i < 20; i++) {
  sumI += i + 1;
}
console.log("\n2b: The sum of 1-21 is:", sumI);

// 3. ***Use a `do`, `while` loop to print `The number is [i]` while i is less than 20. 
{ console.log("\n3.");
    let i = 0;
    do {
        console.log(`The number is ${i}`);
        i++;
    } while (i < 20);
}