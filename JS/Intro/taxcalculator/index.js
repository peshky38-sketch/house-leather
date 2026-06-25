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
NSSF CALCULATIONS
*/

let nssf = null;

//TIER 1
if (grossMonthlySalary <= 9000) {
    nssf = grossMonthlySalary * 0.06;
}

//TIER 2
else if (grossMonthlySalary <= 108000) {
    nssf = 540 + (grossMonthlySalary - 9000) * 0.06;
}

//MAX
else {
    nssf = 6480;
}

console.log(`NSSF is ${nssf}`);

/*
TAXABLE INCOME
*/

let taxableIncome = grossMonthlySalary - nssf;

console.log(`Taxable income is ${taxableIncome}`);

/*
PAYE CALCULATIONS
*/

let paye = null;
let tier = null;

if (taxableIncome <= 24000) {
    paye = taxableIncome * 0.10;
    tier = "0 - 24000 KES";
}

else if (taxableIncome <= 32333) {
    paye = 2400 + (taxableIncome - 24000) * 0.25;
    tier = "24000 - 32333 KES";
}

else if (taxableIncome <= 500000) {
    paye = 4483.25 + (taxableIncome - 32333) * 0.30;
    tier = "32333 - 500000 KES";
}

else if (taxableIncome <= 800000) {
    paye = 144783.35 + (taxableIncome - 500000) * 0.325;
    tier = "500000 - 800000 KES";
}

else {
    paye = 242283.35 + (taxableIncome - 800000) * 0.35;
    tier = "Above 800000 KES";
}

console.log(`PAYE is ${paye.toFixed(2)}`);
console.log(`Tax tier is ${tier}`);
