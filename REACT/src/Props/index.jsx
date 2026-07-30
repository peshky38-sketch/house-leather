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
    return (
        <div>
            <h1>I am the Parent Component</h1>
            <Child name={name} age={age} isStudent={isStudent} notStudent={notStudent} />
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
            </ul>
        </div>

    );
}
export default Parent;
