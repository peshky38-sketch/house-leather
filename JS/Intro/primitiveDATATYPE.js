/* =========================
   NUMBERS
========================= */

/*
floating point number -> decimal places
real numbers
positive numbers
negative numbers
*/

let number1 = 34; // real number
console.log(number1);

let number2 = 42.42; // floating point number
console.log(number2);

let number3 = -42; // negative number
console.log(number3);

// Biggest number in JavaScript
// 1.7976931348623157 × 10^308


/* =========================
   STRINGS
========================= */

/*
3 ways of creating a string

1. Double quotes ""
2. Single quotes ''
3. Backticks `` (Template Strings)
*/

/*
Special Characters

\t  -> Tab
\n  -> New Line
\'  -> Single quote escape
\"  -> Double quote escape
*/

let str1 = "Double \n quote I am Rachel";
console.log(str1);

let str2 = 'Single Quote I am Rachel';
console.log(str2);

let str3 = `Back Ticks I am Rachel`;
console.log(str3);

let str4 = "42"; // String, not a number
console.log(str4);

/*
Why do we have multiple ways of representing strings?

- Single quotes allow double quotes inside.
- Double quotes allow single quotes inside.
- Backticks allow multiline strings and variable interpolation.
*/

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


/* =========================
   BOOLEANS
========================= */

/*
Boolean represents true or false
*/

let johnIsMale = true; // true value
console.log(johnIsMale);

let johnIsMarried = false; // false value
console.log(johnIsMarried);


/* =========================
   NULL
========================= */

/*
Null -> Lack of a value
i.e. absence of a value

Use null when you intentionally want
a variable to have no value.
*/

let nullVal1 = null;
console.log(nullVal1); // null


/* =========================
   UNDEFINED
========================= */

/*
Undefined -> A variable exists
but has not been assigned a value.

Difference between null and undefined:

null      -> intentionally empty
undefined -> not assigned a value

Never explicitly set something
to undefined. Use null instead
if you want to indicate "no value".
*/

let undefinedVal1 = undefined; // don't do this
console.log(undefinedVal1);

let undefinedVal2; // JavaScript automatically sets this to undefined
console.log(undefinedVal2);