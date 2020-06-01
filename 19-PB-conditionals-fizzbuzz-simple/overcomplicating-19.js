"use strict";

let jsonObj = {
  name: "PB Exercise 19",
  version: "0.3.3",
  addinfo:
    "Establishing an interface: 3rd try with inquirer --> Work not as required. Learning is, that a loop might not the right approach.",
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



let isRunning = true,
  inputVar = null;
while (isRunning === true) {

  const inquirer = require("inquirer");

  let question = [
    {
      type: "input",
      name: "input",
      message: "Please type a number!",
    },
  ];
  inquirer.prompt(question).then((answers) => {
    inputVar = `${answers('name')}`
  });

  console.log(`\n\nThis was your input:${inputVar}`);
  isRunning = false;
}
