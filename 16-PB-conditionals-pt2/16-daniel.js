"use strict";

// 1.

const VALUES_MARK = ["Mark", 70, 1.73];
const VALUES_JOHN = ["John", 95, 1.80];

// 2.

function functionBmi(weight, height) {
    let x = null;
    x = (weight / height ** 2);
    x = x.toFixed(2);
    x = parseFloat(x);
    return x;
}

let bmiMark = functionBmi(VALUES_MARK[1], VALUES_MARK[2]);
console.log(bmiMark);
let bmiJohn = functionBmi(VALUES_JOHN[1], VALUES_JOHN[2]);
console.log(bmiJohn);

// 3.

let isBmiHigher = bmiMark > bmiJohn;
console.log(isBmiHigher);

// 4.

console.log(`4: Is Mark's BMI higher then John's: It is ${!isBmiHigher ? "not" : ""}.`);

// 5.

if (bmiMark > bmiJohn) {
    console.log(`5: ${VALUES_MARK[0]}`)
}

else {
    console.log(`5: ${VALUES_JOHN[0]}`)
}