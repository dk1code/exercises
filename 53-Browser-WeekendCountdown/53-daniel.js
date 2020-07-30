"use strict";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let text = document.getElementById("text")
console.log(text)
let button = document.querySelector("button")

const calculate = () => {
    let name = document.querySelector("input").value
    let currDate = new Date().getDay()
    let toWE = 6 - currDate
    let calcText = toWE > 1 ? `Only ${toWE} days to the weekend.` : "It's weekend."

    text.innerHTML = `Hello ${name}. Today is ${days[currDate]}. ${calcText}`
}

button.addEventListener("click", calculate)