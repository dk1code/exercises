"use strict";

// initialize DOM

// let main, form, inputField, submitBtn, list;

const main = document.querySelector("main")

const form = document.createElement("form")
const inputField = document.createElement("input")
inputField.setAttribute("type", 'text')
inputField.setAttribute("id", 'input')
const submitBtn = document.createElement("input")
submitBtn.setAttribute("type", 'submit')
submitBtn.setAttribute("id", 'submit')
form.append(inputField, submitBtn)

const list = document.createElement("ul")

const mainHeading = document.createElement("h1")
mainHeading.innerText = "Github Username Widget"


main.append(mainHeading, form, list)

const listAnswerItems = (item) => {
    let li = document.createElement("li")
    li.innerText = item.name
    list.appendChild(li)

}

const githubFetch = async (username) => {
    try {
        let url = `https://api.github.com/users/${username}/repos`
        console.log(`$username: ${username}`)
        let answer = await fetch(url)
            .then(data => data.json())
        answer.map(item => listAnswerItems(item))
        console.log(answer)

    } catch (error) {
        console.log(error)
    }
}

let input = inputField.value

// form.addEventListener("change", (e) => {
//     e.preventDefault()
//     return input = inputField.value
// })

submitBtn.addEventlistener("click", (e) => {
    e.preventDefault();
    console.log(`$input: ${input}`)
    githubFetch(input)
})

// submitBtn.onclick = githubFetch(input)

// githubFetch("dk1code")