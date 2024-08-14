import {FaUser, FaLock} from 'React-icons/fa';

import { useState } from 'react';

import "./login.css"

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert("Enviando dados: " + username + "-" + password)
    };

  return (
    <div className='Container'>
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div>
                <input 
                    type="email" 
                    placeholder='E-mail'
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <FaUser className='icon' />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder='Senha' 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className='icon' />
            </div>

            <div className="recall-forget">
                <label >
                    <input type="checkbox" />
                    Lembrar de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>
            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Não tem uma conta? <a href="#">Registre-se</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login
