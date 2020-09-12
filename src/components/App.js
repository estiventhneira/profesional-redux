import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Usuarios from "./usuarios/index";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path="/" component={Usuarios} />
    </BrowserRouter>
  );
}

export default App;
