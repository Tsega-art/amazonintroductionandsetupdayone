import React, { useReducer, useState } from "react";
import reactLogo from "./logo.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //* Initial state for the counter
  const initialState = { count: 0 };

  //* Reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 }; // Reset count to 0
      default:
        throw new Error();
    }
  }

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
    </>
  );
}

export default App;
