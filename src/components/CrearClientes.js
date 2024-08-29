import React, { useState } from "react";
import '../styles/crearclientes.css';

function CrearClientes(){
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [numeroTelefono, setnumeroTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            targetMethod: "POST",
            body: {
              cedula: cedula,
              apellido: apellido,
              nombre: nombre,
              numeroTelefono: numeroTelefono,
              direccion: direccion
            }
          };

        fetch('http://3.142.35.243:8762/ms-clientes/clientes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
        .then(response => response.json())
        .then(data => {
            setMensaje('Cliente ingresado con éxito');
            console.log('Cliente agregado:', data);
            setCedula('');
            setNombre('');
            setApellido('');
            setDireccion('');
            setnumeroTelefono('');
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
                        type="number" 
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
                        value={numeroTelefono} 
                        onChange={(e) => setnumeroTelefono(e.target.value)}
                        required />
                </div>
                <button class="button-CrC" type="submit">INGRESAR</button>
            </form>
            {mensaje && <h1>{mensaje}</h1>}
        </div>
    );
}

export default CrearClientes;