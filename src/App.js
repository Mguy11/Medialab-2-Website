import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles/style.scss";

import Header from "./components/header";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
