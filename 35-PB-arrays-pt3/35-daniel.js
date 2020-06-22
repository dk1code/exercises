"use strict";

// 1. 

console.log("1:");

const isFourLetters = array => {
    const outputArray = [];

    for (let i = 0; i < array.length; i++) {
        array[i].length === 4 ? outputArray.push(array[i]) : "";
    }
    return outputArray;
}

console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));

// 2.

console.log("\n2:")

const monthName = number => {
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthArray[number - 1];
}

console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));

// 3.

console.log("\n3:");

const amplify = number => {
    const outputArray = [];

    for (let i = 1; i <= number; i++) {
        i % 4 !== 0 ? outputArray.push(i) : outputArray.push(i * 10);
    }
    return outputArray;
}

console.log(amplify(4));
console.log(amplify(3));
console.log(amplify(25));

// 4.

console.log("\n4:");

/* to complex solution */
const unique = array => {
    const runArray = [];
    for (let i = 0; i < array.length; i++) {
        runArray.splice(0, array.length);
        for (let j = 0; j < array.length; j++) {
            array[i] === array[j] ? runArray.push(array[i]) : "";
            if (runArray.length > 1) {
                break;
            }
        }
        if (runArray.length === 1) {
            return array[i];
        }
    }
}


// const unique = array => {
//     let iterValue = null;
//     for (let i = 0; i < array.length; i++) {
//         iterValue = array[i];
//         if (array.indexOf(iterValue) === array.lastIndexOf(iterValue)) {
//             return iterValue;
//         }
//     }
// }

console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));
console.log(unique([1, 1, 1, 1, 1, 1, 0]));

// 5.

console.log("\n5:");

const wordRank = string => {
    const wordArray = string.split(" ");
    const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let highestValue = 0;
    let highestPosition = 0;
    let word = "";
    let wordValue = 0;

    for (let i = 0; i < wordArray.length; i++) {
        wordValue = 0;
        word = wordArray[i];

        for (let ii = 0; ii < word.length; ii++) {
            wordValue += letterArray.indexOf(word[ii]) + 1;
        }
        if (wordValue > highestValue) {
            highestValue = wordValue;
            highestPosition = i;
        }
    }
    return wordArray[highestPosition];
}

console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Today is Wednesday."));

// 6.

console.log("\n6:0");

const hackerSpeak = string => {
    let funcString = string
    const replaceArray = [/a/gi, "4", /e/gi, "3", /i/gi, "i", /o/gi, "0", /s/gi, "5"];

    for (let i = 0; i <= 8; i += 2) {
        funcString = funcString.replace(replaceArray[i], replaceArray[i + 1]);
    }
    return funcString;
}

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));

// *** BONUS QUESTIONS ***

// Bonus task 1.

console.log("\nBonus task 1:");

const isSymmetrical = number => {
    const runArray = number.toString().split("");
    const counter = Math.floor(runArray.length / 2);

    for (let i = 0; i < counter; i++) {
        if (runArray[i] !== runArray[runArray.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isSymmetrical(7227));
console.log(isSymmetrical(12567));
console.log(isSymmetrical(44444444));
console.log(isSymmetrical(9939));
console.log(isSymmetrical(1112111));

// Bonus task 2.

console.log("\nBonus task 2:");

const toCamelCase = string => {
    const runArray = string.split("");
    for (let i = runArray.length - 1; i > 0; i--) {
        switch (runArray[i]) {
            case "_":
                runArray[i + 1] = runArray[i + 1].toUpperCase();
                runArray.splice(i, 1);
        }
    }
    return runArray.join("");
}

console.log(toCamelCase("hello_world"));
console.log(toCamelCase("javascript_is_fun"));

// Bonus task 3.

console.log("\nBonus task 3:");

const pigLatin = string => {
    const runArray = string.toLowerCase().split(" ");
    let output = "";
    let wordArray = [];
    let isBeginningVowel = false;

    for (let i = 0; i < runArray.length; i++) {
        wordArray = runArray[i].split("");
        isBeginningVowel = false;

        switch (wordArray[0]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                isBeginningVowel = true;
        }

        if (wordArray.length > 2 && wordArray[1] !== "x") {
            wordArray.push(wordArray[0]);
            wordArray.splice(0, 1);
        }

        isBeginningVowel ? wordArray.push("way") : wordArray.push("ay");

        runArray.splice(i, 1, wordArray.join(""));
    }
    output = runArray.join(" ");
    output = output.replace(".", "") + ".";
    output = output.split("");
    output.splice(0, 1, output[0].toUpperCase());
    output = output.join("");

    return output;
}

console.log(pigLatin("Cats are great pets."));
console.log(pigLatin("Tom got a small piece of pie."));
console.log(pigLatin("He told us a very exciting tale."));