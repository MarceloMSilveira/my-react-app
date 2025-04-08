import { useState } from "react";

function App() {

  const [todoList,setList] = useState(['A Item'])
  const [item,setItem] = useState("")

  function handleClick() {
    setList([...todoList,item])
    //clean input itemName
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          type="text" 
          name="itemName"
          onChange={evt=>setItem(evt.target.value)}
          value={item}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {console.log(todoList.forEach(item=>`<li>${item}</li>`))}
        </ul>
      </div>
    </div>
  );
}

export default App;


//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

