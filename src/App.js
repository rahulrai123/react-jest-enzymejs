import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button
        id="decrement-btn"
        onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
