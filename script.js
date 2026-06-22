const display = document.getElementById("display"); // NEW: adding the variable to pull the display without having to repeat the document every time

function appendValue(value) {
    // NEW: refining the code. Now, if the message "Error" is on display, it will be cleared first
    if (display.value === "Error") {
clearAll();
    }
    display.value += value;
}

function calculate() {
    try {
if (display.value !== "") { // NEW: parameter "must have something written"

    // All this part is so the system doesn't error out when the user types something like "8(5)"
    let expression = display.value; // Avoids repeating "display.value" every time, which can be confusing

    // 1. Looks for a digit (\d) followed by a '(' and puts a '*' in the middle
    expression = expression.replace(/(\d)(\()/g, '$1*(');

    // 2. Looks for a ')' followed by a digit (\d) and puts a '*' in the middle
    expression = expression.replace(/(\))(\d)/g, ')*$2');

    // 3. Looks for a ')' followed by a '(' and puts a '*' in the middle
    expression = expression.replace(/(\))(\()/g, ')*(');

    display.value = eval(expression);
}
    } catch(error) {
display.value = "Error";
    }
}

// Button: "⌫" function
function removeLastDigit() {
    if (display.value !== "") { // Must have something written
display.value = display.value.slice(0, -1);
    }
}

// Button: "C" function
function clearAll() {
    display.value = "";
}

// NEW: Parentheses function
function addParentheses() {
    let expression = display.value; // Avoids repeating "display.value" every time, which can be confusing
    if (expression === "Error") {
clearAll(); // Clears the value that is on the DISPLAY
expression = ""; // Empties the MEMORY to avoid potential errors
    }

    // Counts how many '(' and ')' exist in the display
    let openCount = expression.split("(").length - 1;
    let closeCount = expression.split(")").length - 1;
    let lastChar = expression.slice(-1);

    // Logic: if there are more open '(' than closed, and the last character is a number or ')', we close the parenthesis
    if (openCount > closeCount && ((lastChar >= '0' && lastChar <= '9') || lastChar === ')')) {
appendValue(')');
    } else {
// Otherwise, we open a new parenthesis
appendValue('(');
    }
}

function calculatePercentage() {
    if (display.value !== "" && display.value !== "Error") {
display.value = parseFloat(display.value) / 100; // Takes the current number and divides by 100
    }
}