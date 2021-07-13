import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    cep: {},
  };

  handleTextChange(event) {
    fetch(`https://viacep.com.br/ws/${event.target.value}}/json/`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          cep: response,
        });
      });
  }

  render() {
    return (
      <div>
        <strong>Olá, {this.props.name}</strong>
        <div>
          Digite o CEP:{" "}
          <input type="text" onChange={this.handleTextChange.bind(this)} />
          {Object.entries(this.state.cep).map((values, key) => (
            <h2 key={key}>
              <strong>{values[0]}:</strong>
              {values[1]}
            </h2>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
