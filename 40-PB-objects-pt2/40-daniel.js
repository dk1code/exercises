"use strict";

// 1.

console.log("1:");

const withinRange = (number, object) =>
    number >= object.min && number <= object.max;

console.log(withinRange(4, { min: 0, max: 5 })); // ➞ true
console.log(withinRange(4, { min: 4, max: 5 })); // ➞ true
console.log(withinRange(4, { min: 6, max: 10 })); // ➞ false
console.log(withinRange(5, { min: 5, max: 5 })); // ➞ true

// 2. 

console.log("\n2:");

const OBJECT_ARRAY = [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

// const scrabble = array => {
//     let maxScore = 0;
//     for (let i = 0; i < array.length; i++) {
//         maxScore += array[i].score;
//     }
//     return maxScore;
// }

const scrabble = array => {
    let maxScore = 0;
    for (let item of array) {
        maxScore += array.score;
    }
    return maxScore;
}

console.log(scrabble(OBJECT_ARRAY)); // NaN

// 3.

console.log("\n3:");

const isEmptyObject = object =>
    Object.keys(object) == 0; // value coercion

console.log(isEmptyObject({})); // ➞ true
console.log(isEmptyObject({ a: 1 })); // ➞ false

// 4.

console.log("\n4:");

// solution out of my head; rediculous runtime!

// const countLetters = string => {
//     let runArray = string.split("");
//     let runObject = {};
//     for (let each of runArray) {
//         runObject[each] = 0;
//     }
//     for (let each of runArray) {
//         runObject[each]++;
//     }

//     return runObject;
// }

// console.log(countLetters("tree")); //{ t: 1, r: 1, e: 2 }

// proper solution; cheers to vasilis

// const countingLetters = (string) => {
//     const outputObject = {};
//     for (let i = 0; i < string.length; i++) {
//         outputObject[string[i]] = string.split(string[i]).length - 1;
//     }
//     return outputObject;
// }

// Pedros solution

const countingLetters = (string) => {
    let runArray = string.split("");
    const outputObject = {};
    runArray.forEach(el => {
        outputObject[el] = outputObject[el] ? (outputObject[el] += 1) : 1;
    })
    return outputObject;
}

console.log(countingLetters('tree'));
console.log(countingLetters('awesomeness'));

// 5.

console.log("\n5:");

const freeShipping = object => {
    let sum = 0;
    for (let each in object) {
        sum += object[each];
    }
    return sum > 50;
}

console.log(freeShipping({ "Sponge": 3.50, "Soap": 5.99 })); // ➞ false
console.log(freeShipping({ "Surround Sound Equipment": 499.99 })); // ➞ true
console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })); // ➞ false

// 6.

console.log("\n6:");

const changeProgramming = () => {
    // making it unchangable by other code by giving it local scope || with Object.freeze(programming) the direct contents will be unchangable, with child objects as an exception
    const programming = {
        languages: ["JavaScript", "Python", "Ruby"],
        isChallenging: true,
        isRewarding: true,
        difficulty: 8,
        jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
    };

    programming.languages.push("Go");
    programming.difficulty = 7;
    delete programming.jokes;
    programming.isFun = true;
    for (let each in programming.languages) {
        console.log(programming.languages[each]);
    }
    console.log();
    for (let each in programming) {
        console.log(each);
    }
    console.log();
    for (let each in programming) {
        console.log(programming[each]);
    }
    programming.isReCh = function () {
        if (this.isRewarding === true && this.isChallenging === true) {
            return `Learning the programming languages: ${programming.languages.join(", ")} is rewarding and challenging.`;
        }
    }
    console.log(programming.isReCh());

    console.log(programming.isReCh); // [Function (anonymous)]
    // It returns that it's a function and it's name || '(anonymous)' if no name is given; because of ECMA definition
}

changeProgramming();