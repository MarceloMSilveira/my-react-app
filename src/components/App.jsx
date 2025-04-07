import { useState } from "react";

function App() {

  const [isOver,setIsOver] = useState(false);
  const [userName, setName] = useState("");
  const [nameInTitle, setTitle] = useState("");

  function handleOver() {
    setIsOver(true);
  }

  function handleOut() {
    setIsOver(false);
  }

  function handleClick() {
    const value = document.getElementById("name").value
    setTitle(value);
  }

  function handleInput(evt) {
    let value = evt.target.value;
    //console.log(evt.target.value);
    setName(value);
  }

  return (
    <div className="container">
      <h1>Hello {nameInTitle}</h1>
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

