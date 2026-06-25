/*
prompt("")

checking if is a number
1.isNaN
2.Number->
3.+<>
*/

//stay here until he has entered the correct gross
let grossMonthlySalary = null;

while (true) {
    let gross = prompt("Enter your gross salary");

    if (!isNaN(gross)) {
        gross = Number(gross);

        if (gross > 0) {
            grossMonthlySalary = gross;
            break;
        }
    }

    alert(`Invalid input entered
Ensure you enter a number greater than zero`);
}

console.log(
    `Gross salary is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`
);

//here

    /*
    PAYE CALCULATIONS
    */
/*
PAYE CALCULATIONS
*/

let paye = null;
let tier = null;

if (grossMonthlySalary <= 24000) {
    paye = grossMonthlySalary * 0.10;
    tier = "0 - 24000 KES";
}

else if (grossMonthlySalary <= 32333) {
    paye = 2400 + (grossMonthlySalary - 24000) * 0.25;
    tier = "24000 - 32333 KES";
}

else if (grossMonthlySalary <= 500000) {
    paye = 4483.25 + (grossMonthlySalary - 32333) * 0.30;
    tier = "32333 - 500000 KES";
}

else if (grossMonthlySalary <= 800000) {
    paye = 144783.35 + (grossMonthlySalary - 500000) * 0.325;
    tier = "500000 - 800000 KES";
}

else {
    paye = 242283.35 + (grossMonthlySalary - 800000) * 0.35;
    tier = "Above 800000 KES";
}

console.log(`PAYE is ${paye}`);
console.log(`Tax tier is ${tier}`);