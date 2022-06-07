import React from "react";
import ReactDOM from "react-dom";
import { Ability } from "@casl/ability";
import Header from "./layout/header";
import Content from "./layout/content";
import { Container, Row } from "reactstrap";
import { BrowserRouter } from "react-router-dom";
import { AbilityContext } from "./component/Abilities";
import "./styles.css";

const ability = new Ability();

function App() {
  return (
    <AbilityContext.Provider value={ability}>
      <BrowserRouter>
        <div className="App">
          <Header ability={ability} />
          <Content />
        </div>
      </BrowserRouter>
    </AbilityContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
