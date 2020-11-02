import Axios from 'axios';
import React, { useState } from 'react';

export default function App() {
    const [moedas, setMoedas] = useState([]);
    const [moeda1, setMoeda1] = useState('');
    const [moeda2, setMoeda2] = useState('');
    

    async function buscaMoedas(){
        setMoedas(await Axios.get('http://localhost:3000/moedas/findAll'));
    }

    function converteMoedas(){
        moedas.map((moeda) => {
            if(moeda1 === moeda.nome){
                window.localStorage.setItem('siglaMoeda1', moeda.sigla);
                window.localStorage.setItem('nomeMoeda1', moeda.nome);
                window.localStorage.setItem('valorMoeda1', moeda.valor);
            }
            if(moeda2 === moeda.nome){
                window.localStorage.setItem('siglaMoeda2', moeda.sigla);
                window.localStorage.setItem('nomeMoeda2', moeda.nome);
                window.localStorage.setItem('valorMoeda2', moeda.valor);
            }
        });
        window.location.reload();
    }

    return(
        <div className="pesquisa">
            {buscaMoedas()}
            <select id="selectPrincipal" onSelect={(ev) => setMoeda1(ev.target.value)}>
                <option disabled>Selecione a moeda</option>
                {moedas.map((moeda, index) => {
                    return <option key={index}>{moeda.nome}</option>;
                })}
            </select>
            <button className="inverter-moedas">Inverter</button>
            <select id="selectSecundario" onSelect={(ev) => setMoeda2(ev.target.value)}>
                <option disabled>Selecione a moeda</option>
                {moedas.map((moeda, index) => {
                    return <option key={index}>{moeda.nome}</option>;
                })}
            </select>
            <button className="converter-moedas" onClick={() => converteMoedas()}>Converter</button>
        </div>
    );
}