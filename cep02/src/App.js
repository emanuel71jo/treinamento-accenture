import { useState } from "react";
import "./App.css";
import { api } from "./services/api";

function App(props) {
  const [data, setData] = useState({});

  function handleTextChange(event) {
    event.preventDefault();
    api
      .get(`/${event.target.value}}/json/`)
      .then((response) => setData(response.data));
  }

  return (
    <div>
      <strong>Olá, {props.name}</strong>
      <div>
        Digite o CEP: <input type="text" onChange={handleTextChange} />
        {Object.entries(data).map((values, key) => (
          <h2 key={key}>
            <strong>{values[0]}:</strong>
            {values[1]}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default App;
