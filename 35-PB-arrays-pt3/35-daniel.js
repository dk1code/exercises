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
    switch (number) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
    }
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

const unique = array => {
    const runArray = [];
    for (let i = 0; i < array.length; i++) {
        runArray.splice(0, array.length);
        for (let ii = 0; ii < array.length; ii++) {
            array[i] === array[ii] ? runArray.push(array[i]) : "";
        }
        if (runArray.length === 1) {
            return array[i];
        }
    }
}

console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));

// 5.

console.log("\n5:");

const wordRank = string => {
    const wordArray = string.split(" ");
    let highestValue = 0;
    let highestPosition = 0;
    let word = "";
    let wordValue = 0;

    for (let i = 0; i < wordArray.length; i++) {
        wordValue = 0;
        word = wordArray[i];

        for (let ii = 0; ii < word.length; ii++) {
            switch (word[ii]) {
                case "a":
                    wordValue += 1;
                    break;
                case "b":
                    wordValue += 2;
                    break;
                case "c":
                    wordValue += 3;
                    break;
                case "d":
                    wordValue += 4;
                    break;
                case "e":
                    wordValue += 5;
                    break;
                case "f":
                    wordValue += 6;
                    break;
                case "g":
                    wordValue += 7;
                    break;
                case "h":
                    wordValue += 8;
                    break;
                case "i":
                    wordValue += 9;
                    break;
                case "j":
                    wordValue += 10;
                    break;
                case "k":
                    wordValue += 11;
                    break;
                case "l":
                    wordValue += 12;
                    break;
                case "m":
                    wordValue += 13;
                    break;
                case "n":
                    wordValue += 14;
                    break;
                case "o":
                    wordValue += 15;
                    break;
                case "p":
                    wordValue += 16;
                    break;
                case "q":
                    wordValue += 17;
                    break;
                case "r":
                    wordValue += 18;
                    break;
                case "s":
                    wordValue += 19;
                    break;
                case "t":
                    wordValue += 20;
                    break;
                case "u":
                    wordValue += 21;
                    break;
                case "v":
                    wordValue += 22;
                    break;
                case "w":
                    wordValue += 23;
                    break;
                case "x":
                    wordValue += 24;
                    break;
                case "y":
                    wordValue += 25;
                    break;
                case "z":
                    wordValue += 26;
                    break;
            }
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
    const replaceArray = [null, /a/gi, "4", /e/gi, "3", /i/gi, "i", /o/gi, "0", /s/gi, "5"];

    for (let i = 1; i <= 9; i = i + 2) {
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

        if (wordArray[0] === "a" || wordArray[0] === "e" || wordArray[0] === "i" || wordArray[0] === "o" || wordArray[0] === "u") {
            isBeginningVowel = true;
        }

        switch (wordArray.length > 2) {
            case true:
                wordArray.push(wordArray[0]);
                wordArray.splice(0, 1);
        }

        if (isBeginningVowel === true) {
            wordArray.push("way");
        } else {
            wordArray.push("ay");
        }
        runArray.splice(i, 1, wordArray.join(""));
    }
    output = runArray.join(" ");
    output.replace(".", "") + ".";
    output = output.split("");
    output.splice(0, 1, output[0].toUpperCase());
    output = output.join("");

    return output;
}

console.log(pigLatin("Cats are great pets."));
console.log(pigLatin("Tom got a small piece of pie."));
console.log(pigLatin("He told us a very exciting tale."));