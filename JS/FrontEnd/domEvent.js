/*
Create a button.

1. Attach a click event which shows an alert.
2. Attach a mouseover event which console.logs the current date.
3. For each event print the event object.
*/

// Get the button
const eventButton = document.getElementById("btn-event-checker");

// Click Event
eventButton.addEventListener("click", function (event) {

    console.log(event);

    alert("Event Checker button clicked!");

});

// Mouseover Event
eventButton.addEventListener("mouseover", function (event) {

    console.log(event);

    console.log(new Date());

} );

/*
We can attach an event to the window.

Use the mousemove event and display the
X and Y coordinates on the screen.
*/

const xCoordinate = document.getElementById("x-coordinate");
const yCoordinate = document.getElementById("y-coordinate");

window.addEventListener("mousemove", function (event) {

    // Display the coordinates on the page
    xCoordinate.textContent = event.clientX;
    yCoordinate.textContent = event.clientY;

    // Print the event object
    console.log(event);

});