import { useState } from "react";

function InputArea({sendInsertedText}) {
  const [inputText, setInputText] = useState("");

  function handleChange(evt) {
    setInputText(evt.target.value)
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={()=>
          {
            sendInsertedText(inputText);
            setInputText("");
          }
        }>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;