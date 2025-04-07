import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  function handlePlus() {
    setCount(count + 1)
  }

  function handleMinus() {
    setCount(count - 1)
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  )
}

export default App;

