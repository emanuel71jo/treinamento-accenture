import "./App.css";
import ComponentePai from "./components/ComponentePai";

function App(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <strong>{props.primeira}</strong>
      <ComponentePai
        terceira="Esta props será renderizada no ComponentePai"
        quarta={props.segunda}
      />
    </div>
  );
}

export default App;
