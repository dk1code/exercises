"use strict";

// 1.

console.log("1:");

const PERSON_1 = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris"
}

const loopThroughObject = object => {
    const runArray = Object.entries(object);
    for (const property in PERSON_1) {
        console.log(`${property}: ${PERSON_1[property]}`)
    }
    return "";
}

loopThroughObject(PERSON_1);

// 2.

console.log("\n2:");

const getObjectValues = object => Object.values(object);

console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}));

// 3. 

console.log("\n3:");

const PERSON_TWO = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    output: function () {
        {
            return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}.`;
        }
    }
}

console.log(PERSON_TWO.output());

// Bonuses

// B1.

console.log("\nBonus task 1:");

const objectToArray = object => {
    const outputArray = [];
    for (const property in object) {
        outputArray.push([property, object[property]]);
    }
    return outputArray;
}

console.log(objectToArray({
    A: 1,
    B: 2,
    C: 3
})); // [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]

console.log(objectToArray({
    cats: 1,
    dogs: 2,
    turtles: 4
})); // [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]

// B2.

console.log("\nBonus task 2:");

const STUDENT = {
    name: "Mike",
    class: "4A",
    course: "English"
}

const objectToArray2 = object => {
    const outputArray = [];
    for (const property in object) {
        outputArray.push(property);
    }
    return outputArray;
}

console.log(objectToArray2(STUDENT)); // [ 'name', 'class', 'course' ]

// B3.

console.log("\nBonus task 3:");

const FIRST = {
    firstName: "John"
}
const LAST = {
    lastName: "Smith"
}

const objectMerge = (object1, object2) => {
    let outputObject = {};
    for (const property in object1) {
        outputObject[property] = object1[property];
    }
    for (const property in object2) {
        outputObject[property] = object2[property];
    }
    return outputObject;
}

// The 'key' of the property is key. If you write the same key twice into an object, it overwrites the already existing property with the same key. If the value of the property is different, the last one written will be saved.

console.log(objectMerge(FIRST, LAST));

// B4.

console.log("\nBonus task 4:");

const PERSON_THREE = {
    name: "John",
    job: "teacher"
}

const objectSwitch = object => {
    let outputObject = {};
    for (const property in object) {
        outputObject[object[property]] = property;
    }
    return outputObject;
}

console.log(objectSwitch(PERSON_THREE));

// B5.

console.log("\nBonus task 5:");

const objectEntries = object => {
    let outputArray = [];
    outputArray.push(Object.keys(object));
    outputArray.push(Object.values(object));
    
    return outputArray;
}

console.log(objectEntries({
    a: 1,
    b: 2,
    c: 3
}));
console.log(objectEntries({key: true}));