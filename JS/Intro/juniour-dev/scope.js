/*
SCOPE FUNCTIONS PRACTICE
*/

let count = 0;

const clickValue = document.getElementById("click-value");

clickValue.textContent = count;

function increment() {
    count++;
    clickValue.textContent = count;
}

function decrement() {
    count--;
    clickValue.textContent = count;
}

/*
procedure.

1. declare variable name in the global scope.

2. create function call sayMyName
   console.log the name and line number
   remember to call the function

3. declare variable name inside the function
   at the start
   assign it a different name
   print out the name and line number

4. create an if statement
   inside the function pass a truthy condition
   inside the block console.log name
   and its line number

5. inside the first if statement
   declare variable name
   give it a new name
   console.log name and line number

6. inside the function after the if block
   console.log name and line number

7. try declaring the same variable name
   in the same scope
*/

// Step 1
let name = "Samson";

console.log(`Global Scope -> Name: ${name} Line: 31`);

// Step 2
function sayMyName() {

    // Step 3
    let name = "Rachel";

    console.log(`Function Scope -> Name: ${name} Line: 39`);

    // Step 4
    if (true) {

        console.log(`Inside if block -> Name: ${name} Line: 44`);

        // Step 5
        {
            let name = "Angela";

            console.log(`Inner Block Scope -> Name: ${name} Line: 50`);
        }
    }

    // Step 6
    console.log(`After if block -> Name: ${name} Line: 56`);
}

// Remember to call the function
sayMyName();

// Step 7

/*
Trying to declare the same variable name
twice in the same scope causes an error.

Example:

let age = 20;
let age = 30;

This gives:

SyntaxError: Identifier 'age' has already been declared

The example is left as a comment so that
the program runs without errors.
*/

console.log("Scope practice exercise completed successfully.");