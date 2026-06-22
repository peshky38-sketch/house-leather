/* Comparison operators evaluate to only true or false
1. Equality ==
2. Strict Equality ===
3. Inequality !=
4. Strict Inequality !==
*/

let numb1 = "23";
let num2 = 23;

let strictEqual = numb1 === num2; // boolean
console.log(`numb1=${numb1} === num2=${num2}
Ans ${strictEqual} its type is ${typeof strictEqual}`);

let nonStrictEquality = numb1 == num2;
console.log(`numb1=${numb1} == num2=${num2}
Ans ${nonStrictEquality} its type is ${typeof nonStrictEquality}`);

let val1="sasa"
let val2= " Poa sana"
//different types should be equal
//string is not equal number ->true

let strictInequality=val1!==val2
console.log(`val1=${val1} !== val2=${val2}
Ans ${strictInequality} its type is ${typeof strictInequality}`);
//"40"not equal to 40 =>false

let Inequality=val1!=val2
console.log(`val1=${val1} != val2=${val2}
Ans ${Inequality} its type is ${typeof Inequality}`);
/*
> greater than a>b
< less than a<b
> greater than or equal to
<= less than oe equal to
*/
let numb3=20;
let numb4=10;

let str1="a"
let str2="b"

console.log(`numb3=${numb3} and numb4=${numb4}`)
console.log(`str1=${str1} and str2=${str2}`)

console.log(`numb3>numb4${numb3>numb4}`)
console.log(`str2>str1${str2>str1}`)

console.log(`numb>=numb4${numb3>=numb4}`)
console.log(`str2>=str1${str2>=str1}`)

console.log(`numb3<numb4${numb3<numb4}`)
console.log(`str2<str1${str2<str1}`)

console.log(`numb3<=numb4${numb3<=numb4}`)
console.log(`str2<=str1${str2<=str1}`)
