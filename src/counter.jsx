import { useState } from "react";

export default function counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(++count)}>Increment</button>
    </>
  );
}
