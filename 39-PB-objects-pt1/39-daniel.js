"use strict";

// 1.

console.log("1:")

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

console.log("\n2:")

const getObjectValues = object => Object.values(object);

console.log(getObjectValues({ choice1: "tea", choice2: "coffee", choice3: "milk" }));

// 3. 

console.log("\n3:")

const PERSON_TWO = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    output: function () {{
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}.`;
        }
    }
}

console.log(PERSON_TWO.output());