/* NUMBERS
floating point number: <decimal place>
real numbers
positive
negative numbers
*/

let number1 = 34; // real number
console.log(number1);

let number2 = 42.42; // floating point number
console.log(number2);

let number3 = -42; // negative number
console.log(number3);

// biggest number: 1.7976931348623157 × 10^308

/* STRINGS

3 ways of creating a string
1. Double quote string
2. Single quote string
3. Backticks (Template string)
*/

/*
special -> \t (tab)
newline -> \n
single quote escape -> \'
double quote escape -> \"
*/

let str1 = "Double \n quote I am Rachel"; // double quote
console.log(str1);

let str2 = 'Single Quote I am Rachel'; // single quote
console.log(str2);

let str3 = `Back Ticks I am Rachel`; // backticks
console.log(str3);

let str4 = "42"; // string, not a number
console.log(str4);

/* why do we have multiple ways of representing a string */

let str5 = 'Rachel said "42 is a number"';
console.log(str5);

let str6 = `
Multi line string
Multi line strings
"" '' both single and double quotes
Don't
`;
console.log(str6);

let str7 = "Don't do this anymore";
console.log(str7);