"use strict";

// 1.

let determiner = Math.random() * 9 + 1;
determiner = parseInt(determiner);
let negativ = Math.random();

negativ < 0.5 ? determiner = determiner * -1 : "";
console.log(`var determiner is ${determiner}`)

{
  let x = null;
  if (determiner < 0) {
    x = "Less then 0";
  } else {
    x = "Greater or equal to 0";
  }
  console.log("1:", x);
}

// 2.

{
  let updater = null;
  if (determiner >= 0) {
    updater = "Greater or equal to 0";
    let message = "Positive Integer";
    console.log(`2: Determiner is "${updater}", with a value of a ${message}`);
  } else {
    updater = "Less then 0";
    console.log(`2: Determiner is "${updater}"`);
  }
}

// console.log(message) would not print outside of the if case, since the var is declared inside and therefore has the scope of the block after if

// 3.

/* I personally think at the moment, that I would only use it for really simple true/ false cases within string interpolation. In general it is usable whenever it is eual to a simple `if{} else{}` case */

/*
16-PB-conditionals-pt2/16-daniel.js:30
console.log(`4: Is Mark's BMI higher then John's: It is ${!isBmiHigher ? "not" : ""}.`);
*/