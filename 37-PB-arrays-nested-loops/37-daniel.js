"use strict";

// 1.

console.log("1:");

const starNestedArray = (character, lines) => {
    let characterStr = character.toString().substring(0, 1);
    let runArray = [];
    for (let i = 0; i < lines; i++) {
        runArray = [];
        for (let j = 0; j <= i; j++) {
            runArray.push(characterStr);
        }
        console.log(runArray.join(" "));
    }
    return "";
}

console.log(starNestedArray("*0", 4));
console.log(starNestedArray("+++", 3));

// 2.

console.log("\n2:");

let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

const arrayOutput = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(`row ${i}`);
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

arrayOutput(arr);

// 3.

console.log("\n3:")

const patternArray = (times, pattern) => {
    const outputArray = [];

    for (let i = 0; i < times; i++) {
        if (pattern < 0) {
            for (let j = 0; j <= Math.abs(pattern); j++) {
                outputArray.push(j);
            }
        } else if (pattern > 0) {
            for (let j = 0; j < pattern; j++) {
                outputArray.push(i + 1);
            }
        } else {
            break;
        }
    }
    return outputArray.join(" ");
}

console.log(patternArray(4, 3)); // [ 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]
console.log(patternArray(3, -4)); // [ 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
console.log(patternArray()); // []