// import React  from "react";
import { useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const startTimer = () => {
    setInterval(() => {
      const newCount = count + 1;
      setCount(newCount);
    }, 500);
  };
  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={startTimer}> StartTimer </button>
    </div>
  );
}
