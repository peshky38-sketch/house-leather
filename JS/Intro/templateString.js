/*
TEMPLATE STRING

*/
//Normal String Calculations

let firstName="Rachel"
let secondName= "Gathoni"
let age=27
let address="Kiambu County"

let userDetails=firstName+" "+secondName+" is "+age+" years old "+
"she stays at "+address

console.log(userDetails)
console.log("User details is",typeof userDetails)

//Template string use back ticks
let userDetails2=`${firstName} ${secondName} is ${age} years old and she stays at ${address}`;
console.log(userDetails2);

console.log(`${firstName} ${secondName} is ${age} years old and she stays at ${address}`);