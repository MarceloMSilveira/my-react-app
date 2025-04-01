function App() {
  const name = "Marcelo";
  return (
    <>
      <h1>Create by {name}</h1>
      <h2 className="heading" contentEditable="true" spellCheck="false">My Favourite Foods</h2>
      <ul>
        <li>food 1</li>
        <li>food 2</li>
        <li>food 3</li>
      </ul>
      <p className="newClass">Copyright © {new Date().getFullYear()}</p>
    </>
  )
}

export default App;