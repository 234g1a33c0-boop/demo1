// calculator.js

const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform calculation
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
            return 'Error: Invalid operator';
    }
}

// Ask user for input
rl.question('Enter first number: ', (first) => {
    const num1 = parseFloat(first.trim());

    if (isNaN(num1)) {
        console.log('Error: First input is not a number');
        rl.close();
        return;
    }

    rl.question('Enter operator (+, -, *, /): ', (op) => {
        const operator = op.trim();

        rl.question('Enter second number: ', (second) => {
            const num2 = parseFloat(second.trim());

            if (isNaN(num2)) {
                console.log('Error: Second input is not a number');
            } else {
                const result = calculate(num1, num2, operator);
                console.log(`Result: ${result}`);
            }

            rl.close();
        });
    });
});
