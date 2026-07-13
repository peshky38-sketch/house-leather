/*
Create an object called car.

Properties:
- name
- model
- top_speed
- colour
- engine_information (object)
- manufacture (object)
- number as a property key
- alert_info (function)
- fun_fact
- is_it_a_classic (boolean)
*/

const car = {
    name: "Jeep",
    model: "Wrangler 2026",
    colour: "Black",
    top_speed: "180 km/h",

    engine_information: {
        cylinders: 6,
        engine_number: "V6-2026"
    },

    manufacture: {
        name: "Jeep",
        aka: "JEEP",
        country: "USA"
    },

    101: 500,

    fun_fact: "The Jeep Wrangler is built for off-road adventures.",

    is_it_a_classic: true,

    alert_info: function() {
        alert(`Car Name: ${this.name}\nModel: ${this.model}\nTop Speed: ${this.top_speed}\nColour: ${this.colour}\nEngine Cylinders: ${this.engine_information.cylinders}\nEngine Number: ${this.engine_information.engine_number}\nManufacture Name: ${this.manufacture.name}\nManufacture AKA: ${this.manufacture.aka}\nManufacture Country: ${this.manufacture.country}\nFun Fact: ${this.fun_fact}\nIs it a Classic? ${this.is_it_a_classic}`);
    }
};

// Call the alert_info function to display the car information
car.alert_info();   

// Call the alert function
car.alert_info();

// Display information in the console
console.log(`Car datatype: ${typeof car}`);
console.log(car);
console.log("--using console.table()--");
console.table( car );

/* accessing different types of your object properties 

examples of accessing object properties are:

dot notation - car.name explained - car.name will return the value of the name property of the car object, which is "Jeep".
bracket notation - car["model"] explained - car["model"] will return the value of the model property of the car object, which is "Wrangler 2026".
using a variable to access a property - const propertyName = "name"; console.log(car[propertyName]); explained - const propertyName = "name"; console.log(car[propertyName]); will return the value of the name property of the car object, which is "Jeep".
using a number as a property key - console.log(car[101]); explained - console.log(car[101]); will return the value of the property with the key 101 in the car object, which is 500.

Difference between dot notation and bracket notation:
Dot notation is used to access properties of an object using the property name directly, while bracket notation allows you to access properties using a string or variable. Bracket notation is useful when the property name is dynamic or not a valid identifier.

Uses of dot notation and bracket notation:
Dot notation is commonly used when the property name is known and valid, while bracket notation is used when the property name is dynamic or not a valid identifier. Bracket notation can also be used to access properties with special characters or spaces in their names.
*/
/*
Access individual parts of your object.
Use both dot notation and bracket notation.
Print the value and also print its type.
*/

// name
console.log(`Name is ${car.name}, its type is ${typeof car.name}`);
console.log(`Name is ${car["name"]}, its type is ${typeof car["name"]}`);

// model
console.log(`Model is ${car.model}, its type is ${typeof car.model}`);
let property = "model";
console.log(`Model is ${car[property]}, its type is ${typeof car[property]}`);

// colour
console.log(`Colour is ${car.colour}, its type is ${typeof car.colour}`);
console.log(`Colour is ${car["colour"]}, its type is ${typeof car["colour"]}`);

// top_speed
console.log(`Top Speed is ${car.top_speed}, its type is ${typeof car.top_speed}`);
console.log(`Top Speed is ${car["top_speed"]}, its type is ${typeof car["top_speed"]}`);

// engine_information
console.log(`Engine Information:`, car.engine_information, `Type: ${typeof car.engine_information}`);
console.log(`Engine Information:`, car["engine_information"], `Type: ${typeof car["engine_information"]}`);

// cylinders
console.log(`Cylinders: ${car.engine_information.cylinders}, Type: ${typeof car.engine_information.cylinders}`);
console.log(`Cylinders: ${car["engine_information"]["cylinders"]}, Type: ${typeof car["engine_information"]["cylinders"]}`);

// engine_number
console.log(`Engine Number: ${car.engine_information.engine_number}, Type: ${typeof car.engine_information.engine_number}`);
console.log(`Engine Number: ${car["engine_information"]["engine_number"]}, Type: ${typeof car["engine_information"]["engine_number"]}`);

// manufacture
console.log(`Manufacture:`, car.manufacture, `Type: ${typeof car.manufacture}`);
console.log(`Manufacture:`, car["manufacture"], `Type: ${typeof car["manufacture"]}`);

// manufacture name
console.log(`Manufacturer Name: ${car.manufacture.name}, Type: ${typeof car.manufacture.name}`);
console.log(`Manufacturer Name: ${car["manufacture"]["name"]}, Type: ${typeof car["manufacture"]["name"]}`);

// aka
console.log(`AKA: ${car.manufacture.aka}, Type: ${typeof car.manufacture.aka}`);
console.log(`AKA: ${car["manufacture"]["aka"]}, Type: ${typeof car["manufacture"]["aka"]}`);

// country
console.log(`Country: ${car.manufacture.country}, Type: ${typeof car.manufacture.country}`);
console.log(`Country: ${car["manufacture"]["country"]}, Type: ${typeof car["manufacture"]["country"]}`);

// number property
console.log(`Number Property: ${car[101]}, Type: ${typeof car[101]}`);
let numberKey = 101;
console.log(`Number Property: ${car[numberKey]}, Type: ${typeof car[numberKey]}`);

// fun_fact
console.log(`Fun Fact: ${car.fun_fact}, Type: ${typeof car.fun_fact}`);
console.log(`Fun Fact: ${car["fun_fact"]}, Type: ${typeof car["fun_fact"]}`);

// is_it_a_classic
console.log(`Classic: ${car.is_it_a_classic}, Type: ${typeof car.is_it_a_classic}`);
console.log(`Classic: ${car["is_it_a_classic"]}, Type: ${typeof car["is_it_a_classic"]}`);

// alert_info
console.log(`Alert Function Type: ${typeof car.alert_info}`);
console.log(`Alert Function Type: ${typeof car["alert_info"]}`);

/*
HAVE ALL YOUR CAR VALUES FROM CAR OBJECT INSIDE THE ARRAY.
Add final element which is an array with your favourite numbers.

ACCESS USING THE ARRAY ALL ITEMS.
DO NOT USE A LOOP.
Use bracket notation.
*/

const carArray = [
    car["name"],
    car["model"],
    car["top_speed"],
    car["colour"],
    car["engine_information"],
    car["manufacture"],
    car[101],
    car["alert_info"],
    car["fun_fact"],
    car["is_it_a_classic"],
    [7, 14, 21, 50, 99] // favourite numbers
];

// Display the whole array
console.log(carArray);

// Access every array item using bracket notation (NO LOOP)
console.log(carArray[0]);
console.log(carArray[1]);
console.log(carArray[2]);
console.log(carArray[3]);
console.log(carArray[4]);
console.log(carArray[5]);
console.log(carArray[6]);
console.log(carArray[7]);
console.log(carArray[8]);
console.log(carArray[9]);
console.log(carArray[10]);

// Access favourite numbers individually
console.log(carArray[10][0]);
console.log(carArray[10][1]);
console.log(carArray[10][2]);
console.log(carArray[10][3]);
console.log(carArray[10][4]);

