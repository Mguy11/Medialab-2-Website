import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles/style.scss";

import Header from "./components/header";
import NavBar from "./components/navbar";
import Team from "./components/team";
import Development from "./components/development";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Team />
      <Development />
    </div>
  );
}

export default App;
