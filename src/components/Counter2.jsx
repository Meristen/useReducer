import React from "react";
import { useCounter } from "../contexts/CounterContextProvider";

const Counter2 = () => {
  const { counter2, div2, mult2 } = useCounter();
  return (
    <div>
      <button onClick={div2}>/</button>
      <h2>{counter2}</h2>
      <button onClick={mult2}>*</button>
    </div>
  );
};

export default Counter2;
