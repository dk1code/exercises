import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");

modal.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none"
            break;
    }
})

// 1. converted with async && await

const delayPromise = (ms, output) =>
    new Promise(resolve => setTimeout(() => resolve(output), ms));

const asynchFunc = async () => {
    try {
        let foo = await delayPromise(1000, modal);
        foo.style.display = "block";
    } catch (err) {
        console.log(err);
    }
}
asynchFunc();

// 2. 

const continueBtn = document.querySelector("#continue");

/* This task is pointless and stupid
const hoverFunc = async () => {
    let foo = await delayPromise(200, continueBtn);
    return foo.style.backgroundColor = "blue";
}

continueBtn.addEventListener("animationend", hoverFunc());

*/

// 3.
continueBtn.addEventListener("animationend", () => {
    continueBtn.style.backgroundColor = "blue";
    alert("continue to subscription");
    return "";
})