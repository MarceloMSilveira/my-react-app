import { useState } from "react";

function App() {

  const [isOver,setIsOver] = useState(false);

  function handleOver() {
    setIsOver(true);
  }

  function handleOut() {
    setIsOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button  
        onMouseOver={handleOver}
        onMouseOut={handleOut}
        style={{backgroundColor: isOver && "black"}}
      >Submit</button>
    </div>
  )
}

export default App;

