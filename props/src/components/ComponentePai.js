import ComponenteFilho from "./ComponenteFilho";

export function ComponentePai(props) {
  return (
    <div>
      <h2>{props.terceira}</h2>
      <ComponenteFilho
        quinta="Esta props será renderizada no ComponenteFilho.js"
        sexta={props.quarta}
      />
    </div>
  );
}
