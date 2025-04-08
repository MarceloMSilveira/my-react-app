import { useState } from "react";

function App() {

  const [fName,setFName] = useState(" ")
  const [lName,setLName] = useState(" ")

  function handleChangeFName(evt) {
    setFName(evt.target.value)
  }

  function handleChangeLName(evt) {
    setLName(evt.target.value)
  }

  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input 
          name="fName" 
          placeholder="First Name" 
          onChange={handleChangeFName}
          value={fName}
        />
        <input 
          name="lName" 
          placeholder="Last Name"
          onChange={handleChangeLName}
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

