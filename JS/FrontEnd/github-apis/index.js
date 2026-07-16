const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  /*
Code without a Promise.

1. Create a variable (global variable).
2. Console.log the value of the variable.
3. Create and call a function that modifies this variable.
4. Console.log the value of the variable.
*/

let flow = "This Flow";

console.log("36:", flow);

function testfunc() {

    flow = "Updated Flow";

}

testfunc();

console.log( "41:", flow );

/*
Code with a promise.

1. Create a global variable.
2. Console.log the value of the variable.
3. Create a function that returns a Promise.
4. Modify the variable inside the Promise.
5. Resolve the Promise.
6. Console.log the updated value.
*/

let result = "Initial Result";

console.log("36:", result);

// Function that returns a Promise
function testfuncPromise() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            result = "Updated Result";

            resolve(result);

        }, 1000);

    });

}

testfuncPromise()
    .then((value) => {

        console.log("Promise Resolved:", value);
        console.log("41:", result);

    })
    .catch((error) => {

        console.error(error);

    });

