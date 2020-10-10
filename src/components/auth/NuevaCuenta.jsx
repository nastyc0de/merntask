import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {
    const [usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });
    const {nombre, email, password, confirmar} = usuario;
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
                <h1>Crear cuenta</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre:</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Ingrese su nombre"
                            onChange={handleChange}
                            value={nombre}
                        />
                    </div>
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
                        <label htmlFor="confirmar">Confirmar password:</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repita su password"
                            onChange={handleChange}
                            value={confirmar}
                        />
                    </div>
                    <div className="campo-form">
                        <button type='submit' className='btn btn-primario btn-block'>
                            Registrarse
                        </button>
                    </div>
                </form>
                <Link to ={'/'} className='enlace-cuenta'>
                    Tiene cuenta?
                </Link>
            </div>
        </div>
    )
}

export default NuevaCuenta
