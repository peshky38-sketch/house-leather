const fs = require("fs");

/*
fs.appendFile(path, data, callback)

@param1 -> file name (path)
@param2 -> data to write
@param3 -> callback function
*/

function createFile() {

    let fileData = "";

    // Generate 10,000 lines
    for (let i = 1; i <= 10000; i++) {
        fileData += `Go you ${i}\n`;
    }

    fs.appendFile("currentdate.txt", fileData, (error) => {

        if (error) {
            console.log("Creating file failed.");
            console.log(error);
            return;
        }

        console.log("File created successfully.");
        console.log("10,000 lines have been written to currentdate.txt");

    });

}

// Start the program
createFile();