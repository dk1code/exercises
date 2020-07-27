"use strict"

const randomNum = Math.floor(parseInt(Math.random() * 10)) + 1

let running = true
let input = prompt("Guess a number between 1-10:")


const checkNum = num => {
    for (let i = 1; i <= 3; i++) {
        if (i === 3 && parseInt(num) !== randomNum) {
          break
        } else if (parseInt(num) === randomNum) {
          return `Success, the number was ${randomNum}! Attempts: ${i}`
        } else {
            num = prompt("Wrong!!! Try again!")
      }
    }
    return `Sorry, you failed to guess the number in three attempts.
    the number was ${randomNum}`
}

alert(checkNum(input))