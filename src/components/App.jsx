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

  function handleSubmit(evt) {
    setTitle(userName);
    
    
    evt.preventDefault();
  }

  function handleInput(evt) {
    let value = evt.target.value;
    setName(value);
  }

  return (
    <div className="container">
      <h1>Hello {nameInTitle}</h1>
      <form onSubmit={handleSubmit}>
        <input 
          id="name"
          type="text" 
          placeholder="What's your name?" 
          onChange={handleInput}
          value={userName}
        />
        <button  
          type="submit"
          onMouseOver={handleOver}
          onMouseOut={handleOut}
          style={{backgroundColor: isOver && "black"}}
          >Submit
        </button>
      </form>
      
    </div>
  )
}

export default App;

