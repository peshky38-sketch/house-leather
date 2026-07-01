/*
1. exit code
2. return any required data.
*/

/*
Scenario 1:
Leave it as it is and look at the results.
- What happens?
*/

function sayMyName1() {

    let first_name = "Samson"; // statement 1
    console.log(`First Name ${first_name}`); // statement 2

    let second_name = "Johnna"; // statement 3
    console.log(`Second Name ${second_name}`); // statement 4

    let full_name = `${first_name} ${second_name}`; // statement 5
    console.log(`Names are ${full_name}`); // statement 6

}

let scenario1 = sayMyName1();

console.log(`Function returned ${scenario1}`);


/*
Scenario 2:
After the second statement inside the function,
put a return.
*/

function sayMyName2() {

    let first_name = "Samson"; // statement 1
    console.log(`First Name ${first_name}`); // statement 2

    return;

    let second_name = "Johnna"; // statement 3
    console.log(`Second Name ${second_name}`); // statement 4

    let full_name = `${first_name} ${second_name}`; // statement 5
    console.log(`Names are ${full_name}`); // statement 6

}

let scenario2 = sayMyName2();

console.log(`Function returned ${scenario2}`);


/*
Scenario 3:
After the fourth statement inside the function,
put a return.
*/

function sayMyName3() {

    let first_name = "Samson"; // statement 1
    console.log(`First Name ${first_name}`); // statement 2

    let second_name = "Johnna"; // statement 3
    console.log(`Second Name ${second_name}`); // statement 4

    return;

    let full_name = `${first_name} ${second_name}`; // statement 5
    console.log(`Names are ${full_name}`); // statement 6

}

let scenario3 = sayMyName3();

console.log(`Function returned ${scenario3}`);


/*
Scenario 4:
Return a string of your choice.
*/

function sayMyName4() {

    let first_name = "Samson";
    console.log(`First Name ${first_name}`);

    let second_name = "Johnna";
    console.log(`Second Name ${second_name}`);

    return "Hello Rachel!";

}

let scenario4 = sayMyName4();

console.log(`Function returned ${scenario4}`);


/*
Scenario 5:
Return a number of your choice.
*/

function sayMyName5() {

    let first_name = "Samson";
    console.log(`First Name ${first_name}`);

    let second_name = "Johnna";
    console.log(`Second Name ${second_name}`);

    return 100;

}

let scenario5 = sayMyName5();

console.log(`Function returned ${scenario5}`);


/*
Scenario 6:
Return a boolean of your choice.
*/

function sayMyName6() {

    let first_name = "Samson";
    console.log(`First Name ${first_name}`);

    let second_name = "Johnna";
    console.log(`Second Name ${second_name}`);

    return true;

}

let scenario6 = sayMyName6();

console.log(`Function returned ${scenario6}`);

