import Header from "./Header";
import List from "./List";

function App() {
  return (
    <>
      <Header />
      <List />

      <p>Copyright © {new Date().getFullYear()}</p>
    </>
  )
}

export default App;