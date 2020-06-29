"use strict";

// 1.

console.log("1:")

const euroCountries = ["Germany", "France"];
const asianCountries = ["Japan", "China"];

euroCountries.push(asianCountries);
console.log(euroCountries);

const ARRAY_ONE = ["one", "two"];
const ARRAY_TWO = ["three", "four"];

const ARRAY_MERGED = ARRAY_ONE + ARRAY_TWO;
console.log(ARRAY_MERGED);

// 2.

console.log("\n2:");

const ARRAY_THREE = ["five", "six"];
const ARRAY_SPREAD_OP = [...ARRAY_MERGED];
console.log(ARRAY_SPREAD_OP);

// 3.

console.log("\n3:");

const findLargestNum = array =>
    Math.max(array);

// 4.

console.log("\n4:");

const findSmallesttNum = array =>
    Math.min(array);

// 5.

const person = {name: "John"};
const job = { role: "Teacher" };

// 5.1

console.log("\n5.1:");

const personClone = { ...person };
console.log(personClone);

// 5.2

console.log("\n5.2:");

const employee = { ...person, ...job };
console.log(employee);

// 5.3

console.log("\n5.3:");

employee.name = "Max";
employee.role = "Student";
console.log(employee);

// 6. *** BONUS ***

console.log("\n6.1 ***BONUS***:");

// 6.1

const isWhole = (intOne, intTwo, intThree, intFour) => {
    const total = intOne + intTwo + intThree + intFour;
    let average = total / 4;
      return average === parseInt(average);
}

console.log(isWhole(1, 2, 3, 4)); //➞ false
console.log(isWhole(9, 2, 2, 5)); //➞ false
console.log(isWhole(2, 2, 2, 2)); //➞ true

// 6.2

console.log("\n6.2 ***BONUS***:");

console.log(isWhole([2, 2, 2, 2])); //➞ false
// The function returns not the correct result with passing just one array