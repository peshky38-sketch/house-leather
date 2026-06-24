/*
    Let's start with if.

    * It's special.
    * You can use it on its own.
*/

/*
    If is independent.
    One statement does not depend on another.
*/

// age = 27
// 27 > 10 = true
// 27 > 13 = true
// 27 > 18 = true
// 27 > 27 = false
// 27 > 45 = false
// 27 > 50 = false


let age = Number(prompt("Enter your age:"));
alert(`You entered ${age}`);

if (age < 13) {
    alert("You are a baby.");
}

if (age >= 13 && age < 18) {
    alert("You are a teen");
}

if (age >= 18) {
    alert("You can legally drink and smoke");
}

if (age >= 27) {
    alert("Best age for marriage");
}

if (age >= 45) {
    alert("Best age for retirement");
}

if (age >= 50) {
    alert("You are an ancestor");
}