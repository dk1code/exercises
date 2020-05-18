"use strict";

// 0.

let x = 20, y = 30;

// 1.

console.log("1:", x === y);

// 2.

console.log("2:", x !== y);

// 3.

console.log("3:", x > y);

// 4.

console.log("4:", x <= y);

// 5.

console.log("5:", x < y);

// 6.

let z = 5;
console.log("6:", (z * x) > (z + y));

// 7.

console.log("7:", (x - z) < (y / z));

// 8.

console.log("8:", (x === y) && (y === z) && (x === z) ? true : false);

// 9.

console.log("9:", (x % z) === (y % z));

// 10.

console.log("10.1:", (x + z) > (y - z));
console.log("10.2:", (x * z) > (y - z));