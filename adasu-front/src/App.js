import React, { Component } from "react";
import ReactDOM from "react-dom";
import ComponenteBasico from "./components/ComponeneteBasico";

class App extends Component {
  render() {
    return (
      <>
        <div className="jumbotron">
          <ComponenteBasico />
        </div>
      </>
    );
  }
}

export default App;
