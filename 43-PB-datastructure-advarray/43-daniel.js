"use strict";

// 1.

console.log("1:");

const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

// with for of loop

const sumValues = arr => {
    let sum = 0;
    for (let each of arr) {
        sum += each.amount;
    }
    return sum; // 1075
}

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// const sumValues = arr =>
//     arr.map((value, index) => value = arr[index].amount).reduce(reducer);

// built together with different ressources from the internet

console.log(sumValues(orders));

// 2.

console.log("\n2:");

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

console.log(arrayOfNumbers.map(item => item + 1));

// 3.

console.log("\n3:");

const filterEvens = arr =>
    arr.filter(number => !(number % 2));

console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]

// 4.

console.log("\n4:");

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (arr, str) => {
    let output = arr.filter(word => word.includes(str));
    output = output.map(word => word[0].toUpperCase() + word.slice(1));
    return output;
}

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

// 5.

console.log("\n5:");

const sum = arr =>
    arr.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum([1, 2, 3, 4, 5])); //returns 15
console.log(sum([6, 7, 7])); //returns 20

// 6.

console.log("\n6:");

const powArray = [4, 9, 16, 25];

const squRoot = arr =>
    arr.map(num => Math.sqrt(num));

console.log(squRoot(powArray)); // [ 2, 3, 4, 5 ]