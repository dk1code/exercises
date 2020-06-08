"use strict";

let inputDate = new Date("2020-09-14");

const WEEKDAY_CHECK = (date) => {
    switch (date.getDay()) {
        case 0: ;
        case 6:
            console.log(`The ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} is on the weekend.`);
            break;
        case 1: ;
        case 2: ;
        case 3: ;
        case 4: ;
        case 5:
            console.log(`The ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} is a week day.`);
            break;
        default: console.log("***SWITCH ERROR***");
    }
}

WEEKDAY_CHECK(inputDate);