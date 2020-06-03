"use strict";

//  1. ***

let sumI = null;
for (let i = 1; i <= 20; i++) {
  sumI += i;
}
console.log("\n1: The sum of 1-20 is:", sumI);

// 2. ***
console.log("\n2.");
for (let i = 1; i <= 5; i++) {
  console.log(
    `There ${i !== 1 ? "are" : "is"} ${i} bottle${
      i !== 1 ? "s" : ""
    } of beer at the wall`
  );
}
let string = "";
for (let i = 1; i <= 5; i++) {
  switch (i) {
    case 1:
      string = "one";
      break;
    case 2:
      string = "two";
      break;
    case 3:
      string = "three";
      break;
    case 4:
      string = "four";
      break;
    case 5:
      string = "five";
      break;
    default:
      console.log("*** ERROR ***");
  }
  console.log(
    `There ${i !== 1 ? "are" : "is"} ${string} bottle${
      i !== 1 ? "s" : ""
    } of beer at the wall`
  );
}

// 3. ***
console.log("\n3.");
for (let i = 0; i < 21; i++) {
  console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
}

// 4. ***
console.log("\n4a.");
for (let i = 0; i <= 11; i++) {
  console.log(`${i} * 9 = ${i * 9}`);
}

console.log("\n4b. *** BONUS ***\n231");
for (let i = 0; i <= 10; i++) {
  for (let ii = 0; ii < 11; ii++) {
    console.log(`${i} * ${ii} = ${i * ii}`);
  }
  console.log("");
}

// 5. ***

console.log("\n5. FizzBuzz");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`for ${i}: FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`for ${i}: Fizz`);
  } else if (i % 5 === 0) {
    console.log(`for ${i}: Buzz`);
  } else {
    console.log(i);
  }
}

// 6. ***
console.log("\n6.");
sumI = null;
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sumI += i;
  }
}
console.log(sumI);

// 7. *** BONUS ***

console.log("\n7. *** BONUS ***");

// 7a.

let outputA = "";
for (let i = 100; i <= 1000; i = i + 100) {
  outputA += `${i} `;
}
console.log(`\n7a: ${outputA}`);

// 7b.

let outputB = "";
for (let i = 1; i <= 128; i = i + i) {
  outputB += `${i} `;
}
console.log(`\n7b: ${outputB}`);

// 7c.

let outputC = "";
for (let i = 0; i <= 10; i = i + 2) {
  outputC += `${i} `;
}
console.log(`\n7c: ${outputC}`);

// 7d.

let outputD = "";
for (let i = 3; i <= 15; i = i + 3) {
  outputD += `${i} `;
}
console.log(`\n7d: ${outputD}`);

// 7e.

let outputE = "";
for (let i = 9; i >= 0; i--) {
  outputE += `${i} `;
}
console.log(`\n7e: ${outputE}`);

// 7f.

let outputF = "";
for (let i = 1; i <= 4; i++) {
  for (let ii = 1; ii <= 3; ii++) {
    outputF += `${i} `;
  }
}
console.log(`\n7f: ${outputF}`);

// 7g.

let outputG = "";
for (let i = 1; i <= 3; i++) {
  for (let ii = 0; ii <= 4; ii++) {
    outputG += `${ii} `;
  }
}
console.log(`\n7f: ${outputG}`);

// 8. *** BONUS ***

let inputString = "rentner";
let reverseString = "";

for (let i = inputString.length; i >= 1; i--) {
  reverseString += inputString[i - 1];
  // console.log(reverseString);
}
console.log("\n8. *** BONUS *** :",
  inputString === reverseString ? `'${inputString}' is a palindrome. :)` : `'${inputString}' is not a palindrome. :(`
);
