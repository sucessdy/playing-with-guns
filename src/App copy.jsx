import { useState } from "react";
import "./App.css";

// import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
// import Counter from "./counter";

function App() {
  // const [count, setCount] = useState(0);
  // const router = createBrowserRouter([
  //   {
  //     path: "",
  //     element: (
  //       <div>
  //         <Link to={"/counter"}>Go to the Counter</Link>
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "/counter",
  //     element: <Counter count={count} setCount={setCount} />,
  //   },
  // ]);

  //  for timer

  const [count, setCount] = useState(0);
  const startTimer = () => {
    setInterval(() => {
      const newCount = count + 1;
      console.log("New count" , newCount)
      setCount(newCount);
    }, 500);
  } 
  return (
    <>

      {/* <RouterProvider router={router} /> */}

      <p> Count: {count} </p>
      <button onClick={startTimer}> StartTimer </button>
    </>
  );
}

export default App;
