import React from "react";

import "./styles/style.scss";

import Header from "./components/header";
import NavBar from "./components/navbar";
import Team from "./components/team";
import Development from "./components/development";
import Design from "./components/design";
import Concepts from "./components/concepts"

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Team />
      <Concepts />
      <Design />
      <Development />
    </div>
  );
}

export default App;
