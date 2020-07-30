"use strict"

// 1.

const body = document.querySelector("body").style

body.width = "100%"
body.fontFamily = "Arial"

// 2.

document.querySelector('.title').style.textAlign = 'center'

// 3.

const category = [...document.getElementsByClassName("category")]
category.map(elem => {
    elem.style.color = "red"
    elem.style.fontStyle = "italic"
})

// 4.

const colorGenerator = () => {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let velocity = Math.random()
    return `rgba(${red}, ${green}, ${blue}, ${velocity})`
}

const foodCategory = [...document.getElementsByClassName("food-category")]

foodCategory.forEach(elem => elem.style.backgroundColor = colorGenerator())

// 5.

document.querySelector("main").style.display = "flex"

if (window.innerWidth < 500) {
    document.querySelector("main").style.flexDirection = "column"
}

// 6.

const warning = document.getElementById("warning")
warning.style.fontFamily = "Helvetica"
warning.style.fontSize = "20px"

// 7.

const allergy = document.querySelector('.allergy-warning')

allergy.style.display = 'flex'
allergy.style.flexDirection = 'column'
allergy.style.alignItems = 'center'

// 8.

let myFooter = document.querySelector('.footer')
myFooter.style.display = 'flex'
myFooter.style.justifyContent = 'center'
myFooter.style.flexWrap = 'wrap'

let footer = [...document.getElementsByClassName('food-desc')]
footer.forEach(function (elem) {
    elem.style.border = '4px solid green'
    elem.style.margin = '1rem'
    elem.style.padding = '50px'
    elem.style.borderRadius = '20% 20% 0 0'
    elem.style.height = '7rem'
    elem.style.width = '7rem'
    elem.style.backgroundColor = 'lightblue'
    elem.style.display = 'flex'
    elem.style.justifyContent = 'center'
    elem.style.alignItems = 'center'
})