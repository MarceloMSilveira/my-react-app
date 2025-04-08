import { useState } from "react";

function App() {

  const [contact,setContact] = useState({
    fName:"",
    lName:"",
    email:""
  })

  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form onSubmit={evt=>evt.preventDefault()}>
        <input 
          name="fName" 
          placeholder="First Name" 
          onChange={evt=>setContact({...contact, fName:evt.target.value})}
          value={contact.fName}
        />
        <input 
          name="lName" 
          placeholder="Last Name"
          onChange={evt=>setContact({...contact, lName:evt.target.value})}
          value={contact.lName}
        />
        <input 
          name="email" 
          placeholder="Email"
          onChange={evt=>setContact({...contact,email:evt.target.value})}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

