import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((oldValue) => oldValue + 1);

  return (
    <div>
      <p>Você clicou {count} vez</p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}

export default App;
