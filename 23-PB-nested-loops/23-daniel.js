"use strict";

let string = "";

for (let i = 0; i <= 10; i++) {
  string = "";
  for (let ii = 10 - i; ii > 0; ii--) {
    string += " ";
  }
  for (let ii = 1; ii <= i * 2 -1; ii++) {
    string += "*";
  }
  console.log(string);
}

console.log("");

for (let i = 0; i <= 10; i++) {
  string = "";
    for (let ii = 0; ii < i; ii++) {
    string += " ";
  }
  for (let ii = 20 - i * 2 - 1; ii > 0; ii--) {
    string += "*";
  console.log(string);
}