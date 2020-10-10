import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    const [usuario, setUsuario] = useState({
        email:'',
        password:''
    });
    const {email, password} = usuario;
    const handleChange = (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }
    // cuando el usuario quiere iniciar sesion
    const handleSubmit = e => {
        e.preventDefault();

        // validar que no haya campos vacios

        // pasarlo al action
    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingrese su email"
                            onChange={handleChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingrese su password"
                            onChange={handleChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <button type='submit' className='btn btn-primario btn-block'>
                            Iniciar Sesion
                        </button>
                    </div>
                </form>
                <Link to ={'/nuevaCuenta'} className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    )
}

export default Login
