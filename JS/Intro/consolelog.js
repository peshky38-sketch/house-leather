/*
console.log --> debugging by printing
out information in the screen

console.log-->ensure you write your consoles 
in such a way that they help figer out the issue

-->simple exercise from a gross salary
-->let calculate net salary
*/

const sallaryGross=5000;//instruction
//console.log(sallartGross)//-->more helpful
//Tax calculations
const paye=sallaryGross*0.16
console.log("For gross sallary of ",sallaryGross,"Paye is",paye)
//->
const nhif=2500
console.log("Nhif deduction",nhif)
const sha=2500
console.log("SHA is",sha)
const totalDeductions=paye+nhif+sha
console.log("Total deductions are",totalDeductions)
const netSallary=sallaryGross+totalDeductions
console.log("Your net sallary is",netSallary)