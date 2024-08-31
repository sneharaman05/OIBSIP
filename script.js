let display = document.getElementById('display');
let input = '';

function clearDisplay() {
    input = '';
    updateDisplay();
}

function deleteLast() {
    input = input.slice(0, -1);
    updateDisplay();
}

function appendInput(value) {
    input += value;
    updateDisplay();
}

function calculate() {
    try {
        input = eval(input).toString();
    } catch (error) {
        input = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = input;
}