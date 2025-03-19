document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    let currentInput = '';
    let operator = null;
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const operatorValue = this.getAttribute('data-operator');

            if (value !== null) {
                currentInput += value;
                display.textContent = currentInput;
            } else if (operatorValue !== null) {
                if (currentInput === '') return;
                if (previousInput !== '') {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                };
                operator = operatorValue;
                previousInput = currentInput;
                currentInput = '';
            } else if (this.id === 'equals') {
                if (currentInput === '' || previousInput === '') return;
                currentInput = calculate(previousInput, currentInput, operator);
                display.textContent = currentInput;
                operator = null;
                previousInput = '';
            } else if (this.id === 'clear') {
                currentInput = '';
                previousInput = '';
                operator = null;
                display.textContent = '0';
            }
        });
    });

    function calculate(num1, num2, operator) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch(operator) {
            case '+':
                return (num1 + num2).toString();
                break;
            case '-':
                return (num1 - num2).toString();
                break;
            case '*':
                return (num1 * num2).toString();
                break;
            case '/':
                return (num1 / num2).toString();
                break;
            default:
                return '0';
        };
    };
});


