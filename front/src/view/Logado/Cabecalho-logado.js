import React from 'react';
import {logout} from "../Inicial/auth"

export default function App() {
    
    function sair(){
        logout();
    }
    
    return(
    <div className="cabecalho">
        <div className="welcome"></div>
        <button id="btn_sair" onClick={ () => sair() }>Sair</button>
    </div>
    );
}