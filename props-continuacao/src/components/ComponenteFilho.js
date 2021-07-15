export function ComponeneteFilho(props) {
  function handleClick() {
    props.setEstadoPai("clicou");
  }

  return (
    <div className="componente-filho">
      <h1>botão localizado componente pai {props.estadoPai}</h1>
      <button onClick={handleClick}>
        clique aqui para alterar o componente filho
      </button>
    </div>
  );
}
