/*
While loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.

The syntax of a while loop is:

while (condition) {
  // code block to be executed
}

The condition is evaluated before executing the code block. If the condition evaluates to be truthy , the code block is executed. After the code block has been executed, the condition is evaluated again. This process continues until the condition evaluates to falsey.

Example:  

*/

let n = 0;
let condition = true;

// When condition becomes false, we automatically exit the loop.
while (condition) {
    console.log("n is", n);

    n = n + 1;

    if (n > 100) {
        condition = false;
    }
}

/*
Create a function (any name).

The function should:
- Take one parameter.
- The parameter should be a number greater than 0.
- Use a while loop.
- Count down from the number to 1.
- Print each number.
*/

function countDown(number) {

    // Check if the number is greater than 0
    if (number <= 0) {
        console.log("Please enter a number greater than 0.");
        return;
    }

    // While loop to count down
    while (number > 0) {
        console.log(number);
        number--;
    }

}

// Test the function
countDown( 10 );
console.log( "countDown( 10 ) has been called." );


/*
Function 1
- Does not take any parameters.
- Prompts the user for the first number.
- Ensures it is a valid number greater than 1.
- Prompts the user for the second number.
- Ensures it is a valid number greater than 1.
- Calls Function 2.
*/

function getNumbers() {

    let number1;
    let number2;

    // Get first number
    while (true) {
        number1 = Number(prompt("Enter the first number (greater than 1):"));

        if (!isNaN(number1) && number1 > 1) {
            break;
        }

        console.log("Invalid first number. Try again.");
    }

    // Get second number
    while (true) {
        number2 = Number(prompt("Enter the second number (greater than 1):"));

        if (!isNaN(number2) && number2 > 1) {
            break;
        }

        console.log("Invalid second number. Try again.");
    }

    multiplicationTable(number1, number2);
}


/*
Function 2
- Takes two parameters.
- Checks they are greater than 1.
- Uses nested while loops to print the multiplication table.
*/

function multiplicationTable(number1, number2) {

    if (number1 <= 1 || number2 <= 1) {
        console.log("Both numbers must be greater than 1.");
        return;
    }

    let row = number1;

    // Outer loop
    while (row >= 1) {

        let column = number2;

        // Inner loop
        while (column >= 1) {

            console.log(`${row} * ${column} = ${row * column}`);

            column--;
        }

        console.log("---------------------");

        row--;
    }
}

// Start the program
getNumbers();
console.log("getNumbers() has been called.");