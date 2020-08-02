"use strict"

// step 1

let mainHeading = document.querySelector("h1")
let header = mainHeading.closest("header")
header.classList.add("borderGray")

// step 2

const infoSection = document.querySelector(".info")
const packages = document.querySelector(".info-package")
const packageTitles = document.querySelectorAll(".package-title")

if (infoSection.contains(packages)) {
    packageTitles.forEach(elem =>
        elem.previousElementSibling.classList.add("imgBorder"))
}

// throws an error

// step 3

const labels = document.querySelectorAll("label")

labels.forEach(elem => {
    if (elem.classList.contains("mild")) {
        elem.classList.add("borderYellow")
    } else if (elem.classList.contains("intense")) {
        elem.classList.add("borderOrange")
    } else {
        elem.classList.add("borderRed")
    }
})

// step 4

const navList = document.querySelector(".nav-list")
const siteMap = document.querySelector(".site-map")

const navListChilds = navList.children

for (let i = 0; i < navListChilds.length; i++) {
    let item = document.createElement("li")
    item.innerText = navListChilds[i].innerText
    siteMap.appendChild(item)
}