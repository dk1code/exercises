"use strict"

let target = document.querySelector("cite")
const elemTree = []

while (target) {
    elemTree.unshift(target.nodeName.toLowerCase())
    target = target.parentElement
}

console.log(elemTree.join(" > "))