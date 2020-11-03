import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import React from 'react';
import '../../App.css';
import Tela from "./Tela";
import Tela2 from "../Logado/Tela2";
import { admin, auth } from "./auth";
import Login from "./Login";
import Cadastro from "./Cadastro";
import TelaInicial from "./TelaInicial";
import TelaAdmin from '../Logado/TelaAdmin';
import Pesquisa from '../Logado/Pesquisa';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() =>
            !auth()   ? <Tela /> : <Redirect to="/logado" />
          }
        />
        <Route
          exact
          path="/logado"
          component={() =>
            auth() && !admin() ? <Tela2 /> : <Redirect to="/admin" />
          }
        />
        <Route
          exact
          path="/admin"
          component={() =>
            auth() && admin() ? <TelaAdmin /> : <Redirect to="/inicial" />
          }
        />
          <Route path="/pesquisa" component={Pesquisa} />
        <Route path="/inicial" component={TelaInicial} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
    </Router>
  );
}
