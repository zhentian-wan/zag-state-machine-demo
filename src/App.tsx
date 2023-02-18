import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div data-part="container">
        <label>Enter verification</label>
        <div data-part="input-group">
          <input data-part="input" />
          <input data-part="input" />
          <input data-part="input" />
          <input data-part="input" />
        </div>
      </div>
    </div>
  );
}

export default App;
