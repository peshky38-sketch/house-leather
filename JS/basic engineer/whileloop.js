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