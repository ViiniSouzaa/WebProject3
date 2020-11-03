import React, {useState } from 'react';
import Tela from "./Tela"
import axios from "axios"
import * as validatorEmail from 'email-validator';

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroPassword, setErroPassword] = useState('');
    const [emailValido, setEmailValido] = useState(false);
    const [senhaValida, setSenhaValida] = useState(false);
    
    
    async function cadastrar(){
        if(emailValido && senhaValida){
            const res = await axios.post('http://localhost:3000/users/register?email=' + email + '&password=' + password);
            if(res.data.insert){
                console.log(res.data.msg);
                window.location.replace('/login');
            }else{
                console.log(res.data.msg);
            }
        }
        
    }

    function validaEmail(){
        if(validatorEmail.validate(email)){
            setEmailValido(true);
            setErroEmail('')
        }else{
            setEmailValido(false);
            setErroEmail('Digite um email valido');
        }
    }

    function validaPassword(passwordDigitado){
        setPassword2(passwordDigitado);
        if(password === password2){
            setSenhaValida(true);
            setErroPassword('');
        }else{
            setSenhaValida(false);
            setErroPassword('As senhas nao coincidem');
            console.log("senha1: " + password + " senha2: " + password2);
        }
    }

    return(
        <Tela>
            <div id="cadastro">
                <div>
                    <label htmlFor="username-cadastro">e-mail:<br/></label>
                    <input
                        type="email"
                        id="username-cadastro"
                        placeholder="Insira o e-mail"
                        name="username"
                        required="required"
                        onChange={(ev) => setEmail(ev.target.value)}
                        onBlur={() => validaEmail()}>
                    </input>
                    <span>{erroEmail}</span>
                </div>
                <div>
                    <label htmlFor="pass">Senha (Minimo de 8 caracteres):</label>
                    <input  type="password" 
                            id="pass-cadastro" 
                            placeholder="Insira a Senha" 
                            name="password" 
                            required="required"
                            onInput={(ev) => setPassword1(ev.target.value)}>
                    </input>
                </div>
                <div>
                    <label htmlFor="pass2">Confime a senha:</label>
                    <input 
                    type="password" 
                    id="pass2" 
                    placeholder="Insira a Senha" 
                    name="password" 
                    required="required"
                    onChange={(ev) => validaPassword(ev.target.value)}/>
                    
                </div>
                <span>{erroPassword}</span>
                <button id="btn-cadastrar" onClick={() => cadastrar()}>Cadastrar</button>
            </div>
        </Tela>
    );
}
