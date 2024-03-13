import React, { createContext, useContext, useReducer } from "react";

const counterContext = createContext();

export const useCounter = () => useContext(counterContext);

const INIT_STATE = {
  counter: 0,
  counter2: 1,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: action.payload };
    case "DECREMENT":
      return { ...state, counter: action.payload };
    case "MULT2":
      return { ...state, counter2: action.payload };
    case "DIV2":
      return { ...state, counter2: action.payload };
    default:
      return state;
  }
}

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function increment() {
    let action = {
      type: "INCREMENT",
      payload: state.counter + 1,
    };
    dispatch(action);
  }
  function decrement() {
    let action = {
      type: "DECREMENT",
      payload: state.counter - 1,
    };
    dispatch(action);
  }
  function mult2() {
    dispatch({
      type: "MULT2",
      payload: state.counter2 * 2,
    });
  }
  function div2() {
    dispatch({
      type: "DIV2",
      payload: state.counter2 / 2,
    });
  }

  //   const [counter, setCounter] = useState(0);
  //   const [counter2, setCounter2] = useState(1);

  //   function increment() {
  //     setCounter(counter + 1);
  //   }

  //   function decrement() {
  //     setCounter(counter - 1);
  //   }
  //   function mult2() {
  //     setCounter2(counter2 * 2);
  //   }
  //   function div2() {
  //     setCounter2(counter2 / 2);
  //   }
  return (
    <counterContext.Provider
      value={{
        counter: state.counter,
        counter2: state.counter2,
        increment,
        decrement,
        mult2,
        div2,
      }}
    >
      {children}
    </counterContext.Provider>
  );
};

export default CounterContextProvider;
