import React from 'react'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'
import ListadoTarea from '../tarea/ListadoTarea'
import NuevaTarea from '../tarea/NuevaTarea'

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Navbar/>
                <main>
                    <NuevaTarea/>
                    <div className="contenedor-tareas">
                        <ListadoTarea/>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos
