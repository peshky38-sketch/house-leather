/*
Conditions ->
control the flow of the code by making a decision

condition operators->
if,else if and else

    Syntax
    if you want to use if
    if(<condition goes>)
    Golden Rule ->if the condition is truthy
    then it will execute code in /{}/

    if the condition is falsely then it wil nnot execute the code in /{}/

    =>Examples
*/
/*
scenario 1:
1.declare a variable<of your choice>assign a truthy value,
create an if statement and put the variable
inside the if statement condition (variable),inside the if 
console.log("Scenario 1 it run")

scenario 2:
1.declare a variable<of your choice>assign a truthy value,
create an if statement and put the variable
inside the if statement,inside the if 
console.log("Scenario 2 it run")
 
scenario 3:
1. Create an if statement inside the if statement 
part.have true
inside the block ({}) console.log (Scenario 3 it run")

  scenario 4:
1. Create an if statement inside the if statement 
part.have false
inside the block ({}) console.log (Scenario 4 it run")

scenario 5:
1. Create an if statement inside the if statement 
part.have 10>20
inside the block ({}) console.log (Scenario 5 it run")

scenario 6:
1. Create an if statement inside the if statement 
part.have 20>10
inside the block ({}) console.log (Scenario 6 it run")
*/
/*
Scenario 1:
Declare a variable and assign a truthy value
*/

let value1 = "I am a here";

if (value1) {
    console.log("Scenario 1 it run");
}


/*
Scenario 2:
Declare a variable and assign a falsy value
*/

let value2 = 0;

if (value2) {
    console.log("Scenario 2 it run");
}


/*
Scenario 3:
Use true in the if condition
*/

if (true) {
    console.log("Scenario 3 it run");
}


/*
Scenario 4:
Use false in the if condition
*/

if (false) {
    console.log("Scenario 4 it run");
}


/*
Scenario 5:
Use 10 > 20 in the if condition
*/

if (10 > 20) {
    console.log("Scenario 5 it run");
}


/*
Scenario 6:
Use 20 > 10 in the if condition
*/

if (20 > 10) {
    console.log("Scenario 6 it run");
}