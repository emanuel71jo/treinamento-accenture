import { useState } from "react";
import "./App.css";
import { ComponeneteFilho } from "./components/ComponenteFilho";

function App() {
  const [estadoPai, setEstadoPai] = useState("não clicou");
  const [estadoFilho, setEstadoFilho] = useState("não clicou");

  function handleClick() {
    setEstadoFilho("clicou");
  }

  return (
    <div className="componente-pai">
      <h1>botão localizado componente filho {estadoPai}</h1>
      <button onClick={handleClick}>
        clique aqui para alterar o componente pai
      </button>
      <ComponeneteFilho setEstadoPai={setEstadoPai} estadoFilho={estadoFilho} />
    </div>
  );
}

export default App;
