function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(expression);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
