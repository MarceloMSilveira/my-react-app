
function App() {
  const userName = "Marcelo";
  const lName = "Silveira";
  return (
    <>
      <h1>Hello {userName} {lName}</h1> 
      <p>your luck number is: {Math.floor(10*Math.random())}</p>
      <p>This year is: {new Date().getFullYear()}</p>
    </>
);
}

export default App;