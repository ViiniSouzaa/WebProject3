import React from "react";
import Tela from "./Tela";

export default function App() {
  return (
    <Tela>
      <div id="tela_inicial">
        <h1 className="bem-vindo-h1">Bem-Vindo</h1>
        <h2 className="meio-h2">Projeto da disciplina de Programação Web</h2>
        <h4 className="meio-h4">Faça login ou se cadastre para continuar</h4>
      </div>
    </Tela>
  );
}