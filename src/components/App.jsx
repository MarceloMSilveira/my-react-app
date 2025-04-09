import { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems([...items, inputText]);
  }

  function deleteItem(id) {
    setItems(() => items.filter((item, index) => index !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea sendInsertedText={addItem}/>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
