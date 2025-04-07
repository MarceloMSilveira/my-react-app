import { useState } from 'react';

const initialTime = new Date().toLocaleTimeString("en-US", { hour12: false });

function App() {

  const [time, setTime] = useState(initialTime)

  function showClock() {
    setInterval(()=> setTime(new Date().toLocaleTimeString("en-US", { hour12: false })),1000)
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={() => setTime(new Date().toLocaleTimeString("en-US", { hour12: false }))}>Get Time</button>
      {showClock()}
    </div>
  )
}

export default App;

//Challenge:
//1. Given that you can get the current time using:
//let time = new Date().toLocaleTimeString();
//console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

