"use strict";

// 0.

let a = true, b = false;

// 1.

// 1a.

console.log("1a.", a && b); // false

// 1b.

console.log("1b.", a || b); // true

// 1c.

console.log("1c.", !(a && b)); // true

// 2.

let x = 5, y = 15, z = 20;

// 3.

// 3a.

console.log("3a.", x > z && x > y); // false

// 3b.

console.log("3b.", x !== y); // true

// 3c.

console.log("3c.", z < y || z > x); // true

// 3d.

console.log("3d.", x === z || x !== y); // true

// 3e.

console.log("3e.", x >= 10 && y <= 10); // false

// 3f.

console.log("3f.", (x * z) < 100 || (x * y) > 100); // false

// 4.

/* I skipped the bonus task */