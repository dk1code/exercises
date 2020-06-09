"use strict";

// 1.

const expoFunc = (x = 0, y = 1) => {
    if (typeof x !== 'number' || typeof y !== 'number' || x === 0) {
        return "expoFunc ERROR -> wrong parameters";
    }

    const VAL1 = x;
    let val2 = y;
    let output = "";

    for (let i = 1; i <= val2; i++) {
        output += ` ${VAL1 ** i}`;
    }

    return output;
}

console.log("1:", expoFunc(3, 5));

// 2.

let fruitVal = "banana";

const printFavoriteFruit = (x) => {
    x = "apple";
    console.log("My favorite fruit is " + x);
}

printFavoriteFruit(fruitVal);

// 3. 

const exponent = (x, y = 1) => {
    let result = x ** y;
    console.log("3:", result);
}
exponent(2, 10);

/* The var result is not accesible outside the funcion, since it has function scope */