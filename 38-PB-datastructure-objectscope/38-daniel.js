"use strict";

// 1.

console.log("1:")

const STUDENT = {
    firstName: "John",
    lastName: "Smith",
    class: 12
};

const myMethods = {
    introduction: function (firstN, lastN, classIn) {
        return `${firstN} ${lastN} is a STUDENT in ${classIn}`;
    },
    objectLength: function (object) {
        return Object.keys(object).length;
    }
}

console.log(myMethods.introduction(STUDENT.firstName, STUDENT.lastName, STUDENT.class));

// 2.

console.log("\n2:")

const PERSON = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    city: "Paris",
    country: "France",
    output: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city}, ${this.country}.`;
    }
}

console.log(PERSON.output());

// 3.

console.log("\n3:")

// Method code is in :17ff.
console.log(myMethods.objectLength(PERSON));