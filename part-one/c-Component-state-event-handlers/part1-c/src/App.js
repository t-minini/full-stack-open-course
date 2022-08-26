import { useState } from "react";

// BEFORE
// const Display = (props) => {
//   return <div>{props.counter}</div>;
// };

// SIMPLIFIED - props destructured and because it only contains a return statment, we can use the compacted form of arrow functions!
const Display = ({ counter }) => <div>{counter}</div>;

// BEFORE
// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };

// SIMPLIFIED - props destructured and because it only contains a return statment, we can use the compacted form of arrow functions!
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  //             |------- click event to be called once a button is clicked!
  // const handleClick = () => {
  //   console.log("clicked");
  // };

  //   |---- to auto count one every sec (1000)
  // setTimeout(() => setCounter(counter + 1), 1000);

  // console.log("rendering...", counter);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };
  const resetCounter = () => setCounter(0);

  return (
    <div>
      <h3>Counter for Part1 c Component state, event handles</h3>

      {/* <div>{counter}</div> */}
      <Display counter={counter} />

      {/*    |-- button with the handleClick function called inside the onClick attribute */}
      {/* <button onClick={handleClick}>plus</button> */}
      {/*    |-- button with a handler function called direct in the value assignement of the onClick attribute */}
      {/* <button onClick={()=> console.log("clicked")}>plus</button> */}
      {/* |-- button with a setCounter function passed as a onClick attribute value */}
      {/* <button onClick={() => setCounter(counter + 1)}>+</button> */}
      {/*                    |-- correct way to call event handlers functions. The onClick value is a variable containing a reference to a function */}
      {/* <button onClick={increaseByOne}>+</button> */}
      <Button onClick={increaseByOne} text="+" />

      {/* |-- button with a setCounter function passed as a onClick attribute value */}
      {/* <button
        onClick={() => {
          if (counter === 0) {
            return;
          }
          setCounter(counter - 1);
        }}
      >
        -
      </button> */}
      {/*                    |-- correct way to call event handlers functions. The onClick value is a variable containing a reference to a function */}
      {/* <button onClick={decreaseByOne}>-</button> */}
      <Button onClick={decreaseByOne} text="-" />

      {/*    |-- button to reset the counter to ZERO with a setCounter function passed as a onClick attribute value */}
      {/* <button onClick={() => setCounter(0)}>Reset</button> */}
      {/*                    |-- correct way to call event handlers functions. The onClick value is a variable containing a reference to a function */}
      {/* <button onClick={resetCounter}>Reset</button> */}
      <Button onClick={resetCounter} text="Reset" />
    </div>
  );
};

export default App;
