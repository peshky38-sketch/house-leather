/*
State in React

When state changes, every part of the component
that uses the state updates automatically.
*/

import { useState } from "react";

function ClickMe() {
  /*
    useState()

    Syntax:
    const [state, setState] = useState(initialValue);

    state      -> stores the current value
    setState   -> updates the state
    initialValue -> the starting value
  */

  // Create a state variable called n with an initial value of 0
  const [n, setN] = useState(0);

  // ======================================
  // Increase the value by 1
  // ======================================
  const increment = () => {
    const newN = n + 1;
    setN(newN);

    // This also works:
    // setN(n + 1);
  };

  // ======================================
  // Decrease the value by 1
  // ======================================
  const decrement = () => {
    setN(n - 1);
  };

  // ======================================
  // Demonstrates that React state can hold
  // different data types.
  // Clicking this button changes the number
  // into a string.
  // ======================================
  const spoil = () => {
    setN("Spoiled!");
  };

  // ======================================
  // Reset the state back to 0
  // ======================================
  const reset = () => {
    setN(0);
  };

  return (
    <div>
      {/* Display the current state value */}
      <h4>Clicked {n}</h4>

      {/* Buttons to update the state */}
      <div>
        <button onClick={increment}>Increment</button>

        <button onClick={decrement}>Decrement</button>

        <button onClick={spoil}>Spoil</button>

        <button onClick={reset}>Reset</button>
      </div>

      {/* Display the updated value again */}
      <h4>Clicked {n}</h4>
    </div>
  );
}

export default ClickMe;
