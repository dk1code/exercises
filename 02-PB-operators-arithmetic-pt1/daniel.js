<<<<<<< HEAD
// 0:

let x = 2, y = 4;

// 1:

console.log("1:", x + y);

// 2:

console.log("2:", x - y);

// 3:

console.log("3:", x * y);

// 4:

console.log("4:", x / y);

// 5.1

let z = 10;

const resultOne = x * y / z;
console.log("5.1:", resultOne);

// 5.2

let a = 15;
let b = 9;
console.log("5.2:", a / b);


// 6.
let c = 20;
const resultTwo = (a + b) * c;
console.log("6:", resultTwo);

// 7.

console.log("7:", ++a);

// 8.

console.log("8:", --b);

// 9.

let d = b - a;
console.log("9:", d+c);

// 10.
console.log("10:", resultOne % resultTwo);
=======
// 0.
let x = 6;
console.log(x, typeof x);
let y = 7;
console.log(y, typeof y);

// 1.
console.log(x + y);

// 2.
console.log(x - y);
console.log(y - x);

// 3.
console.log(x * y);

// 4.
console.log(x / y);

// 5.
let z = 10;
console.log(z, typeof z);
let resultOne = (x * y) / z;
console.log(resultOne);

// 6.
let a = 15;
let b = 9;
console.log(a / b);

// 7.
let c = 20;
console.log(c, typeof c);
let resultTwo = (a + b) * c;
console.log(resultTwo);

// 8.
console.log(++a);

// 9.
console.log(--b);


// 10. my question: the answer should be 14 but why is the machine calculation result 12?
let d = b - a;
console.log(d);
console.log(d + c);

// 11.
console.log(resultOne % resultTwo);
>>>>>>> 2b144e551a9dffbf5d09cf3e123c1b016f750e5b
