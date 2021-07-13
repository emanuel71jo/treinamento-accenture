import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  state = {
    text: "Turma ReactJS",
  };

  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleClick() {
    alert("Clicou aqui");
  }

  render() {
    return (
      <div>
        <h1>Hello World! {this.props.name}</h1>
        <h2>{this.state.text}</h2>
        <input type="text" onChange={this.handleTextChange} />
        <button onClick={this.handleClick.bind(this)}>Exibir Alerta</button>
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
