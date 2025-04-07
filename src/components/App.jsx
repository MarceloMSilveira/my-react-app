import { useState } from "react";

function App() {

  const [isOver,setIsOver] = useState(false);
  const [userName, setName] = useState("");

  function handleOver() {
    setIsOver(true);
  }

  function handleOut() {
    setIsOver(false);
  }

  function handleClick() {
    const value = document.getElementById("name").value
    setName(value);
  }

  function handleInput(evt) {
    setName(evt.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {userName}</h1>
      <input 
        id="name"
        type="text" 
        placeholder="What's your name?" 
        onChange={handleInput}
        value={userName}
      />
      <button  
        onMouseOver={handleOver}
        onMouseOut={handleOut}
        onClick={handleClick}
        style={{backgroundColor: isOver && "black"}}
      >Submit</button>
    </div>
  )
}

export default App;

