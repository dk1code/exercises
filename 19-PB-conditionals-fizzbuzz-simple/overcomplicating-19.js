"use strict";

let jsonObj = { name: "PB Exercise 19", version: "0.3.2", addinfo: "Establishing an interface: 1st try with addListener() --> Not the required result. Works all the time, only" };

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

let stdin = process.openStdin();

let isRunning = true, inputVar = null;
while (isRunning === true) {
    
  stdin.addListener("data", function (d) { inputVar = d });
    console.log(`\n\nThis was your input:${inputVar}`);
    isRunning = false;
}