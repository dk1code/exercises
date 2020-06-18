"use strict";

// 1.

const euroCities = ["Paris", "London", "Valetta", "Prague", "Rome"];
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

const worldCities = asianCities.concat(euroCities);
console.log("9.", worldCities);

// 10.

asianCities.reverse();
console.log("10:", asianCities);

// 11.

worldCities.splice(2, 1, "Toronto");
console.log("11:", worldCities);

// 12.

worldCities.splice(1, 0, "Washington");
console.log("12:", worldCities);

// 13.

console.log("13 - join():", worldCities.join(" + "));

const stringFunc = array => {
    let output = "";
    for (let i = array.length; i > 0; i--) {
        output += array[i - 1] + ", ";
    }
    return output;
}
console.log("13 - loop:", stringFunc(worldCities));