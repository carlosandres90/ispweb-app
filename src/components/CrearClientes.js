import React, { useState } from "react";
import '../styles/crearclientes.css';

function CrearClientes(){
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/clientes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cedula, nombre, apellido, direccion, telefono }),
          })
        .then(response => response.json())
        .then(data => {
            setMensaje('Cliente ingresado con éxito');
            console.log('Cliente agregado:', data);
            setCedula('');
            setNombre('');
            setApellido('');
            setDireccion('');
            setTelefono('');
        })
      .catch(error => console.error('Error agregando cliente:', error));
    };

    return (
        <div class="form-container-CrC">
            <form class="form-CrC" onSubmit={handleSubmit}>
                <div class="form-group-CrC">
                    <label class="label-CrC" for="apellidos">APELLIDOS:</label>
                    <input 
                        class="input-CrC" 
                        type="text" 
                        id="apellidos" 
                        name="apellidos" 
                        value={apellido} 
                        onChange={(e) => setApellido(e.target.value)} 
                        required 
                    />
                </div>
                <div class="form-group-CrC">
                    <label class="label-CrC" for="nombres">NOMBRES:</label>
                    <input 
                        class="input-CrC" 
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}
                        required 
                    />
                </div>
                <div class="form-group-CrC">
                    <label class="label-CrC" for="cedula">CÉDULA:</label>
                    <input 
                        class="input-CrC" 
                        type="text" 
                        id="cedula" 
                        name="cedula"
                        value={cedula} 
                        onChange={(e) => setCedula(e.target.value)}
                        required 
                    />
                </div>
                <div class="form-group-CrC">
                    <label class="label-CrC" for="direccion">DIRECCIÓN:</label>
                    <input 
                        class="input-CrC" 
                        type="text" 
                        id="direccion"
                        name="direccion"
                        value={direccion} 
                        onChange={(e) => setDireccion(e.target.value)}
                        required 
                    />
                </div>
                <div class="form-group-CrC">
                    <label class="label-CrC" for="telefono">TELÉFONO:</label>
                    <input 
                        class="input-CrC" 
                        type="tel"
                        id="telefono" 
                        name="telefono" 
                        value={telefono} 
                        onChange={(e) => setTelefono(e.target.value)}
                        required />
                </div>
                <button class="button-CrC" type="submit">INGRESAR</button>
            </form>
            {mensaje && <h1>{mensaje}</h1>}
        </div>
    );
}

export default CrearClientes;