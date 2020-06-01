"use strict";

let jsonObj = { name: "PB Exercise 19", version: "0.1", addinfo: "This ist to tryout JSON with Sting Interpolation" };

console.log(
    `Welcome to ${jsonObj.name}. This is version: ${jsonObj.version}.`)
console.log(`Additional Information was given to this run: ${jsonObj.addinfo ? `\n${jsonObj.addinfo}` : false}`
)