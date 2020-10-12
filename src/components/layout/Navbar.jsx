import React from 'react'

const Navbar = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Andres</span> </p>
            <nav className="nav-principal">
                <a href="#!">Cerrar Sesion</a>
            </nav>
        </header>
    )
}

export default Navbar
