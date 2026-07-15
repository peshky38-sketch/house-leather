/*
MINI EXERCISE

1. Create a HTML form with at least 2 inputs and a submit button.
2. Attach the submit event listener.
3. Prevent the form default behaviour.
4. Print out the values of your form inputs.
*/

document.getElementById("form1").addEventListener("submit", submitForm);

document.getElementById("form1input1").addEventListener("input", (e) => {
    console.log("Typing:", e.target.value);
});

function submitForm(e) {

    e.preventDefault();

    const inputList = document
        .querySelector("#form1")
        .querySelectorAll("input");

    const input1 = inputList[0];
    const input2 = inputList[1];

    console.log("Input 1:", input1.value);
    console.log("Input 2:", input2.value);

    console.log("Form Input 1:", document.getElementById("form1input1").value);
    console.log("Form Input 2:", document.getElementById("form1input2").value);

    // Update the first input after submission
    input1.value = "Cats and dogs";
}