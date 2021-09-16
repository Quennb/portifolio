import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Hobbies from "./Hobbies";
import Menu from "./Menu";
import Apresentação from "./Apresentação";
import Contato from "./Contato";
import Habilidades from "./Habilidades";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/hobbies" component={Hobbies}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/apresentação" component={Apresentação}></Route>
        <Route path="/contato" component={Contato}></Route>
        <Route path="/habilidades" component={Habilidades}></Route>
      </Switch>
    </BrowserRouter>
  );
}
