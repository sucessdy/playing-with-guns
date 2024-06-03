import React, { useCallback, useEffect, useRef } from "react";
const UPPER_CAP = 10; 
export default function Counter({count, setCount}) {
//   const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const startCounting = useCallback(() => {
    return setInterval(() => {
      //   if (count === 15) clearInterval(intervalRef.current);
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    const intervalId = startCounting();
    intervalRef.current = intervalId;
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (count === UPPER_CAP) {
        setCount(0)
    }
  }, [count]);

  return <div>Count is :{count}</div>;
}
