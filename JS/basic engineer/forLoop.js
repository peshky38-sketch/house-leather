/*
FOR LOOP

A for loop combines the three parts of a while loop
into one statement.

1. Starting point (Initialization)
2. Condition
3. After each iteration (Increment/Decrement)

Syntax:

for (startingPoint; condition; afterEachIteration) {

}
*/

// =========================================
// Example: While Loop
// =========================================

let k = 0;

while (k < 20) {
    console.log("While Loop -> k =", k);
    k = k + 1;
}

// =========================================
// Example: For Loop
// =========================================

for (let k = 0; k < 20; k = k + 1) {
    console.log("For Loop -> k =", k);
}

/*
=================================================
TASK

Kindergarten teacher wants to generate
a dynamic multiplication table.

Function 1
- Takes no parameters.
- Prompts the user for two numbers.
- Ensures each number is greater than 1.
- Calls Function 2.

Function 2
- Takes two parameters.
- Uses nested FOR loops.
- Prints the multiplication table.
=================================================
*/

// =========================================
// Function 1
// =========================================

function createTable() {

    let number1;
    let number2;

    // Get first number
    while (true) {

        number1 = Number(prompt("Enter the first number (greater than 1):"));

        if (!isNaN(number1) && number1 > 1) {
            break;
        }

        alert("Invalid number. Enter a number greater than 1.");
    }

    // Get second number
    while (true) {

        number2 = Number(prompt("Enter the second number (greater than 1):"));

        if (!isNaN(number2) && number2 > 1) {
            break;
        }

        alert("Invalid number. Enter a number greater than 1.");
    }

    createMathTable(number1, number2);
}

// =========================================
// Function 2
// =========================================

function createMathTable(number1, number2) {

    for (let i = number1; i >= 1; i--) {

        for (let j = number2; j >= 1; j--) {

            console.log(`${i} * ${j} = ${i * j}`);

        }

        console.log("----------------------");
    }

}

// =========================================
// Start Program
// =========================================

createTable();