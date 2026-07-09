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