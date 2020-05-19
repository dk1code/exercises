"use strict";
// **Bassic Arithmetics**

// Q1.

console.log("Q1:", 6450 / 15);

// Q2.

console.log("Q2:", 500 * 52);

// **Percentage **

// Q3.

console.log("Q3:", (17 / 30 * 100).toFixed(2) + "%");

// **Geometry Formulas**

// Q4.

console.log("Q4:", 4 * 4.75 + "cm");

// Q5.

console.log("Q5:", 5 + 6 + 7 + "cm");

// Q6.

console.log("Q6:", 5 ** 2 + "cm²");

// Q7.
// calculation with Heronean Algorithm

let a = 5, b = 6, c = 7;
let s = (a + b + c) / 2;
let sHeron = s * (s - a) * (s - b) * (s - c);
let answerQ7 = Math.sqrt(sHeron);


console.log("Q7:", answerQ7.toFixed(2) + "cm²");

// Q8.

console.log("Q8:", 9 ** 3 + "cm³");

// ** Consumer Formula **

// Q9.

function tip(summ, perc) {
    return summ + summ * perc / 100;
    
}

console.log("Q9.1: " + "You give €" + tip(22.35, 10).toFixed(2) + ".");
console.log("Q9.2: " + "You give €" + tip(26.67, 15).toFixed(2) + ".");
console.log("Q9.3: " + "You give €" + tip(35.92, 20).toFixed(2) + ".");

// **Average **

// Q10.

let times = [8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4], sumTimes = 0;
for (let i = 0; i < times.length; i++) {
    sumTimes += parseFloat(times[i], 9);
}

console.log("Q10: On average Noemy worked " + sumTimes / times.length + "h a day.");

// Q11.

let testSc = (85 * 6) - (75 + 70 + 85 + 90 + 100);

console.log("Q11: His score in the sixth test was: " + testSc + "%.");

// Q12.

let testSc2 = 80 * 9 - 78 * 8;

console.log("Q12: James needs a minimum of " + testSc2 + "% to get an 80% average.");

