import React, { useState } from "react";
import {useAuth} from '../context/AuthContext'
import { Container } from "@mui/material";

import '../App.css';

const LoginPage = () => {
    const  {login, signup, errorSes} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const saveEmail = (email) => {
        setEmail(email)
    }
    const savePassword = (password) => {
        setPassword(password)
    }

    const createAccount = () => {
        signup(email, password)
    }

    const loginSession = () => {
        login(email, password)
    }

    return (
        <div className="containerStyle">
                <Container>
                    <div>
                        <div >
                         <p className='parStyle'>Complete el siguiente formulario de Registro: </p>
                        </div>
                        <div className="wrapper">
                            <div className="elem-group">
                                <label>Direccion de email: </label>
                            </div>
                            <div className="elem-group">
                                <input type="email" placeholder="mail@email.com" required
                                    onChange={(e) => saveEmail(e.target.value)} />
                            </div>
                            <div className="elem-group">
                                <label >Password: </label>
                            </div>
                            <div className="elem-group">
                                <input type="password" placeholder="password"
                                    required onChange={(e) => savePassword(e.target.value)} />
                            </div>
                            <button  onClick={createAccount}>Crear Cuenta</button>
                            <button  onClick={loginSession}>Iniciar Sesión</button>
                        </div>
                    </div>
            
               {
                <div className="containerStyle">
                   { errorSes &&
                    <p className='parStyle' >Error detectado: {errorSes}</p>
                   }
                </div>
              }
            </Container>
        </div>
    )
}

export default LoginPage