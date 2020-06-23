"use strict";

// 1.

const sumOfNumbers = array => {
    const runArray = array;
    let runSum = 0;
    let runProduct = 1;

    for (let i = 0; i < runArray.length; i++) {
        runSum += runArray[i];
        runProduct *= runArray[i];
    }
    console.log(runSum);
    console.log(runProduct);
}

// 2.

console.log("\n2:");

const NAME_ARRAY = ["Pei", "Andrea", "Filippo", "Edgar"];

const greetings = array => {
    const runArray = array;

    for (let i = 0; i < runArray.length; i++) {
        console.log(`${runArray[i]} is at index ${runArray.indexOf(runArray[i])} of my NAME_ARRAY.\nHello, ${runArray[i]}!`);
    }
}

greetings(NAME_ARRAY);

// 3.

console.log("\n3:");

const CITY_ARRAY = ["Berlin", "Paris", "Prague", "Rome"];

const concatFunc = array => {
    const runArray = array;
    let output = "";

    for (let i = 0; i < runArray.length; i++) {
        output += runArray[i];
        i < runArray.length - 1 ? output += ", " : "";
    }
    return output;
}

console.log(concatFunc(CITY_ARRAY));

// 4.

console.log("\n4:");

const numberChange = array => {
    const runArray = array;

    for (let i = 0; i < runArray.length; i++) {
        switch (runArray[i] % 2 !== 0) {
            case true:
                runArray[i]++;
                break;
            case false:
                runArray[i]--;
        }
    }
    return runArray;
}

console.log(numberChange([3, 5, 2, 4])); //➞ expected output: [4, 6, 1, 3]
console.log(numberChange([6, 9, 10, 20])); //➞ expected output: [5, 10, 9, 19]

// 5.

console.log("\n5:");

const capitalize = array => {
    const runArray = array;
    let runItem = "";

    for (let i = 0; i < runArray.length; i++) {
        runArray[i] = runArray[i].toLowerCase();
        runItem = runArray[i].split("");
        runItem.splice(0, 1, runItem[0].toUpperCase());
        runArray.splice(i, 1, runItem.join(""));
    }
    return runArray;
}

console.log(capitalize(["matt", "sara", "lara"])); //➞["Matt", "Sara", "Lara"]
console.log(capitalize(["samuel", "MARIA", "luke", "mary"])); //➞["Samuel", "Maria", "Luke", "Mary"]
console.log(capitalize(["Cynthia", "Karen", "Jane", "Carrie"])); //➞["Cynthia", "Karen", "Jane", "Carrie"]

// 6.

console.log("\n6:");

const noDublicates = array => {
    const OUTPUT_ARRAY = [];

    for (let i = 0; i < array.length; i++) {
        OUTPUT_ARRAY.indexOf(array[i]) === -1 ? OUTPUT_ARRAY.push(array[i]) : "";
    }
    return OUTPUT_ARRAY;
}

console.log(noDublicates([1, 4, 4, 7, 7, 7])); //➞[1, 4, 7]
console.log(noDublicates([1, 6, 6, 9, 9])); //➞[1, 6, 9]
console.log(noDublicates([2, 2, 2, 2, 2, 2])); //➞[2]
console.log(noDublicates([5, 10, 15, 20, 25])); //➞[5, 10, 15, 20, 25]

// 7.

console.log("\n7:");

const repeatIt = (item, times = 1) => {
    const OUTPUT_ARRAY = [];

    for (let i = 1; i <= times; i++) {
        OUTPUT_ARRAY.push(item);
    }
    return OUTPUT_ARRAY;
}

console.log(repeatIt("example", 3)); //➞["example", "example", "example"]

// BONUS

console.log("\nBonus Task:")

const isFactor = array => {
    let isProduct = null;

    for (let i = 1; i < array.length; i++) {
        isProduct = false;

        for (let j = 1; j <= 10; j++) {
            switch (array[i] / j === array[i - 1]) {
                case true:
                    isProduct = true;
                    break;
            }
        }
        if (isProduct === false) {
            return false;
        }
    }
    return true;
}

console.log(isFactor([1, 2, 4, 8, 16, 32])); //➞ true
console.log(isFactor([1, 1, 1, 1, 1, 1])); //➞ true
console.log(isFactor([2, 4, 6, 7, 12])); //➞ false
console.log(isFactor([10, 1])); //➞ false