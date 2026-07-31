function Mapping() {
  /*
    React Mapping

    - In React, we often display data from an array.
    - We use the map() method to create JSX elements.

    Syntax:
      array.map((item, index) => {
        return (...);
      });

    map() creates a new array.
    It loops through every item and returns a value.
  */

  const numbers = [2, 6, 23, 565, 32];

  // forEach() does not return a new array
  let x = numbers.forEach((element) => {
    console.log("Element is:", element);
    return "this is n";
  });

  console.log(x);

  // map() returns a new array
  const powersOfNumber = numbers.map((n) => {
    console.log("this is n:", n);
    return n * n;
  });

  const justMap = numbers.map(() => "cats and dogs");

  console.log(powersOfNumber);
  console.log(justMap);

  // Array of colours
  const colors = ["green", "yellow", "blue", "black"];

  // Function used with map()
  function singleColor(c, i) {
    if (i === 1) {
      return null;
    }

    return (
      <div key={i}>
        for index <b>{i}</b> color is <b>{c}</b>
      </div>
    );
  }

  return (
    <div>
      <h1>Mapping Colors</h1>

      <h4>Using Arrow Function</h4>

      {colors.map((color, index) => {
        return (
          <div key={index}>
            for index <b>{index}</b> color is <b>{color}</b>
          </div>
        );
      })}

      <h4>Using Direct Arrow Function</h4>

      {colors.map((c, i) => (
        <div key={i}>
          for index <b>{i}</b> color is <b>{c}</b>
        </div>
      ))}

      <h4>Using Anonymous Function</h4>

      {colors.map(function (c, i) {
        return (
          <div key={i}>
            for index <b>{i}</b> color is <b>{c}</b>
          </div>
        );
      })}

      <h4>Using Referencing the Function</h4>

      {colors.map(singleColor)}

      <h4>Using a Component</h4>

      {colors.map((c, i) => (
        <SingleColorComponent
          key={i}
          c={c}
          i={i}
        />
      ))}
    </div>
  );
}

// Reusable Component
function SingleColorComponent(props) {
  const { c, i } = props;

  return (
    <div>
      for index <b>{i}</b> color is <b>{c}</b>
    </div>
  );
}

export default Mapping;