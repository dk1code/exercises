"use strict";

let jsonObj = { name: "PB Exercise 19", version: "0.3.1", addinfo: "Establishing an interface: 1st try with readline module --> Works but can't be used during runs" };

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

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let isRunning = true, inputVar = "";
while (isRunning === true) {
    
    readline.question(`Please, give an input!`, (input) => {
        inputVar = input;
     readline.close();
   });
    console.log(`\n\nThis was your input:${inputVar}`);
    isRunning = false;
}