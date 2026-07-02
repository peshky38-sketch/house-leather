/*
Our own callback function
Doing shape calculations

Shapes:
1. Circle
2. Rectangle
3. Triangle

Instructions:
1. Create an arrow function for each shape.
2. Each function should take the required parameters.
3. Create a super function called shape().
4. shape() takes:
   - param1 -> callback function
   - param2 -> shape name
   - param3 -> first measurement (required)
   - param4 -> second measurement (optional)
   - param5 -> third measurement (optional)
5. Inside shape(), print each parameter and its type.
6. Call the callback function to calculate the area.
7. Test each shape.
*/

// =========================
// Callback Functions
// =========================

// Circle
const areaCircle = (radius) => {
    return Math.PI * radius * radius;
};

// Rectangle
const areaRectangle = (length, width) => {
    return length * width;
};

// Triangle
const areaTriangle = (base, height) => {
    return 0.5 * base * height;
};


// =========================
// Super Callback Function
// =========================

const shape = (callback, shapeName, s1, s2, s3) => {

    console.log("==============================");
    console.log(`Shape: ${shapeName}`);
    console.log("");

    console.log(`callback :`, callback);
    console.log(`Type      : ${typeof callback}`);

    console.log(`shapeName : ${shapeName}`);
    console.log(`Type      : ${typeof shapeName}`);

    console.log(`s1        : ${s1}`);
    console.log(`Type      : ${typeof s1}`);

    console.log(`s2        : ${s2}`);
    console.log(`Type      : ${typeof s2}`);

    console.log(`s3        : ${s3}`);
    console.log(`Type      : ${typeof s3}`);

    let area = callback(s1, s2, s3);

    console.log("");
    console.log(`Area of ${shapeName} = ${area}`);
    console.log("==============================\n");
};


// =========================
// Testing
// =========================

// Circle
shape(areaCircle, "Circle", 10);

// Rectangle
shape(areaRectangle, "Rectangle", 10, 5);

// Triangle
shape(areaTriangle, "Triangle", 10, 6);