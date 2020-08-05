// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

let modalEl = document.querySelector("#myModal");
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () =>
    modalEl.style.display = "none"
)

const modal = () => {
    modalEl.style.display = "block";
}

const runPromise = () => {
    let promise = new Promise((resolve, reject) => {
        let condition = true;

        if (condition) {
            setTimeout(() =>
                resolve("resolved"), 500)
        } else {
            reject("rejected")
        }
    })
    return promise
}


runPromise()
    .then(() => modal());