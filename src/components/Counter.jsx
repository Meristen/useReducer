import React from "react";
import { useCounter } from "../contexts/CounterContextProvider";

const Counter = () => {
  const { counter, increment, decrement } = useCounter();
  console.log(counter);
  return (
    <div>
      <button onClick={decrement}>-</button>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
