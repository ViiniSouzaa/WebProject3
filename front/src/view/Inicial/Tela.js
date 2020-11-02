import React from "react";

export default function App(props) {

  function cadastro(){
    window.location.replace("/cadastro");
  }

  function login(){
    window.location.replace("/login");
  }

  return (
    <div>
      <div className="cabecalho">
          <button id="btn_cadastro" onClick={() => cadastro()}>Cadastro</button>
          <button id="btn_login" onClick={() => login()}> Login</button>
      </div>
      <div className="corpo">
        <div className="meio">
          <div className="meio2">
            <div className="meio3">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
