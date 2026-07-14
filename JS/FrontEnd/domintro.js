/*
DOM Access using

1. getElementById()
2. getElementsByClassName()
3. querySelector()
4. querySelectorAll()
*/


// ======================================
// 1. getElementById()
// ======================================

const divElement = document.getElementById("div1");

console.log("getElementById()");
console.log(divElement);


// ======================================
// 2. getElementsByClassName()
// ======================================

const classElements = document.getElementsByClassName("list-item");

console.log("getElementsByClassName()");
console.log(classElements);


// ======================================
// 3. querySelector() - ID
// ======================================

const queryId = document.querySelector("#div1");

console.log("querySelector() using ID");
console.log(queryId);


// ======================================
// 4. querySelector() - Class
// Returns ONLY the first matching element
// ======================================

const queryClass = document.querySelector(".list-item");

console.log("querySelector() using Class");
console.log(queryClass);


// ======================================
// 5. querySelectorAll()
// Returns all matching elements
// ======================================

const allItems = document.querySelectorAll(".list-item");

console.log("querySelectorAll()");
console.log(allItems);

for (let i = 0; i < allItems.length; i++) {
    console.log(allItems[i]);
}


// ======================================
// Original List
// ======================================

function original() {

    const divElement = document.getElementById("div1");

    divElement.innerHTML = `

<h3>List of fruits</h3>

        <ul>
            <li class="list-item">Apple</li>
            <li class="list-item">Banana</li>
            <li class="list-item">Cherry</li>
        </ul>
    `;

    console.log("Original function clicked");
}


// ======================================
// Replace List with Chores
// ======================================

function replace() {

    const divElement = document.getElementById("div1");

    const newList = document.createElement("ul");

    newList.innerHTML = `

<h3>List of chores</h3>

        <li class="list-item">Clean the house</li>
        <li class="list-item">Wash the dishes</li>
        <li class="list-item">Buy groceries</li>
    `;

    const oldList = divElement.getElementsByTagName("ul")[0];

    divElement.replaceChild(newList, oldList);

    console.log("Replace function clicked");
}


// ======================================
// Update Fruits
// ======================================

function updateFruits() {

    const divElement = document.getElementById("div1");

    const listItems = divElement.getElementsByClassName("list-item");

    const fruits = [
        "Mango",
        "Grapes",
        "Kiwi"
    ];

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].textContent = fruits[i];
    }

    console.log("updateFruits function clicked");
}




