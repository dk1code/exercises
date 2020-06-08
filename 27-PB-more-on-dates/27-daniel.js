"use strict";

let inputDate = new Date("2020-09-14");

const daysRemaining = (date) => {
  let input = date.getDate();
  let compare = null,
    comparison = null;

  switch (date.getMonth()) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      compare = 31;
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      compare = 30;
      break;
    case 1:
      compare = 28;
      break;
    default:
      console.log("***SWITCH ERROR***");
  }
  comparison = compare - input;

  if (comparison > 1) {
    console.log(`There are ${comparison} days to the end of the month.`);
  } else if (comparison === 1) {
    console.log("There is one day to the end of the month.");
  } else if (comparison === 0) {
    console.log("This is the last day of the month.");
  } else {
    console.log("***IF BLOCK ERROR***");
  }
};

daysRemaining(inputDate);
