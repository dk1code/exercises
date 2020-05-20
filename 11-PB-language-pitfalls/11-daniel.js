"use strict";

// 1.

// NaN stands for "NotaNumber"

console.log("1a:", isNaN("hello")); // true
console.log("1b:", isNaN(3)); // false
console.log("1c:", typeof (NaN)); // number

// NaN is of type 'number'

// 2.

console.log("\n2:", parseFloat((0.1 * 0.2).toFixed(2)));

// 3.

console.log("\n3a:", Infinity / 0); // Infinity; type: number
console.log("3b:", Infinity / Infinity); // NaN; type: number
console.log("3c:", 1 / 0); // Infinity; type: number