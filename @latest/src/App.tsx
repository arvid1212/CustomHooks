import "./App.css";

import { useCounter } from "./Hooks/useCounter";

function App() {
  const counter = useCounter();

  return (
    <>
      <div>
        <p> Count: {counter.count} </p>
        <button onClick={counter.increment}> Increment</button>
        <button onClick={counter.decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
