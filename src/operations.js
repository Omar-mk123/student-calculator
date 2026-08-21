// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

// Modulus
function modulus(a, b) {
    if (b === 0) {
        throw new Error("Cannot calculate modulus with zero");
    }

    return a % b;
}

// Power
function power(a, b) {
    return a ** b;
}

// Square Root
function squareRoot(a) {
    if (a < 0) {
        throw new Error(
            "Cannot calculate square root of a negative number"
        );
    }

    return Math.sqrt(a);
}

// Percentage
function percentage(a, b) {
    return (a / 100) * b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulus,
    power,
    squareRoot,
    percentage
};
