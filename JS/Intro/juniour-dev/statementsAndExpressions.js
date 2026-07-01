/*
Expression:
A piece of code that produces a value.

Examples:
x > 5           => true or false
10 + 11         => 21
circleArea(5)   => function call (expression)
n1              => reference value
*/

// Function declaration
function sayMyName() {
    console.log("Sam Mwangi");
    return "Sam Mwangi";
}

// Variable declaration
let n1 = 23;

// Reference expression
console.log(n1);               // 23

// Arithmetic expression
console.log(10 + 12);          // 22

// Comparison expression
console.log(n1 > 10);          // true

// Function call expression
console.log(sayMyName());      // Prints "Sam Mwangi" then returns "Sam Mwangi"

// More expression examples
console.log(5 * 6);            // 30
console.log(100 / 4);          // 25
console.log(20 - 8);           // 12
console.log(8 % 3);            // 2

// String expression
console.log("Hello " + "Rachel"); // Hello Rachel

// Boolean expressions
console.log(15 < 20);          // true
console.log(15 === 20);        // false

// Reference expression
console.log(n1 + 7);           // 30

// Function call used inside another expression
console.log(sayMyName() + " is learning JavaScript");
// Output:
// Sam Mwangi
// Sam Mwangi is learning JavaScript
