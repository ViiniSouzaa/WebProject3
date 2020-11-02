import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Cadastro from "./Cadastro";
import Tela from "./Tela";
import {authCadastro, setUser } from "./auth";
import Axios from 'axios';

export default function App() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('');
    
    async function login(){
        const res = await Axios.post('http://localhost:3000/users/login', {"email":email,"password":password});
            if(res.data.auth){
                validaToken(res.data.token);
                setErro('');
            }else{
                setErro('Senha ou email incorretos')
            }      
    }

    function validaToken(token){
        if(authCadastro() === token){
            setUser(token);
            window.location.replace("/");
        }
    }

    return(
        <Tela>
            <div id="login">
                <div>
                    <label for="username">e-mail:<br/></label>
                    <input
                        type="email"
                        id="username"
                        placeholder="Insira o e-mail"
                        name="username"
                        required="required"
                        onChange={(ev) => setEmail(ev.target.value)}>
                    </input>
                </div>
                <div>
                    <label for="pass">Senha (Minimo de 8 caracteres):</label>
                    <input  type="password" 
                            id="pass" 
                            placeholder="Insira a Senha" 
                            name="password" 
                            required="required" 
                            onChange={(ev) => setPassword(ev.target.value)}
                            >
                    </input>
                    <span id="span-senha-login">{erro}</span>
                </div>
                    <button id="logar" onClick={() => login()}>Logar</button>
                    
                    <Link to="/cadastro">
                        <button id="cadastrar">Cadastrar</button>
                    </Link>
                    <Switch>
                        <Route path="/cadastro" component={Cadastro}></Route>
                    </Switch>
            </div>
        </Tela>
    );
}
