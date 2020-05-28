"use strict";
// "use .lazyGuy()";

let taG1 = 89,
  taG2 = 120,
  taG3 = 103;

let tlG1 = 116,
  tlG2 = 94,
  tlG3 = 123;

let tmG1 = 97,
  tmG2 = 134,
  tmG3 = 195;

// 1a.

console.log("\n1a.");
let taAv = (taG1 + taG2 + taG3 / 3).toFixed(2);
console.log(`The average of Aleeza's team is ${taAv}`);

let tlAv = (tlG1 + tlG2 + tlG3 / 3).toFixed(2);
console.log(`The average of Lis' team is ${tlAv}`);

// 1d. bit
let tmAv = (tmG1 + tmG2 + tmG3 / 3).toFixed(2);

// 1b.

console.log("\n1b.");

let betterTeam = null;

if (taAv > tlAv) {
  betterTeam = "Aleeza's team is better";
} else if (taAv < tlAv) {
  betterTeam = "Lis' team is better";
} else {
  betterTeam = "Both teams are exactly the same";
}
console.log(betterTeam);

/* Insert alternative with string Interpolation here */
// taAv = 1; tlAv = 1; // gives false positive if both values are the same
console.log(
  "Ternary solution:",
  taAv > tlAv ? "Aleeza's team is better" : "Lis' team is better"
);

// 1c.

console.log("\n1c.");

let taAvRand = taAv * (Math.random() * 2),
  tlAvRand = tlAv * (Math.random() * 2);

if (taAvRand > tlAvRand) {
  betterTeam = "Aleeza's team is better";
} else if (taAvRand < tlAvRand) {
  betterTeam = "Lis' team is better";
} else {
  betterTeam = "Both teams are exactly the same";
}
console.log(betterTeam);

// 1d. & 1e.

console.log("\n1d. & 1e.");

taAvRand = taAv * (Math.random() * 2);
tlAvRand = tlAv * (Math.random() * 2);
let tmAvRand = tmAv * (Math.random() * 2);

if (taAvRand > tlAvRand && taAvRand > tmAvRand) {
  betterTeam = "Aleeza's team is better";
} else if (tlAvRand > taAvRand && tlAvRand > tmAvRand) {
  betterTeam = "Lis' team is better";
} else if (tmAvRand > taAvRand && tmAvRand > tlAvRand) {
  betterTeam = "Mary's team is better";
} else {
  betterTeam = "All three teams are exactly the same";
}
console.log(betterTeam);
