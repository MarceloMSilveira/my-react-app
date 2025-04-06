import Login from "./Login";

let isLoged = false;

function App() {
  return (
    <div className="container">
      {isLoged ? <h1>Hello </h1> : <Login />}
    </div>
  )
}

export default App;
