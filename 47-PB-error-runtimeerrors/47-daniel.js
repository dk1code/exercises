"use strict";

// 1.

class Dog {
    constructor(name) {
        this.name = name;
        this.bark = function () {
            console.log(`${this.name} says woof`);
        };
    }
}

let fido = new Dog("fido");
fido.bark();

// The method was not part of the constructor

// 2.

const getMonthName = (month) => {
    if (month === parseInt(month) &&
        month > 0 &&
        month < 13) {
        let monthName = new Date(`2020-${month < 10 ? "0" + month : month}-01`)
        return monthName.toLocaleString("default", {
            month: "long"
        })
    } else {
        throw new Error("invalid month number")
    }
}

console.log(getMonthName(9))

// 3.

const reverseString = str => {
    if (typeof str === "string") {
        if (str === "") {
            return ""
        } else {
            return reverseString(str.substr(1)) + str.charAt(0)
        }
    } else {
        throw new Error("ERROR! This is not a string!")
    }
}

console.log(reverseString("Example"))
// console.log(reverseString(2019)) // ERROR! This is not a string!

// 4.

// This code doesn't work, because arrays are objects and the `===` operator returns in this case only true if it's the same referance.

function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
        return true

    } else {
        return false
    }
}

console.log(compareArrays([1, 2], [1, 3]))
console.log(compareArrays([1, 2], [1, 2]))
console.log(compareArrays([4, 5, 6], [4, 5, 6]))
console.log(compareArrays([4, 7, 6], [4, 5, 6]))

// 5.

console.log("\n5:")

const sum = arr =>
    arr.length === 0 ? 0 : arr[0] + sum(arr.slice(1))

console.log(sum([1, 2, 3]));