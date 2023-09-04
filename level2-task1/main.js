let result = document.getElementById('result');
let currentInput = '';
let currentOperation = '';
let hasDecimal = false;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!hasDecimal) {
        currentInput += '.';
        hasDecimal = true;
        updateDisplay();
    }
}

function setOperation(operation) {
    currentOperation = operation;
    currentInput = '';
    hasDecimal = false;
    updateDisplay();
}

function calculate() {
    if (currentOperation === '+') {
        currentInput = (parseFloat(currentInput) + parseFloat(result.value)).toString();
    } else if (currentOperation === '-') {
        currentInput = (parseFloat(result.value) - parseFloat(currentInput)).toString();
    } else if (currentOperation === '*') {
        currentInput = (parseFloat(currentInput) * parseFloat(result.value)).toString();
    } else if (currentOperation === '/') {
        currentInput = (parseFloat(result.value) / parseFloat(currentInput)).toString();
    } else if (currentOperation === '%') {
        currentInput = (parseFloat(result.value) % parseFloat(currentInput)).toString();
    }

    currentOperation = '';
    hasDecimal = false;
    updateDisplay();
}

function clearResult() {
    currentInput = '';
    currentOperation = '';
    hasDecimal = false;
    result.value = '';
}

function updateDisplay() {
    result.value = currentInput;
}

// root, squre : functions
function root() {
    result.value = Math.sqrt(parseFloat(result.value)).toString();
}

function squre() {
    result.value = (parseFloat(result.value) * parseFloat(result.value)).toString();
}
