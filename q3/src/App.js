import React, { useState } from 'react';

function HelloWorld() {
  return <h2>Hello, World! Happy Coding </h2>;
}

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button  onClick={increment}>+</button>
      <label> {count} </label>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <HelloWorld />
      <Counter />
    </div>
  );
}

export default App;
