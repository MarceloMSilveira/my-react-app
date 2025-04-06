import Login from "./Login";

let isLoged = false;

function checkLogin() {
  if (isLoged) {
    return <h1>Hello</h1>  
   } else {
     return <Login /> 
   }
}

function App() {
  return (
    <div className="container">
      {checkLogin()}
    </div>
  )
}

export default App;

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.