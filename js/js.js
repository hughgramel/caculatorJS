const display = document.querySelector(".display")
const allNumbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clearBtn = document.querySelector(".clear")
const equalsBtn = document.querySelector(".equals")
const percentBtn = document.querySelector(".percentage")
const toggleNegBtn = document.querySelector(".toggle-neg")

let operandOne = undefined
let operandTwo = undefined
let operator = undefined

function evaluate() {
    /**
     * If evaluate is being called, means that we have two operands and
     * an operator. All it should do it set the display / current number to 
     * what it evaluated to then reset 
     */
    if (operator) {
        let result;
        let dividedByZero = false
        operandTwo = getDisplayNumber()
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
            operandTwo = undefined
            operator = undefined
        }
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
        if (!operator && !operandOne || (operator && operandOne) || operator) {
            display.textContent = ""
            appendTextContent(e)
            // if no operator OR operandOne set and operator present, then
            // just add it on 
        // } else if (operator && operandOne) {
        //     // if operator present but no operandOne, set operand one to content
        //     // and then add the new values
        //     display.textContent = ""
        //     appendTextContent(e)
        } else if (operator && operandOne) {
            // means that operator present. should set operand two to content
            display.textContent = ""
            appendTextContent(e)
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
            // if has operator and no operator, just set operator
            operator = e.target.textContent
            operandOne = getDisplayNumber()
            console.log(`operator is now ${operator}`)
        } else if (operator) {
            evaluate()
            operator = e.target.textContent
            // now if operator is pressed again, same thing happens
        } // if no operandOne, then nothing will happen
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
    evaluate()
})

toggleNegBtn.addEventListener("click", () => {
    display.textContent = Number(display.textContent) * -1
})