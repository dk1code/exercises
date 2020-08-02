"use strict"

const button = document.querySelector("button")
const list = document.querySelector("ul")
const destinations = document.querySelectorAll("li")

const toggleDisplay = () => {
    list.classList.toggle("d-none")
    button.textContent = list.classList.contains("d-none") ? "Show destinations" :
        "Hide destinations"

}

button.addEventListener("click", toggleDisplay)

// *** Bonus ***



destinations.forEach(elem =>
    elem.addEventListener("click", (item) => {
        let selected = document.querySelector(".active")
        selected.classList.remove("active")
        item.target.classList.add("active")

        let message = document.querySelector(".message")
        if (!message) {
            message = document.createElement("div")
            message.classList.add("alert", "alert-success", "mt-4", "message")
        }

        message.textContent = `You selected ${item.target.textContent}`
        list.append(message)
    }))