/*
Read data from data.json
and display each person's name
and message.
*/

/*
Step 1.
Ensure your JS file can access the data.
*/

const fs = require("fs");
const data = require("./data.json");

console.log(data);

/*
Step 2.
Use a for...of loop to go through each data point.
Print the data.
*/

// Create an empty array
const output = [];

for (const person of data) {

    /*
    Step 3.
    For each data point create a message.
    */

    const title = person.gender.toLowerCase() === "male" ? "Sir" : "Madam";

    const message = `
Dear ${title} ${person.firstname} ${person.lastname},

We regret to inform you that you will not be going
to the next stage of the interview.

The reason is that you are not a good fit.

Kind regards,
HR Department
`;

    console.log(message);

    /*
    Step 4.
    Store the user's data together with the message.
    */

    const user = {
        id: person.id,
        firstname: person.firstname,
        lastname: person.lastname,
        email: person.email,
        gender: person.gender,
        phone: person.phone,
        message: message
    };

    output.push(user);
}

/*
Step 5.
Convert the array to JSON and save it to output.json.
*/

const jsonData = JSON.stringify(output, null, 4);

fs.writeFileSync("./output.json", jsonData);

console.log("Successfully created output.json");