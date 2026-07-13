/*
Look at the differences
between an array and an object.
-> in an array keys are sequential <numbers>
*/

/*
Create an object that behaves like an array.

1. Create an array, give it <any name>.
   Inside the array have two digits.
   0: <any digit>
   1: <any digit>

2. Create an object <any name>.
   Inside the object have keys.
   0: <any digit>
   1: <any digit>

   For the object create the length key.
   Have it as the size of the object <keys>.

3. Use push() to add another value to the array.
   Update the object so it behaves the same.

4. console.table() both.
   You should see they are the same.
*/

// Create an array
const ar = [20, 5];

// Use push() to add another value
ar.push(10);

// Create an object that behaves like an array
const arObj = {
    0: 20,
    1: 5,
    2: 10,
    length: 3
};

// Display both using console.table()
console.log("Array:");
console.table(ar);

console.log("Object behaving like an array:");
console.table(arObj);

console.log("Array length:", ar.length);
console.log("Object length:", arObj.length);

console.log("Program finished.");

/*
Pop method is used to remove the last element from an array and returns that element. This method changes the length of the array.  
(pop() method is not available for objects, but we can create a custom function to mimic the behavior of pop() for objects.)
*/

const numbers = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    length: 4,

    pop: function () {
        if (this.length === 0) {
            return undefined;
        }

        const lastItem = this[this.length - 1];

        delete this[this.length - 1];
        this.length--;

        return lastItem;
    }
};

console.log(numbers);

const removed = numbers.pop();

console.log("Removed:", removed);
console.log(numbers);