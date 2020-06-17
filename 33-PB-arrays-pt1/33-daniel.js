"use strict";

// 1.

const euroCities = ["Paris", "London", "Valetta", "Praguw", "Rome"];
console.log("1a:", euroCities);
let secondItem = euroCities[1];
console.log("1b:", secondItem);

// 2.

euroCities[0] = "Berlin";
console.log("2:", euroCities);

// 3.

console.log("3:", euroCities.length);

// 4.

euroCities.pop();
console.log("4:", euroCities);

// 5.

euroCities.push("Budapest");
console.log("5:", euroCities);

// 6.

euroCities.splice(1, 2);
console.log("6:", euroCities);

// 7.

const asianCities = ["Beying", "Hanoi", "Bankok", "Seoul", "Tokio"];
console.log("7:", asianCities);

// 8.

let arraySlice = asianCities.slice(1, 4);
console.log("8:", arraySlice);

// 9. 

asianCities.reverse();
console.log("9:", asianCities);