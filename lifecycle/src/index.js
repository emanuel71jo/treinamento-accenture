import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  state = {
    clicked: "Ainda não clicou",
  };

  componentDidMount() {
    console.log("[App] - Apareceu na tela");
  }

  handleClick() {
    this.setState({
      clicked: "Clicou",
    });
  }

  render() {
    console.log("[App] - Renderizou");

    return (
      <div>
        <h1>
          Olá, {this.props.name}, você {this.state.clicked}
        </h1>
        <button onClick={this.handleClick.bind(this)}>Clique aqui</button>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App name="João Emanuel" />
  </React.StrictMode>,
  document.getElementById("root")
);
