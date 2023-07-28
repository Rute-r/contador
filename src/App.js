import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>{count}</p>
      <div className="app-buttons">
        <button className="cor1" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="cor2" onClick={() => setCount(0)}>
          0
        </button>
        <button className="cor3" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
