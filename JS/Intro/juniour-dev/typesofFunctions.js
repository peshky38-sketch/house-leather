/*
1. Named Function

2. Anonymous Function (without a name)
   -> A function can be assigned to a variable.
   -> A variable can reference a function.
*/

// Named function
function areCircle(r) {
    return 3.142 * r * r; // area of a circle
}

let age = 23;

let samsAge = age; // age = 23

// ac now references the function
let ac = areCircle;

/*
What is the value of ac and what is it?
Hint: use typeof
*/

console.log(ac);
console.log(typeof ac);

// Call the function using the variable
console.log(ac(5));

// Compare with the original function
console.log(areCircle(5));


/*
1. Create a function of your choice. Use a named function.

2. Assign that function to a variable called test.

3. Directly equate your variable to the function definition.

4. Remove the original function.

5. Try calling the variable and try calling the original function.
   Make an observation.

6. Remove the name of the function since it is useless.

7. Anonymous Function (function without a name).
*/


// Step 1, 2, 3, 6 and 7

let test = function (name) {
    console.log(`Hello ${name}! Welcome to JavaScript.`);
};

// Step 5

console.log("Calling the variable:");
test("Rachel");

// Observation:
// This works because the variable "test"
// now references the function.

console.log(typeof test); // function

/*
The original function was removed.

If you try something like:

greet("Rachel");

you will get:

ReferenceError: greet is not defined

because the function no longer has a name.
Only the variable "test" points to it.
*/

// Another function call
test("Angela");
test("Samson");

/*
Task

Create a function that prints an alert for the current time.

Requirements:
- Does not take any parameters.
- Prints an alert showing the current date and time.
- Prints the current timestamp in the console.
- Test your function by calling it.
*/

function currentTimeAlert() {

    // Create a Date object
    const currentDate = new Date();

    // Current date and time
    const currentTime = currentDate.toLocaleString("en-KE", {
        timeZone: "Africa/Nairobi"
    });

    // Current timestamp
    const timeStamp = currentDate.toISOString();

    // Show the current time in an alert
    alert(`Current Date & Time: ${currentTime}`);

    // Print the timestamp in the console
    console.log(`Current Date & Time: ${currentTime}`);
    console.log(`Time Stamp: ${timeStamp}`);
    console.log(`Time Zone: Africa/Nairobi`);
}

// Test the function
currentTimeAlert();

/*
Task:
Create an arrow function that:

1. Prints an alert for the current time.
2. Takes no parameters.
3. Prints the current timestamp and time zone in the console.
4. Test the function by calling it.
*/

const currentTime = () => {

    const now = new Date();

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    alert(`Current Date & Time: ${now.toLocaleString()}`);

    console.log(`Current Date & Time: ${now.toLocaleString()}`);
    console.log(`Time Stamp: ${now.toISOString()}`);
    console.log(`Time Zone: ${timeZone}`);
};

// Test the function
currentTime();
const functionName = () => {
    // code
};