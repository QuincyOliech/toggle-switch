import './App.css';
import React, {useState} from "react";

function App() {
  const [mode, setMode] = useState(true)
  const appClass = !mode ? "App dark" : "App light"

  function handleClick(){
    setMode(!mode)
  }
  
  return (
    <div className={appClass}>
      <button onClick={handleClick}>{mode ? "Light Mode": "Dark Mode" }</button>
    </div>
  );
}

export default App;

