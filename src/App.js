import React from "react";
import "./App.css";

import logo from "./assets/imgs/logo-unifeg.png";

import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Centro Universitário da Fundação Educacional Guaxupé - UNIFEG" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
