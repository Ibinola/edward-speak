const display = document.querySelector('.display-screen')

const controlButtons = document.querySelector('.control-buttons').children

const symbols = ['+', 'x', '-', '%', 'C', '.', '=', '/']

let firstValue = ''
let secondValue = ''
let symbol = ''
let result = ''

const calculate = () => {

    // Changes the Value to Integer Values
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)


    // Computation    
    if (symbol === '+') result = firstValue + secondValue
    if (symbol === '-') result = firstValue - secondValue
    if (symbol === 'x') result = firstValue * secondValue
    if (symbol === '/') result = firstValue / secondValue
    if (symbol === '%') result = firstValue % secondValue


    display.innerText = result;
    firstValue = result
    secondValue = ''
}

// For each button in the controlButtons element
for (let button of controlButtons) {

    // An Event listener to the button to listen to a click and then perform an instruction
    button.addEventListener('click', () => {
        const { innerText: btnValue } = button;


        // adds all symbols as a button value
        const btnValueIsSymbol = symbols.includes(btnValue)

        // Returns null if after the equals button is clicked and there's no second value
        if (btnValue === '=' && !secondValue) {
            return null
        }


        //Calculate if there's a first value and symbol and if there's also a second value
        if (firstValue && btnValueIsSymbol) {
            if (secondValue) {
                calculate();
            }
            symbol = btnValue
        }
        else if (!symbol) firstValue += btnValue
        else if (symbol) secondValue += btnValue


        // Returns an empty value when the Clear button is Clicked
        if (btnValue === 'C') {
            firstValue = secondValue = symbol = ''

            return display.innerText = ''
        }

        // Does not add the equals sign to the display screen
        if (btnValue !== '=') {
            display.innerText += btnValue
        }

    })
}
