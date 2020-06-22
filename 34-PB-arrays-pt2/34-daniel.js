"use strict";

// 1.

console.log("1:");

const findGreatest = (array, number) => {
    let outputArray = Array();
    for (let i = 0; i < array.length; i++) {
        if (array[i] > number) {
            outputArray.push(array[i]);
        }
    }

    return outputArray.join(", ");
}

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

// 2.

console.log("\n2:");

const longestWord = string => {
    const stringArray = string.split(" ");
    let longestCount = 0;
    let longestPosition = 0;

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > longestCount) {
            longestCount = stringArray[i].length;
            longestPosition = i;
        }
    }
    return stringArray[longestPosition];
}

console.log(longestWord("this is a web development course"));

// 3.

console.log("\n3:");

const reverse = num => {
    const inputArray = ("" + num).split("");
    return inputArray.reverse().join("");
}

console.log(reverse(34532));

// 4.

console.log("\n4:");

const findVowels = string => {
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                counter++;
        }
    }
    return counter;
}

console.log(findVowels("this is a string"));

// 5.

console.log("\n5:");

const missingNums = array => {
    for (let i = 1; i <= 10; i++) {
        switch (array.includes(i)) {
            case false:
                return i;
    }
    }
}

// const missingNums = (x) => {

//     let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let result = myArr.filter(s => !x.includes(s));
//     return result[0];
// }

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// 6.

console.log("\n6:");

const sumOfCubes = array => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i], 3);
    }
    return sum;
}

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));

// 7.

console.log("\n7:");

const dictionary = (string, array) => {
    let outputArray = [];

    for (let i = 0; i < array.length; i++){
        array[i].startsWith(string) ? outputArray.push(array[i]) : "";
    }
    return outputArray;
}

console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

// 8.

console.log("\n8:");

const evenNums = number => {
    const outputArray = [];

    for (let i = 2; i <= number; i += 2) {
        outputArray.push(i);
    }
    return outputArray;
}

console.log(evenNums(8));
console.log(evenNums(4));
console.log(evenNums(2));

// *** Bonus task ***

console.log("\n*** Bonus task ***");

const alphaOrder = string => string.split("").sort().join("");

console.log(alphaOrder("webdev"));