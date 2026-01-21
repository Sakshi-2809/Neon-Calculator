// Initialize the input string
let c = "";

// Function to add numbers to the input
function iv(number) {
    c += number;
    document.getElementById("mi").value = c;
}

// Function to add operators (+, -, *, /) to the input
function is(operator) {
    c += operator;
    document.getElementById("mi").value = c;
}

// Function to calculate the result
function cal() {
    try {
        let res = eval(c);  // Using eval() for simple calculator
        document.getElementById("mi").value = res;
        c = res.toString(); // Update input string with result
    } catch (error) {
        document.getElementById("mi").value = "Error";
        c = "";
    }
}

// Function to delete the last character (Backspace)
function back() {
    c = c.slice(0, -1);
    document.getElementById("mi").value = c;
}

// Function to clear the entire input
function clr() {
    c = ""; // Clear the input string
    document.getElementById("mi").value = ""; // Clear the display
}
