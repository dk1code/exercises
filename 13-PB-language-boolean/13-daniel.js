"use strict";

// 1.

console.log("1a.", 3 == "3" ? true : false); // true
console.log("1b.", 3 === "3" ? true : false); // false

/* 
1. The first comparison is gives output true, because the types can be different. 
The strict comparison gives false because it checks additionally for  equality of data type.
2. We should always use strict comparision, because there is no transformation of the data type and therefore no false positives.
3. `=` is the assignment operator. It will give an error back.
*/

// 2.

let bool = true;
console.log("2.", !bool ? true : false); // false

// 3. 

/* It will print Stacey. Because givenName is not defined, so in the short circuit it jumps to the first defined option. */

let firstName, givenName;

firstName = "Stacey";
let name = givenName || firstName || "John";

console.log("3.", name);