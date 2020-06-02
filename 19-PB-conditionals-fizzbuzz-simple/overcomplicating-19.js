"use strict";

let jsonObj = {
  name: "PB Exercise 19",
  version: "0.4.1",
  addinfo:
    "Have established an interface with readline. But it doesn't work for all cases. But for the task values it gives the right results",
};

console.log(
  "**********************************************************************************\n"
);
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

// taken from https://stackoverflow.com/questions/24182097/node-js-endless-loop-function-quit-upon-certain-user-input
const readline = require("readline");

function replDemo() {
  return new Promise(function (resolve, reject) {
    let rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt("Give an integer> ");
    rl.prompt();
    rl.on("line", function (line) {
      if (line === "q" || line === "quit" || line === "exit") {
        rl.close();
        return;
      }

      // if (typeof(line) === "number") {
        let inputVar = parseInt(line);
      console.log(inputVar, typeof (inputVar));
      if (inputVar == "NaN") {
        console.log("This was not an integer")
      }
        else if (inputVar % 3 === 0 && inputVar % 5 === 0) {
          console.log("FizzBuzz");
        } else if (inputVar % 3 === 0) {
          console.log("Fizz");
        } else if (inputVar % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log("Try again!")
        }
        // rl.prompt();
      // } else {
      //   console.log("\x1b[5m\x1b[32mThis was not an integer\x1b[0m");
        rl.prompt();
      
    
      rl.prompt();
    }).on("close", function () {
      console.log("\nRun was endet");
      // resolve(42); // this is the final result of the function
    });
  });
}

async function run() {
  try {
    let replResult = await replDemo();
    console.log("repl result:", replResult);
  } catch (e) {
    console.log("failed:", e);
  }
}

run();
