import Axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function App() {
    const [moedas, setMoedas] = useState([]);
    const [moeda1, setMoeda1] = useState('');
    const [moeda2, setMoeda2] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
           const moed = await Axios.get('http://localhost:3000/moedas/findAll');
           setMoedas(moed.data)
        }
      
        
        fetchData();
        

      }, []);
    

    function converteMoedas(){
        moedas.map(async (moeda) => {
            console.log(moeda1 +' caralho de asas '+ moeda2)
            var res = await Axios.get('http://localhost:3000/moedas/findConvert?moeda1='+ moeda1 +'&moeda2=' + moeda2);
            console.log(res.data);
            if(moeda1 === moeda.nome){
                window.localStorage.setItem('siglaMoeda1', res.data.moeda1[0].sigla);
                window.localStorage.setItem('nomeMoeda1', res.data.moeda1[0].nome);
                window.localStorage.setItem('valorMoeda1', res.data.moeda1[0].valor);
            }
            if(moeda2 === moeda.nome){
                window.localStorage.setItem('siglaMoeda2',  res.data.moeda2[0].sigla);
                window.localStorage.setItem('nomeMoeda2', res.data.moeda2[0].nome);
                window.localStorage.setItem('valorMoeda2', res.data.moeda2[0].valor);
            } 
        });
        window.location.reload();
    }

    return(
        <div className="pesquisa">
            
            <select id="selectPrincipal" onChange={(ev) => setMoeda1(ev.target.value)}>
                <option disabled>Selecione a moeda</option>
                {moedas && moedas.map((moeda, index) => {
                   return <option key={index}>{moeda.nome}</option>;
                })}
            </select>
            <button className="inverter-moedas">Inverter</button>
            <select id="selectSecundario" onChange={(ev) => setMoeda2(ev.target.value)}>
                <option disabled>Selecione a moeda</option>
                { moedas && moedas.map((moeda, index) => {
                    return <option key={index}>{moeda.nome}</option>;
                })}
            </select>
            <button className="converter-moedas" onClick={() => converteMoedas()}>Converter</button>
        </div>
    );
}