import React, { useState } from 'react';

export default function App() {
    const valorMoeda1 = window.localStorage.getItem('valorMoeda1');
    const valorMoeda2 = window.localStorage.getItem('valorMoeda');
    const [converte, setConvert] = useState(0);

    return(
        <div className="resultados">
            <div className="moeda-principal">
                <div className="listas">
                    <div className="left">
                        <div className="dados-moedas">
                            <h2 id="sigla-moeda-1">{window.localStorage.getItem('siglaMoeda1')}</h2>
                            <h3 id="nome-moeda-1">{window.localStorage.getItem('nomeMoeda1')}</h3>
                            <h4 id="valor-moeda-1">{valorMoeda1}</h4>
                        </div>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>5</li>
                            <li>10</li>
                            <li>100</li>
                            <li>1000</li>
                            <li>5000</li>
                            <li>10000</li>
                            <li>50000</li>
                            <li>100000</li>                     
                        </ul>
                    </div>
                    <div className="rigth">
                        <div className="dados-moedas">
                            <h2 id="sigla-moeda-2">{window.localStorage.getItem('siglaMoeda2')}</h2>
                            <h3 id="nome-moeda-2">{window.localStorage.getItem('nomeMoeda2')}</h3>
                            <h4 id="valor-moeda-2">{valorMoeda2}</h4>
                        </div>
                        <ul id="valores-convertidos">
                            <li id="1">{valorMoeda2}</li>
                            <li id="2">{valorMoeda2*2}</li>
                            <li id="5">{valorMoeda2*5}</li>
                            <li id="10">{valorMoeda2*10}</li>
                            <li id="100">{valorMoeda2*100}</li>
                            <li id="1000">{valorMoeda2*1000}</li>
                            <li id="5000">{valorMoeda2*5000}</li>
                            <li id="10000">{valorMoeda2*10000}</li>
                            <li id="50000">{valorMoeda2*50000}</li>
                            <li id="100000">{valorMoeda2*100000}</li>                     
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contas">
            <div className="valores-convertidos-unico">
                <div className="dados-moedas">
                    <h2 id="sigla-moeda-3">{window.localStorage.getItem('siglaMoeda1')}</h2>
                    <h3 id="nome-moeda-3">{window.localStorage.getItem('nomeMoeda1')}</h3>
                    <h4 id="valor-moeda-3">{valorMoeda1}</h4>
                </div>
                <div className="dados-moedas">
                    <h2 id="sigla-moeda-4">{window.localStorage.getItem('siglaMoeda2')}</h2>
                    <h3 id="nome-moeda-4">{window.localStorage.getItem('nomeMoeda2')}</h3>
                    <h4 id="valor-moeda-4">{valorMoeda2}</h4>
                </div>
            </div>
            <div>
                <label >Digite o valor que quer converter:</label>
                <input type="number" id="valor-desejado" max="999999999999999" onInput={(ev) => setConvert(ev.target.value)}/>
            </div>
            <div>
                <label >Valor convertido: </label>
                <input type="text" id="valor-convertido" value={(converte*valorMoeda2).toFixed(3)} disabled />
            </div>
        </div>
        </div>
    );
}