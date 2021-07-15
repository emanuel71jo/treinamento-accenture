import { useToogle } from "../contexts/ToggleProvider";

export function ComponenteFilho() {
  const { estadoFilho, handleClickEstadoFilho } = useToogle();

  return (
    <div>
      <div>
        <h1>Componente Filho</h1>
        <button onClick={handleClickEstadoFilho}>Clique aqui</button>
        {estadoFilho && <p>aberto</p>}
      </div>
    </div>
  );
}
