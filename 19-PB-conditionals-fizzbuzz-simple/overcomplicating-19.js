"use strict";

let jsonObj = { name: "PB Exercise 19", version: "0.2", addinfo: "This ist to tryout while-loop" };

console.log("**********************************************************************************\n");
console.log(
  `Welcome to\x1b[31m ${jsonObj.name}\x1b[0m. This is version:\x1b[31m ${jsonObj.version}\x1b[0m.`
);
console.log(
  `Additional Information was given to this run: \x1b[31m \n"${
    jsonObj.addinfo ? `${jsonObj.addinfo}` : false
  }\x1b[0m"`
);
console.log(
  "\n**********************************************************************************\n"
);

let isRunning = true, i =0;
while (isRunning === true) {
    
    if (i < 10 === true) {
        console.log(`This is run: ${i + 1}`);
    } else {
        isRunning = false;
    }
    i++;
}