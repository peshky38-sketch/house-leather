/*
Function allow you to write reusable bits of code.
To use Dry (Do not report your self)by usin code block

/{/code block/}/
syntax:
function <name:variable name convectiion> (<parameters>){
}

//Big rule import rule
->a function executes only when cllled.
->calling a function is telling the
function to do its work.

*/

/*
Create a simple function that
when you call it it alerts
you on the current time
*/

function timeAlert() {

    // Create a Date object
    const date = new Date();

    // Get the user's time zone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Display the date, timestamp and time zone
    alert(`Current Date & Time: ${date.toLocaleString()}

Time Stamp: ${date.toISOString()}

Time Zone: ${timeZone}`);

}

/*
Call a function using the function name
followed by brackets ()
*/

timeAlert(); // Calling the function

/*
Area of a triangele
0.5*l*w

*/

//base = undefined, height = undefined

function areaOfTriangle(base, height) {

    console.log(`Base is ${base} its type ${typeof base}`);
    console.log(`Height is ${height} its type ${typeof height}`);

    const area = 0.5 * base * height;

    console.log(
        `For triangle with base ${base} and height ${height} area is ${area}`
    );

}

/*
Scenario 1:
Call the areaOfTriangle function without passing any arguments.
*/

areaOfTriangle();


/*
Scenario 2:
Call the function and pass a base of 20 but no height.
*/

areaOfTriangle(20);


/*
Scenario 3:
Call the function and pass a base of 20 and a height of 30.
*/

areaOfTriangle(20, 30);


/*
Scenario 4:
Create variables base1 = 50 and height1 = 60,
then pass them to the function.
*/

let base1 = 50;
let height1 = 60;

areaOfTriangle(base1, height1);


/*
Scenario 5:
Create variables base2 = "hello" and height2 = true,
then pass them to the function.
*/

let base2 = "hello";
let height2 = true;

areaOfTriangle(base2, height2);

