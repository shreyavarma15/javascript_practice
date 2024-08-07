import { useEffect, useState } from "react";
import "./styles.css";
//counter 0 , increment by 1 by every sec, pause counter, resume counter

export default function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState();

  const startCounter = () => {
    var startCounterId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    setCounter(startCounterId);
  };

  useEffect(() => {
    var theCounterId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    console.log("theCounterId", theCounterId);
    setCounter(theCounterId);
    return () => clearInterval(theCounterId);
  }, []);

  const handlePause = () => {
    console.log(counter);
    clearInterval(counter);
  };

  return (
    <div className="App">
      <div>Count- {count}</div>
      <button onClick={handlePause}>Pause</button>
      <button onClick={startCounter}>Resume</button>
    </div>
  );
}
