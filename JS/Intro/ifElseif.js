/*
if and else if -> chain
-> we exit if and else if when we reach the first true condition
*/

let age = Number(prompt("Enter your age: "));

console.log(`age is ${age} typeof ${typeof age}`);
alert(`You entered ${age}`);

// age = 13
// 13 > 10 : true ->

/*
Working on getting one alert per age
must be the correct one
*/

 if (age < 12) {
    alert("You are a baby");
}
else if (age < 18) {
    alert("You are a teen");
}
else if (age < 28) {
    alert("You are a young adult");
}
else if (age < 45) {
    alert("You are a mature adult");
}
else if (age < 50) {
    alert("You are middle-aged");
}
else {
    alert("You are an ancestor");
}