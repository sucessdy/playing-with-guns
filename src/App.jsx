import "./App.css";
import { useCallback,  useRef, useState } from "react";
const onDebounce = (fn, delay) => {
  // debounce basically the user will wait for some time to excute a function
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
//  throttle basically calls the function at certain period of time or a interval.
const onthrottle = (fn, delay) => {
  let timer;
  return (...args) => {
    // cuz first time timer will not there first it will be called and then the timer will be assigned as set timeOut  after some delay and this will be again.
    if (!timer) {
      //  function passed here
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
function App() {
    const [normalInput, setNormalInput] = useState(0)
  const [debounceInput, setOnDebounceInput] = useState(0);
  const debounceInputCalled  =  useRef(0)
  const [throttleInput, setThrottleInput] = useState(0);
  const throttledInputCalled  =  useRef(0)

  const handleChange = () => {
    // console.log(e.target.value);
    setOnDebounceInput(debounceInputCalled.current);
  };
  const handleChangeThrottle = () => {
    // console.log(e.target.value);
    setThrottleInput(throttledInputCalled.current);
  };
  //    it's basically taking the debounce function
  const ondebounceChange = useCallback(onDebounce(handleChange, 300), []);

  const onthrolleChange = onthrottle(handleChangeThrottle, 1000);

  //   const ondebounceChange = useMemo(() => onDebounce(handleChange, 300));
  //   const onthrolleChange = useMemo(() => onthrottle(handleChangeThrottle, 1000));

  const handleNormalClick = () => {
    setNormalInput( prev => prev +  1)
  }

  const handleDebounceCount = () => {
debounceInputCalled.current  = debounceInputCalled.current + 1; 
  }
  const handleThrottledCount = () => {
    throttledInputCalled.current  =  throttledInputCalled.current + 1; 
      }

  return (
    <>
      {/* <input onChange={ondebounceChange} />
      <span>Debounce: {debounceInput}</span>
      <input onChange={onthrolleChange} />

      <span> Throttle: {throttleInput}</span> */}

      <div className="container">
        <div  onClick={handleNormalClick} className="normal-gun gun "></div>
        <div className=" bullet"> </div>
        <span className="count">{normalInput} </span>
      </div>
      <div className="container">
        <div  onClick={ondebounceChange} className="debounced-gun gun "></div>
        <div className="bullet"> </div>
        <span className="count"> {debounceInput} </span>
      </div>
      <div className="container">
        <div  onClick={onthrolleChange } className="throttled-gun gun"> </div>
        <div className="bullet"> </div>
        <span className="count">{throttleInput} </span>
      </div>

    </>
  );
}

export default App;
