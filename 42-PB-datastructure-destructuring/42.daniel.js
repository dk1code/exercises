"use strict";

// 1.

console.log("1:");

let [fruit, vegtable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log(fruit + "\n" + vegtable + "\n" + food);

// 2.

console.log("\n2:");

const costumes = {
    fran: "witch",
    elsa: "princess"
};

console.log(costumes);

let {
    fran,
    elsa
} = costumes;

console.log(fran + "\n" + elsa);

// 3.

console.log("\n3:");

const bands = {
    name: "Regina Spektor",
    artist: "singer/ songwriter and pianist",
    nationality: "American-Russian",
    genre: "indie-pop",
    greatestHit: "Us"
};

// unnecessary sh*t on the side
    
const aAnSwitch = string => {
    let firstChar = string[0].toLowerCase();
    return (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") ? "n" : "";
}

const bandsFunc = ({
    name,
    artist,
    nationality,
    genre,
    greatestHit
}) =>
    `${name} is a${aAnSwitch(nationality)} ${nationality} ${artist}. The musician sings ${genre} and their greatest hit is "${greatestHit}"`;

console.log(bandsFunc(bands));