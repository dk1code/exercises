"use strict";

const BOOKING = (year, month, day) => {
    const CURRENT_DATE = new Date();
    const BOOKING_DATE = new Date(year, month, day);
    console.log(CURRENT_DATE < BOOKING_DATE ? `Your booking for the event on the ${BOOKING_DATE.getDate()}.${BOOKING_DATE.getMonth()+1}.${BOOKING_DATE.getFullYear()} is already guaranteed.` : "Please select a future date!")
}

BOOKING(2020, 5, 15);