// Check if a value is a valid number
function isValidNumber(value) {
    return value !== "" && Number.isFinite(Number(value));
}

// Convert value to number
function toNumber(value) {
    return Number(value);
}

// Display calculator header
function displayHeader() {
    console.log("");
    console.log("==============================");
    console.log("       SIMPLE CALCULATOR");
    console.log("==============================");
    console.log("");
}

// Display result
function displayResult(result) {
    console.log("");
    console.log("------------------------------");
    console.log(`Result: ${result}`);
    console.log("------------------------------");
    console.log("");
}

// Display error
function displayError(message) {
    console.log("");
    console.log(`Error: ${message}`);
    console.log("");
}

module.exports = {
    isValidNumber,
    toNumber,
    displayHeader,
    displayResult,
    displayError
};
