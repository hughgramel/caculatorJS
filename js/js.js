const display = document.querySelector(".display")
const allNumbers = document.querySelectorAll(".number")
const clearBtn = document.querySelector(".clear")
const percentBtn = document.querySelector(".percentage")
const toggleNegBtn = document.querySelector(".toggle-neg")

let operandOne = undefined
let operandTwo = undefined
let operatorPresent = false
let bothOperatorsPresent = false


















/**
 * Functions for event listeners
 */

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

/**
 * Adds all event listeners to specified elements
 */

allNumbers.forEach(function(button) {
    button.addEventListener("click", (e) => {
        appendTextContent(e)
    })
})

clearBtn.addEventListener("click", () => {
    clearAll()
})

percentBtn.addEventListener("click", () => {
    display.textContent = Number(display.textContent) / 100
})

toggleNegBtn.addEventListener("click", () => {
    display.textContent = Number(display.textContent) * -1
})