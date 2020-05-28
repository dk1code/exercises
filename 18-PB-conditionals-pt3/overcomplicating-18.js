"use strict";

const ALEEZA_SCORES = ["Aleeza", 89, 120, 103];
const LIS_SCORES = ["Lis", 116, 94, 123];
const MARY_SCORES = ["Mary", 97, 134, 123];

let aleezaAv = sumFunc(ALEEZA_SCORES),
  lisAv = sumFunc(LIS_SCORES),
  maryAv = sumFunc(MARY_SCORES);

function sumFunc(x) {
    let sum = null;
    for (let i = 1; i < (x.length); i++) {
        sum += x[i];
        // console.log(sum);
    }
   return sum = parseFloat((sum / x.length).toFixed(2));
}

console.log(`${ALEEZA_SCORES[0]}'s Average is ${aleezaAv}`);
console.log(`${LIS_SCORES[0]}'s Average is ${lisAv}`);
console.log(`${MARY_SCORES[0]}'s Average is ${maryAv}`);

console.log("\nSecond function:")

function bestTeam() {
    let funcArray = [aleezaAv, lisAv, maryAv];

    for (let i = 0; i < funcArray.length; i++) {
        funcArray[i] = parseFloat((funcArray[i] * (Math.random() * 2)).toFixed(2));
        // console.log(funcArray[i]);
    }
    console.log(Math.max(funcArray[0], funcArray[1], funcArray[2]));
    if (Math.max(funcArray[0], funcArray[1], funcArray[2]) === funcArray[0]) {
      return "Aleeza's";
    } else if (
      Math.max(funcArray[0], funcArray[1], funcArray[2]) === funcArray[1]
    ) {
      return "Lis'";
    } else if (
      Math.max(funcArray[0], funcArray[1], funcArray[2]) === funcArray[2]
    ) {
      return "Mary's";
    } else {
        return "not sure";
    }
}

console.log(`The best team is ${bestTeam()}`);