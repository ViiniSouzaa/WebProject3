import React from 'react';
import CabecalhoLogado from "./Cabecalho-logado"
import Pesquisa from "./Pesquisa";
import Resultados from "./Resultados";

export default function App() {
    return(
        <div>
            <CabecalhoLogado />
            <Pesquisa />
            <Resultados />
            
        </div>
        
    );
}