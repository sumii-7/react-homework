import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Plus = () => {
    setCount(count + 1);
  };

  const Minus = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="wrap">
        <div>
          <div className="count">{count}</div>
          <button onClick={Plus}>+</button>
          <button onClick={Minus}>-</button>
          <button onClick={Reset}>reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
