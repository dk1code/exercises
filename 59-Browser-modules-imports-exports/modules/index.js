import * as calc from "./percentage.js"
import {
    calculateAspectRatio,
    fixRoundingErrors
}
from "./aspect-ratio.js"

// Modulo

const moduloForm = document.querySelector("#modulo-form")
moduloForm.addEventListener("change", () => {
    let modulo1 = document.querySelector("#modulo_1")
    let modulo2 = document.querySelector("#modulo_2")
    let moduloResult = document.querySelector("#modulo_result")
    return moduloResult.value = calc.modulo(modulo1.value, modulo2.value)
})

// Percentage

// First

const percForm = document.querySelector("#percentage-form")
percForm.addEventListener("change", (e) => {
    let perc1 = document.querySelector("#percentage_1")
    let perc2 = document.querySelector("#percentage_2")
    let percResult = document.querySelector("#percentage_result")
    return percResult.value = calc.percentage(perc1.value, perc2.value)
})

// Second

const percOfForm = document.querySelector("#percentageOf-form")
percOfForm.addEventListener("change", () => {
    let percOf1 = document.querySelector("#percentageOf_1")
    let percOf2 = document.querySelector("#percentageOf_2")
    let percOfResult = document.querySelector("#percentageOf_result")
    return percOfResult.value = calc.percentageOf(percOf1.value, percOf2.value)
})

// Third

const diffForm = document.querySelector("#difference-form")
diffForm.addEventListener("change", () => {
    let diff1 = document.querySelector("#difference_1")
    let diff2 = document.querySelector("#difference_2")
    let diffResult = document.querySelector("#difference_result")
    return diffResult.value = calc.difference(diff1.value, diff2.value)
})

// Aspect Ratio

const aRForm = document.querySelector("#aspect-form")
aRForm.addEventListener("change", () => {
    let orWidth = document.querySelector("#ratio_1")
    let orHeight = document.querySelector("#ratio_2")
    let resWidth = document.querySelector("#ratio_result-width")
    let resHeight = document.querySelector("#ratio_result-height")

    if (resWidth.value !== 0) {
        return resHeight.value = calculateAspectRatio(orWidth.value, orHeight.value, resWidth.value, "w")
    }
    // else if (resWidth.value === 0 && resHeight.value !== 0) {
    //     return resWidth.value = calculateAspectRatio(orWidth.value, orHeight.value, resHeight.value, "h")
    // }
})