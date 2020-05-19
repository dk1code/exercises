"use strict";

// 1.

let stringOne = "I can walk in the park all day!";
console.log(`1. ${stringOne.substring(18, 22)}`);

// 2.

let stringTwo = "Hello World";
console.log(`2. ${stringTwo.toUpperCase()}`);

// 3.

let stringThree = "Hello Earthling";
console.log(`3. ${stringThree.toLowerCase()}`);

// 4.

let stringFour = "JavaScript";
console.log(`4. ${stringFour.substring(3, 6)}`);

// 5.
let stringFive = "nice shoes";
console.log(
  `5.\nThe string \"nice shoes\" conatins a 'l': ${stringFive.includes(
    "l"
  )}\nThe string \"nice shoes\" conatins a 'n': ${stringFive.includes("n")}`
);

// 6.

let stringSix = "Bananas";
console.log(`6. ${stringSix[0]}${stringSix}${stringSix[0]}`);

// 7.

let stringSeven = "Scritch";
console.log(
  `7. ${stringSeven.substring(4)}${stringSeven}${stringSeven.substring(4)}`
);

// 8.

let stringEight = "BoogieWoogie";
console.log(
  `8. ${stringEight[stringEight.length - 1]}${stringEight.substring(
    1,
    stringEight.length - 1
  )}${stringEight[0]}`
);

// 9.

let firstName = "Daniel",
  city = "Berlin",
  occupation = "web developer";
console.log(
  `9. My name is ${firstName}. I live in ${city} and I study to become a ${occupation}.`
);

// 10.

let stringTen = "the quick brown fox";
console.log(`10. ${stringTen[0].toUpperCase()}${stringTen.substr(1)}`);
