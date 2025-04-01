function App() {
  
  const customStyle = {
    color: "orange",
    border: "2px dashed blue", 
    fontSize: "40px"
  }

  customStyle.color = "green"

  return (
    <>
      <h1>INLINE STYLE</h1>
      
      <p style={customStyle}> Add inLineStyle to this paragraph! </p>
      <br />

      <p className="newClass">Copyright © {new Date().getFullYear()}</p>
    </>
  )
}

export default App;