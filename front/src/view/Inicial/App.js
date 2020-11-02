import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import React from 'react';
import '../../App.css';
import Tela from "./Tela";
import Tela2 from "../Logado/Tela2"
import { auth } from "./auth";
import Login from "./Login";
import Cadastro from "./Cadastro"
import TelaInicial from "./TelaInicial";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() =>
            !auth() ? <Tela /> : <Redirect to="/logado" />
          }
        />
        <Route
          exact
          path="/logado"
          component={() =>
            auth() ? <Tela2 /> : <Redirect to="/inicial" />
          }
        />
        <Route path="/inicial" component={TelaInicial} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
    </Router>
  );
}
