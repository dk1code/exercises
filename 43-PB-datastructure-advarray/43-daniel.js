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

// built together with different ressources from the internet

// const sumValues = arr =>
//     arr.map((value, index) => value = arr[index].amount).reduce((accumulator, currentValue) => 
// accumulator + currentValue);

const sumValues = arr =>
    orders.reduce(function
        (previousValue, currentValue) {
            return currentValue["amount"] + previousValue
    }, 0);

console.log(sumValues(orders)); // 1075

// 2.

console.log("\n2:");

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

console.log(arrayOfNumbers.map(num => num + 1));

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
    arr.reduce((prev, curr) => prev + curr);

console.log(sum([1, 2, 3, 4, 5])); //returns 15
console.log(sum([6, 7, 7])); //returns 20

// 6.

console.log("\n6:");

const powArray = [4, 9, 16, 25];

const squRoot = arr =>
    arr.map(num => Math.sqrt(num));

console.log(squRoot(powArray)); // [ 2, 3, 4, 5 ]