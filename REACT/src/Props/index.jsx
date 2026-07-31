/*
1.Components are functions
input->output
input<data>->output is ui
2. Create reusable components you nnees and understand props properties
3.Each component you create in react will always have props
4.Props are passed from parent to child
->all data types can be passed into props
including other components.
*/
function Parent() {
    //primitive data types
    const name= "Hello I am Rachel";
    const age = 25;
    const isStudent = true;
    const notStudent = null;
    const car={
        name: "Jeep",
        model: "Wrangler",
        year: 2026,
        color: "Black",
        manufacturer: "Jeep",   
        engine: "V6"
    };
    return (
        <div>
            <h1>I am the Parent Component</h1>
            <Child name={name} age={age} isStudent={isStudent} notStudent={notStudent} car={car} />
            <Child2 name={name} age={age} isStudent={isStudent} notStudent={notStudent} car={car} /> 
            <Child3 name={name} age={age} isStudent={isStudent} notStudent={notStudent} car={car} />
        </div>
    );
}
//display props using prop keyword
function Child( props ) {
    console.log(props);
    return (
        <div>
            <h1>I am the Child component</h1>
            <ul>
                <li>Greeting<b> { props.name }</b></li>
                <li>Age<b>{ props.age }</b></li>
                <li>Is Student<b> { props.isStudent.toString() }</b></li>
                <li>Not Student<b> { props.notStudent }</b></li>
                <li>Car<b> { props.car.name } { props.car.model } { props.car.year } { props.car.color } { props.car.manufacturer } { props.car.engine }</b></li>
            </ul>
        </div>

    );
}
//using destructuring
function Child2( { name, age, isStudent, notStudent, car } ) {
    console.log({ name, age, isStudent, notStudent, car });
    return (
        <div>
            <h1>I am the Child2 component</h1>
            <ul>
                <li>Greeting<b> { name }</b></li>
                <li>Age<b>{ age }</b></li>
                <li>Is Student<b> { isStudent.toString() }</b></li>
                <li>Not Student<b> { notStudent }</b></li>
                <li>Car<b> { car.name } { car.model } { car.year } { car.color } { car.manufacturer } { car.engine }</b></li>     
            </ul>
        </div>

    );
}
//using direct destructuring in the function parameter
function Child3( { name, age, isStudent, notStudent, car } ) {
    //console.log({ name, age, isStudent, notStudent, car });
 
    return (
        <div>
            <h1>I am the Child3 component</h1>
            <ul>
                <li>Greeting<b> { name }</b></li>
                <li>Age<b>{ age }</b></li>
                <li>Is Student<b> { isStudent.toString() }</b></li>
                <li>Not Student<b> { notStudent }</b></li>
                <li>Car<b> { car.name } { car.model } { car.year } { car.color } { car.manufacturer } { car.engine  }</b></li>     
            </ul>
        </div>

    );
}
export default Parent;
