import React, { useState } from "react";
import { useValues, useActions } from "kea";
import { counterLogic } from "./counterLogic";
import { Button } from "react-bootstrap";

export const Counter = () => {
  const { count } = useValues(counterLogic);
  const { incrementCounter, decrementCounter, updateCounter } =
    useActions(counterLogic);

  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <div>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </div>
      <br />
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button onClick={() => updateCounter(inputValue)}>Update Value</button>
      </div>

      <Button color="danger">Danger!</Button>
    </div>
  );
};
