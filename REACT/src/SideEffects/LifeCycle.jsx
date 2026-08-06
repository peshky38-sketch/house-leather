import { useEffect, useState } from "react";
/*
useEffect is a hook that allows you to perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.
@param1: A function that contains the code for the side effect. This function can optionally return a cleanup function to clean up after the effect.
@param2: An optional array of dependencies. If provided, the effect will only re-run if one of the dependencies has changed since the last render. If not provided, the effect will run after every render.
*/
function LifeCycle() {
    const [ n, setN ] = useState( 0 );
    const [m, setM] = useState(0);
    useEffect(() => {
        console.log("N has changed", n);
    }, [ n ] );
    useEffect(() => {
        console.log("M has changed", m);
    }, [ m ] );

    return (
        <div>
            <h2>Current number: {n}</h2>
            <h2>Current M: {m}</h2>
            <div>
                <button onClick={() => setN((prev) => prev - 1)}>Decrement</button>
                <button onClick={() => setN((prev) => prev + 1)}>Increment</button>
            </div>
            <div>
                <button onClick={() => setM((prev) => prev - 1)}>Decrement M</button>
                <button onClick={() => setM((prev) => prev + 1)}>Increment M</button>
            </div>
            <div>
                <EventOrOdd n={n} />
            </div>
        </div>
    );
}

function EventOrOdd({ n }) {
    if (n % 2 === 0) {
        return (
            <div>
                <EvenComponent n={n} />
            </div>
        );
    }
    return (
        <div>
            <OddComponent n={n} />
        </div>
    );
}

function EvenComponent() {
    //Born
    useEffect(() => {
        console.log("Even Component Mounted");
    }, []);
    return (
        <div>
            <h1>Even</h1>
        </div>
    );
}

function OddComponent() {
    useEffect(() => {
        console.log("Odd Component Mounted");
    }, []);
    return (
        <div>
            <h1>Odd</h1>
        </div>
    );
}

export default LifeCycle;