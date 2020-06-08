"use strict";

// 1 *** Create a function that multiples a number by another number.

function myFunction(x = 0, y = 1) {
  console.log(x * y);
}

// 2 *** Rework the syntax of the above function so that the function declaration is stored as a value.

const MY_FUNCTION = function (x = 0, y = 1) {
  console.log(x * y);
};

// 3 *** Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const MULIPL_FUNC = (x = 0, y = 1) => {
  console.log(x * y);
};

// 4. *** reate functions (using all three declarations) to check the remainder of division given two numbers.


function divFunction(x = 0, y = 1) {
  console.log(x / y);
}

const DIV_FUNC_ANON = function (x = 0, y = 1) {
  console.log(x / y);
}


const DIV_FUNC = (x = 0, y = 1) => {
  console.log(x / y);
};
