import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "10px", padding: "10px 20px" }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ padding: "10px 20px" }}
      >
        Decrement
      </button>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setCount(0)} style={{ padding: "10px 20px" }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

// const Counter = ({ count, onIncrement, onDecrement }) => {
//   return (
//     <div>
//         <h1>Counter: {count}</h1>
//         <button onClick={onIncrement}>Increment</button>
//         <button onClick={onDecrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;