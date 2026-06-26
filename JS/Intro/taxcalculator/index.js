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
let paye_tier = null;

const bracket1 = 24000;
const bracket2 = 32333;
const bracket3 = 500000;
const bracket4 = 800000;

const band1 = bracket1 * 0.10;
const band2 = (bracket2 - bracket1) * 0.25;
const band3 = (bracket3 - bracket2) * 0.30;
const band4 = (bracket4 - bracket3) * 0.325;

const personalRelief = 2880;


if (taxableIncome <= bracket1) {

    paye = taxableIncome * 0.10;
    paye_tier = "PAYE 0 - 24000 KES";

}

else if (taxableIncome <= bracket2) {

    let diff = taxableIncome - bracket1;
    let tax = diff * 0.25;

    paye = band1 + tax;
    paye_tier = "PAYE 24000 - 32333 KES";

}

else if (taxableIncome <= bracket3) {

    let diff = taxableIncome - bracket2;
    let tax = diff * 0.30;

    paye = band1 + band2 + tax;
    paye_tier = "PAYE 32333 - 500000 KES";

}

else if (taxableIncome <= bracket4) {

    let diff = taxableIncome - bracket3;
    let tax = diff * 0.325;

    paye = band1 + band2 + band3 + tax;
    paye_tier = "PAYE 500000 - 800000 KES";

}

else {

    let diff = taxableIncome - bracket4;
    let tax = diff * 0.35;

    paye = band1 + band2 + band3 + band4 + tax;
    paye_tier = "PAYE Above 800000 KES";

}


const final_paye = Math.max(0, paye - personalRelief);



/*
SHIF CALCULATIONS
*/

const shif = grossMonthlySalary * 0.0275;

console.log(`SHIF is ${shif}`);



/*
HOUSING LEVY CALCULATIONS
*/

const housingLevy = grossMonthlySalary * 0.015;

console.log(`Housing Levy is ${housingLevy}`);



/*
NET SALARY
*/

const netSalary =
    grossMonthlySalary
    - nssf
    - final_paye
    - shif
    - housingLevy;

console.log(`Net Salary is ${netSalary}`);



alert(`

Gross Salary      ${grossMonthlySalary.toFixed(2)}

NSSF              ${nssf.toFixed(2)}

Taxable Income    ${taxableIncome.toFixed(2)}

PAYE              ${paye.toFixed(2)}

Personal Relief   ${personalRelief.toFixed(2)}

Final PAYE        ${final_paye.toFixed(2)}

SHIF              ${shif.toFixed(2)}

Housing Levy      ${housingLevy.toFixed(2)}

Net Salary        ${netSalary.toFixed(2)}

Tier              ${paye_tier}

`);

