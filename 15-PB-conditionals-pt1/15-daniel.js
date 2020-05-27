"use strict";

// 1.

function functionOne(x, y) {
  if (x >= 50 && x <= 99 && y >= 50 && y <= 99) {
    return "Both numbers are in the range of 50 to 99";
  } else if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return "One of the numbers are in the range of 50 to 99";
  } else {
    return "None of the numbers are in the range of 50 to 99";
  }
}

console.log("1.");
console.log("60, 70:", functionOne(60, 70)); // 60, 70: Both numbers are in the range of 50 to 99
console.log("40, 70:", functionOne(40, 70)); // 40, 70: One of the numbers are in the range of 50 to 99
console.log("40, 100:", functionOne(40, 100)); // 40, 100: None of the numbers are in the range of 50 to 99

// 2.

function functionTwo(x, y, z) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
    return "One or more of the numbers are in the range of 50 to 99";
  } else {
    return "None of the numbers are in the range of 50 to 99";
  }
}

console.log("\n2.");
console.log("60, 70, 100:", functionTwo(60, 70, 100)); // 60, 70, 100: One or more of the numbers are in the range of 50 to 99
console.log("20, 40, 100:", functionTwo(20, 40, 100)); // 20, 40, 100: None of the numbers are in the range of 50 to 99

// 3.

function functionThree(x, y, z) {
  if (x > y && x > z) {
    return `x has the highest value with '${x}'`;
  }
  if (y > x && y > z) {
    return `y has the highest value with '${y}'`;
  }
  if (z > x && z > y) {
    return `z has the highest value with '${z}'`;
  } else {
    return "Somehow you f****d this up, Daniel!";
  }
}

console.log("\n3.");
console.log("20, 30, 40:", functionThree(20, 30, 40)); // 20, 30, 40: z has the highest value with '40'
console.log("20, 100, 40:", functionThree(20, 100, 40)); // 20, 100, 40: y has the highest value with '100'
console.log("80, 30, 40:", functionThree(80, 30, 40)); // 80, 30, 40: x has the highest value with '80'
console.log("80, 80, 40:", functionThree(80, 80, 40)); // 80, 80, 40: Somehow you f****d this up, Daniel!


// 4.

function functionFour(x) {
  if (typeof (x) !== "string") {
    return "The input is supposed to be a string!";
  }
  else {
    x = "Py" + x;
    if (x.includes("Py") === true) {
      return x.substring(2);
    }
  }
}

console.log("\n4.");
console.log("NaN:", functionFour(NaN)); // NaN: The input is supposed to be a string!
console.log("ExampleString:", functionFour("ExampleString")); // ExampleString: ExampleString
console.log("Empty string:", functionFour("")); // Empty string: 

// 5.

/* For this task I would have needed a two global vars - A hint that we are supposed to declared them globally would have been better. */

function functionFive(x, y) {
  if (x + y >= 50 && x + y <= 80) {
    return 65;
  }
  else {
    return 80;
  }
}

console.log("\n5.");
console.log("10, 20:", functionFive(10, 20)); //10, 20: 80
console.log("10, 50:", functionFive(10, 50)); // 10, 50: 65
console.log("40, 50:", functionFive(40, 50)); // 40, 50: 80

// 6.

function functionSix(x, y) {
  if (x + y === 8 || Math.abs(x - y === 8) || x - y === -8) {
    return true;
  }

  else {
    return false;
  }
}

console.log("\n6.");
console.log("3, 5", functionSix(3, 5)); // 3, 5 true
console.log("25, 17", functionSix(25, 17)); // 25, 17 true
console.log("17, 25", functionSix(17, 25)); // 25, 17 true
console.log("99, -30", functionSix(99, -30)); //99, -30 false

// 7.

function functionSeven(x, y) {
  if ((x || y) === 15) {
    return true;
  }
  if (x + y === 15) {
    return true;
  }
  else {
    return false;
  }
}

console.log("\n7.")
console.log("15, 0:", functionSeven(15, 0)); // 15, 0: true
console.log("25, 15:", functionSeven(25, 15)); // 25, 15: false
console.log("7, 8:", functionSeven(7, 8)); // 7, 8: true
console.log("13, 25:", functionSeven(13, 25)); // 13, 25: false

// 8.

function functionEight(x, y) {
  if (
    (x !== 0 && ((x % 7 === 0) || (x % 11) === 0)) ||
    (y !== 0 && (y % 7 === 0 || y % 11 === 0))
  ) {
    return true;
  } else {
    return false;
  }
}

console.log("\n8.");
console.log("0, 0:", functionEight(0, 0));
console.log("7, 0:", functionEight(7, 0));
console.log("0, 11:", functionEight(0, 11));

// 9.

function functionNine(x, y) {
  if (x === y) {
    return (x + y) * 3;
  }
  else {
    return x + y;
  }
}

console.log("\n9.");
console.log("7, 7:", functionNine(7, 7)); // , 7: 42
console.log("5, 7:", functionNine(5, 7)); // 5, 7: 12

// 10.

function functionTen(x) {
  let y = 19;
  if (Math.abs(x - y) > 19) {
    return Math.abs(x - y) * 2;
  }
  else {
    return Math.abs(x - y);
  }
}

console.log("\n10.");
console.log("-10:", functionTen(-10)); // -10: 58
console.log("18:", functionTen(18)); // 18: 1

// 11. ***Bonus***

function functionEleven(firstName, age) {
  if (typeof(firstName) !== "string" || typeof (age) !== "number" || age < 0) {
    return "check your input";
  }

  else if (age < 13) {
    return `${firstName} is a child at the age ${age}`;
  }

  else if (age >= 13 && age < 20) {
    return `${firstName} is a teenager at the age ${age}`;
  }
  else if (age >= 20 && age < 30) {
    return `${firstName} is a young adult at the age ${age}`;
  }
  else if (age >=30 && age < 125){
    return `${firstName} is an adult at the age ${age}`;
  }

  else {
    return "Hi there, Methuselah!";
  }
}

console.log("\n11. ***Bonus***")
console.log(functionEleven("Daniel", 35)); // Daniel is an adult at the age 35
console.log(functionEleven("Enoch", 365)); // Hi there, Methuselah!

// 12. ***Bonus***

/* This task was done by design */