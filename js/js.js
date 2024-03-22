const display = document.querySelector(".display")
const allNumbers = document.querySelectorAll(".number")
const clearBtn = document.querySelector(".clear")
let operandOne = undefined
let operandTwo = undefined
let operatorPresent = false
let bothOperatorsPresent = false




















function clearAll() {
    display.textContent = ""
    operandOne = undefined
    operandTwo = undefined
    operatorPresent = false
    bothOperatorsPresent = false
}

function appendTextContent(e) {
    display.textContent = display.textContent + e.target.textContent
}

allNumbers.forEach(function(button) {
    button.addEventListener("click", (e) => {
        appendTextContent(e)
    })
})

clearBtn.addEventListener("click", () => {
    clearAll()
})