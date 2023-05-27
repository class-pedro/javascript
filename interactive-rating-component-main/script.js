var mainContainer = document.querySelector("main.container")
var thanksContainer = document.querySelector("div.thank-you")
var submitButton = document.querySelector("button#submit")
var rateAgain = document.querySelector("button#rate-again")
var rating = document.querySelector("span#rating")
var rates = document.querySelectorAll("button.btn")

submitButton.addEventListener("click", clicar)
rateAgain.addEventListener("click", clicar2)

function clicar() {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
}

function clicar2() {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
}

rates.forEach((rate) => {
    rate.addEventListener("click", clicar3)
    function clicar3() {
        rating.innerHTML = rate.innerHTML
    }
})