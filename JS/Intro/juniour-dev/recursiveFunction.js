/*
A recursive function is a function that calls itself.

Since recursion can create an endless loop,
we need a base case to stop it.

Instructions:
1. Initial prompt:
   "Enter your gross salary"
2. Any prompt after that:
   "Invalid gross salary entered. Enter a number for gross salary. Try again"
*/

function salaryGrossPromptProcess(
    message = "Enter your gross salary"
) {

    let gross = prompt(message);

    // Convert input to a number
    gross = Number(gross);

    // Base case
    if (!isNaN(gross) && gross > 0) {
        console.log(`You entered this amount: ${gross}. Exiting...`);
        return;
    }

    // Recursive call
    return salaryGrossPromptProcess(
        "Invalid gross salary entered. Enter a number for gross salary. Try again"
    );
}

// Start the recursive function
salaryGrossPromptProcess();


/*
Create a function to calculate the factorial of a number.

The function:
- Takes one parameter (a number).
- Returns the factorial of that number.

Example:
factorial(5) = 120
// 5 * 4 * 3 * 2 * 1

Check that the number entered is greater than or equal to 1.

Hint:
Use a recursive function.
*/

function factorial(number) {

    // Validate input
    if (number < 1 || isNaN(number)) {
        return "Please enter a number greater than or equal to 1.";
    }

    // Base case
    if (number === 1) {
        return 1;
    }

    // Recursive case
    return number * factorial(number - 1);
}

// Test the factorial function
let value = 5;

console.log("------------------------");
console.log(`Number: ${value}`);
console.log(`Factorial: ${factorial(value)}`);

console.log("------------------------");
console.log(`Factorial of 1 = ${factorial(1)}`);
console.log(`Factorial of 4 = ${factorial(4)}`);
console.log(`Factorial of 6 = ${factorial(6)}`);
console.log(`Factorial of 0 = ${factorial(0)}`);