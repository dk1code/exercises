"use strict;";

// 1. *** Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

const COLOR_ARRAY = ["red", "blue", "green", "yellow"];
let inputColor = COLOR_ARRAY[parseInt(Math.random() * 4)];

switch (inputColor) {
  case "red":
    console.log("1:", "\x1b[31mThis is red\x1b[0m");
    break;
  case "blue":
    console.log("1:", "\x1b[34mThis is blue\x1b[0m");
    break;
  case "green":
    console.log("1:", "\x1b[32mThis is green\x1b[0m");
    break;
  case "yellow":
    console.log("1:", "\x1b[33mThis is yellow\x1b[0m");
    break; // unnecessary
  // no default needed in this configuration
}

// 2. *** Create a switch statement that prints different comments depending on a grade.

let gradeGenerator = Math.round(Math.random() * 5 + 1);

switch (gradeGenerator) {
  case 1:
    console.log(`\n2: A ${gradeGenerator} is 'ausgezeichnet'`);
    break;
  case 2:
    console.log(`\n2: A ${gradeGenerator} is 'gut'`);
    break;
  case 3:
    console.log(`\n2: A ${gradeGenerator} is 'befriedigend'`);
    break;
  case 4:
    console.log(`\n2: A ${gradeGenerator} is 'ausreichend'`);
    break;
  case 5:
    console.log(`\n2: A ${gradeGenerator} is 'mangelhaft'`);
    break;
  case 6:
    console.log(`\n2: A ${gradeGenerator} is 'ungenügend'`);
    break;
}

// 3. *** Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

let fruitVar = "apple";

switch (fruitVar) {
  case "apple":
  case "strawberry":
    console.log(`\n3. ${fruitVar}s grow in Germany as well.`);
    break;
  case "banana":
  case "orange":
    console.log(`\n3. ${fruitVar}s don't grow in Germany.`);
}

// 4 ***
/* If percentageComplete is below 30, print "Still a long way to go".
If the percentageComplete is between 30 and 50, print "Slowly getting there".
If percentageComplete is between 51 and 80, print "You can do it!".
If percentageComplete is between 81 and 99, print "This is the last push!".
If percentageComplete is 100, print "You're there. Well done!". */

let percentVar = Math.random() * 100;
let percentExpr = null;

if (percentVar < 30) {
  percentExpr = "bellow30";
} else if (percentVar >= 30 && percentVar < 51) {
  percentExpr = "bellow51";
} else if (percentVar >= 51 && percentVar < 81) {
  percentExpr = "bellow81";
} else if (percentVar >= 81 && percentVar < 100) {
  percentExpr = "bellow100";
} else {
  percentExpr = "exact100";
}

switch (percentExpr) {
    case "bellow30":
        console.log("\n4:", "Still a long way to go");
        break;
    case "bellow51":
        console.log("\n4:", "Slowly getting there");
        break;
    case "bellow81":
        console.log("\n4:", "You can do it!");
        break;
    case "bellow100":
        console.log("\n4:", "This is the last push!");
        break;
    case "exact100":
        console.log("\n4:", "You're there. Well done!");
        break;
}

// 5. *** When should you use a switch statement versus an if else statement. Comment your answer in your js file.

/* There is no need to use a switch at all, because an if block has infinite conditions. But switch is a nice shorthand for problems, which can be solved by checking against strictly defined values. */