const readline = require("readline");

const {
    add,
    subtract,
    multiply,
    divide,
    modulus,
    power,
    squareRoot,
    percentage
} = require("./operations");

const {
    isValidNumber,
    toNumber,
    displayHeader,
    displayResult,
    displayError
} = require("./utils");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

displayHeader();

rl.question("Enter first number: ", (firstInput) => {

    rl.question(
        "Enter operator (+, -, *, /, %, **, sqrt, %%): ",
        (operator) => {

            rl.question("Enter second number: ", (secondInput) => {

                // Validate first number
                if (!isValidNumber(firstInput)) {
                    displayError("First input must be a valid number.");
                    rl.close();
                    return;
                }

                // Square root doesn't need second number
                if (operator !== "sqrt" && !isValidNumber(secondInput)) {
                    displayError("Second input must be a valid number.");
                    rl.close();
                    return;
                }

                const a = toNumber(firstInput);
                const b = toNumber(secondInput);

                try {

                    let result;

                    switch (operator) {

                        case "+":
                            result = add(a, b);
                            break;

                        case "-":
                            result = subtract(a, b);
                            break;

                        case "*":
                            result = multiply(a, b);
                            break;

                        case "/":
                            result = divide(a, b);
                            break;

                        case "%":
                            result = modulus(a, b);
                            break;

                        case "**":
                            result = power(a, b);
                            break;

                        case "sqrt":
                            result = squareRoot(a);
                            break;

                        case "%%":
                            result = percentage(a, b);
                            break;

                        default:
                            throw new Error(
                                "Invalid operator. Use +, -, *, /, %, **, sqrt, or %%."
                            );
                    }

                    displayResult(result);

                } catch (error) {

                    displayError(error.message);

                } finally {

                    rl.close();

                }
            });
        }
    );
});
