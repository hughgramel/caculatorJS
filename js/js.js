const display = document.querySelector(".display")
const allNumbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clearBtn = document.querySelector(".clear")
const equalsBtn = document.querySelector(".equals")
const percentBtn = document.querySelector(".percentage")
const toggleNegBtn = document.querySelector(".toggle-neg")

let operandOne = 0
let operandTwo = undefined
let operator = undefined

function evaluate() {
    /**
     * If evaluate is being called, means that we have two operands and
     * an operator. All it should do it set the display / current number to 
     * what it evaluated to then reset 
     */
        let result;
        let dividedByZero = false
        if (operandTwo && !operandOne) {
            operandOne = 0;
        }
        if (!operandTwo) {
            operandTwo = getDisplayNumber()
        }
        if (operator == "+") {
            result = operandOne + operandTwo
        } else if (operator == "-") {
            result = operandOne - operandTwo
        } else if (operator == "*") {
            result = operandOne * operandTwo
        } else if (operator == "/") {
            if (operandTwo == 0) {
                display.textContent = "Get real."
                dividedByZero = true
            } else {
                result = operandOne / operandTwo
            }
        }
        if (dividedByZero) {
            display.textContent = "Get real."
            operandOne = 0
            operandTwo = undefined
            operator = undefined
        } else {
            display.textContent = result
            operandOne = getDisplayNumber()
        }
}

/**
 * Functions for event listeners
 */

function clearAll() {
    display.textContent = 0
    operandOne = undefined
    operandTwo = undefined
    operator = undefined
    bothOperatorsPresent = false
}

function appendTextContent(e) {
    display.textContent = display.textContent + e.target.textContent
}

function getDisplayNumber() {
    return Number(display.textContent)
}

/**
 * Adds all event listeners to specified elements
 */

allNumbers.forEach(function(button) {
    button.addEventListener("click", (e) => {
        if (!operator && !operandOne) {
            display.textContent = ""
            appendTextContent(e)
            operandOne = getDisplayNumber()
        } else if (!operator && operandOne && !operandTwo) {
            appendTextContent(e)
            operandOne = getDisplayNumber()
        } else if (!operandTwo && operator) {
            display.textContent = ""
            appendTextContent(e)
            operandTwo = getDisplayNumber()
        } else if (operandTwo && operator) {
            appendTextContent(e)
            operandTwo = getDisplayNumber()
        }
        // we don't have to test for the second operand, because upon the 
        // pressing of second operand it will be evaluated
    })
})

operators.forEach(function(operatorBtn) {
    operatorBtn.addEventListener("click", (e) => {
        // should if operand one and operator present, should set operandTwo as
        // the value on the screen even if it's the same as operandOne
        if (!operator) {
            operandOne = getDisplayNumber()
            operator = e.target.textContent
            console.log("no operator, operant 1 set")
        } else {
            if (!operandTwo) {
                operandTwo = getDisplayNumber()
            }
            evaluate()
            operandOne = getDisplayNumber()
            operandTwo = ""
            operator = e.target.textContent
            console.log("operator, operand 1 set")
        }
            // now if operator is pressed again, same thing happens
        
        // if no operandOne, then nothing will happen
        // what if operandOne = 0?
        /**
         * Will set operand to +
         * Then if pressing 3, will add 3 and set operand 2 to display number (3)
         */
    })
})


clearBtn.addEventListener("click", () => {
    clearAll()
})

percentBtn.addEventListener("click", () => {
    display.textContent = Number(display.textContent) / 100
})

equalsBtn.addEventListener("click", () => {
    if (operator) {
        evaluate()
    }
    operandOne = "" // maybe? Might not work
    operator = ""
    operandTwo = ""
})

toggleNegBtn.addEventListener("click", () => {
    display.textContent = Number(display.textContent) * -1
})