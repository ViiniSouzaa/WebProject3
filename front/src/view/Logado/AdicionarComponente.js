import Axios from 'axios';
import React, { useState } from 'react';


export default function App() {
    const [sigla, setSigla] = useState('');
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState(0);

    async function cadastrar(){
        var res = Axios.post('http://localhost:3000/moedas/addMoeda?sigla=' + sigla + '&nome=' + nome + '&valor=' + valor);
        console.log(res.msg);
    }

    return(
        <div>
            <div>
                <label htmlFor="sigla">SIGLA<br/></label>
                <input
                    type="text"
                    id="sigla"
                    placeholder="Insira a sigla"
                    name="Sigla"
                    required="required"
                    onChange={(ev) => setSigla(ev.target.value)}>
                </input>
            </div>
            <div>
                <label htmlFor="nome">NOME</label>
                <input  type="text" 
                        id="nome" 
                        placeholder="Insira o Nome" 
                        name="nome" 
                        required="required"
                        onChange={(ev) => setNome(ev.target.value)}>
                </input>
            </div>
            <div>
                <label htmlFor="valor">Confime a senha:</label>
                <input 
                type="number" 
                step="0.1"
                id="valor" 
                placeholder="Insira o valor" 
                name="valor" 
                required="required"
                onChange={(ev) => setValor(ev.target.value)}/>
            </div>
            <button id="btn-cadastrar" onClick={() => cadastrar()}>Cadastrar</button>
        </div>
    );
}