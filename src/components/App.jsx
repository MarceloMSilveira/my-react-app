import { useState } from "react";

function App() {

  const [fullName,setName] = useState({
    fName:"",
    lName:""
  })

  function handleChangeName(evt) {
    const {name,value} = evt.target;
    if (name==='fName') {
      setName({
        ...fullName,
        fName: value
      }
      )  
    } else if (name==='lName') {
      setName({
        ...fullName,
        lName: value
      }
      )
    }
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
          name="fName" 
          placeholder="First Name" 
          onChange={handleChangeName}
          value={fullName.fName}
        />
        <input 
          name="lName" 
          placeholder="Last Name"
          onChange={handleChangeName}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

