import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";
import Input from "./components/Input";

function App() {
  /**
   * useState is a JS fxn provided by 'react'
   * It takes one argument, for our purposes
   * 1. The state that we passed.
   * 2. A function that we can call to update the state
   */
  const [name, setName] = useState("Mark");

  return (
    <main>
      {/* passing a prop to the child (Hello.jsx) */}
      <Hello name={name} />
      <Input handler={setName} />
    </main>
  );

  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
}

export default App;
