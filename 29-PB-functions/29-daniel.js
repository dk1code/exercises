"use strict";

// 1.

const addUp = (x) => {
  let sum = null;
  for (let i = 1; i <= x; i++) {
    sum += i;
  }
  return sum;
};

console.log("1:");
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

// 2.

const cubed = (x = 0, y = 0, z = 0) => x ** 3 + y ** 3 + z ** 3;

console.log("\n2:");
console.log(cubed(1, 5, 9));
console.log(cubed(2));
console.log(cubed(0));

// 3.

const stringStart = (init, word) => word.startsWith(init);

console.log("\n3:");
console.log(stringStart("bu", "button"));
console.log(stringStart("tri", "triplet"));
console.log(stringStart("beau", "pastry"));

// 4.

const checkAgainstZero = (x) => x <= 0;

console.log("\n4.");
console.log(checkAgainstZero(3));
console.log(checkAgainstZero(0));
console.log(checkAgainstZero(-4));
console.log(checkAgainstZero(10));

// 5.

const occurrences = (string, letter) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    string[i] === letter ? count++ : "";
  }
  return count;
};

console.log("\n5:");
console.log(occurrences("this is a string", "i"));

// 6.

const calculateBaseToExponent = (x, y) => x ** y;

console.log("\n6:");
console.log(calculateBaseToExponent(5, 5));
console.log(calculateBaseToExponent(10, 10));
console.log(calculateBaseToExponent(3, 3));

// 7.

const dogInHumanYears = (x) =>
  `Your doggie is ${x * 7} years old in human years`;

console.log("\n7.");
console.log(dogInHumanYears(4));

// 8.

const lifetimeSupply = (age, amount, item) => {
  let lifeexpectancy = 80;
  return `You will need ${Math.round(
    (lifeexpectancy - age) * amount * 365
  )} of ${item} to last till the age of ${lifeexpectancy}`;
};

console.log("\n8:");
console.log(lifetimeSupply(25, 2, "chocolate"));
console.log(lifetimeSupply(40, 3, "crisps"));
console.log(lifetimeSupply(35.5, 2.5, "mate"));

// 9.

const isWaldoHere = (string) => string.toLowerCase().includes("waldo");

console.log("\n9:");
console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(isWaldoHere("waldo is here"));

// 10.

const equalSlices = (slices, people, each) => slices / (people * each) >= 1;

console.log("\n10:");
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

// 11.

const xO = (string) => {
  if (typeof string !== "string") {
    return "Input should be a string, duh!";
  }
  let lowerCase = string.toLowerCase();
  let sumX = 0;
  let sumO = 0;
  for (let i = 0; i < string.length; i++) {
    lowerCase[i] === "x" ? sumX++ : "";
    lowerCase[i] === "o" ? sumO++ : "";
  }
  return sumX === sumO;
};

console.log("\n11:");
console.log(xO("ooxx"));
console.log(xO("xooxx"));
console.log(xO("ooxXm"));
console.log(xO("zpzpzpp"));
console.log(xO("zzoo"));

// 12. *** wrongly done by accident ***

const primeNumCheck = (inputInt) => {
  if (inputInt !== parseInt(inputInt) || inputInt !== Math.abs(inputInt)) {
    return "Please give a positive Integer";
  }

  let primeNum = "";

  for (let i = 2; i <= inputInt; i++) {
    let isPrime = true;
    let isRunning = true;
    let ii = 2;

    while (isRunning === true) {
      if (i % ii === 0 && i !== ii) {
        isPrime = false;
        isRunning = false;
      } else if (isRunning === true && ii < i) {
        ii++;
      } else {
        isRunning = false;
      }
    }

    if (isPrime === true) {
      primeNum += " " + i;
    }
  }
  return `All the Prime Numbers between 2 and ${inputInt} are: ${primeNum}`;
};

console.log("\n12:");
console.log(primeNumCheck(100000));

// 13.

const validateEMail = (string) => {
  let isAsRequired = true;
  let countAt = 0;
  let atPos = 0;
  let dotPos = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "@") {
      countAt++;
      atPos = i;
    }
    if (string[i] === ".") {
      dotPos = i;
    }
  }

  if (string[0] === "@" || countAt !== 1 || atPos > dotPos) {
    isAsRequired = false;
  }

  return `"${string}" is ${isAsRequired ? "valid" : "invalid"}.`;
};

console.log("\n13:");
console.log(validateEMail("john@example.com"));
console.log(validateEMail("@example.com"));
console.log(validateEMail("john.smith@com"));
console.log(validateEMail("john.smith@email.com"));
console.log(validateEMail("johnsmith@emailcom"));
