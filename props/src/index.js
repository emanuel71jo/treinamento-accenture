import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App
      name="João Emanuel"
      primeira="Esta props será renderizada no App.js"
      segunda="Esta props será renderizada no ComponenteFilho.js"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
