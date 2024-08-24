import React, { useState } from "react";
import '../styles/datosusuario.css';

function DatosUsuario({ cliente }){

    const [codigo, setCodigo] = useState('');
    const [plan, setPlan] = useState('');
    const [precio, setPrecio] = useState('');
    const [direccion, setDireccion] = useState('');
    const [cedula, setCedula] = useState(cliente.cedula);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/usuarios', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ codigo, plan, precio, direccion, cedula }),
          })
        .then(response => response.json())
        .then(data => {
        console.log('Usuario agregado:', data);
        setCodigo('');
        setPlan('');
        setPrecio('');
        setDireccion('');
        setCedula(cliente.cedula);
      })
      .catch(error => console.error('Error agregando usuario:', error));
    };
    
    return (
        <div class="form-container-DU">
            <h2>DATOS DEL USUARIO</h2>
            <form class="form-DU" onSubmit={handleSubmit}>
                <div class="form-group-DU">
                    <label class="label-DU" for="codigo">CODIGO:</label>
                    <input 
                        class="input-DU" 
                        type="text" 
                        id="codigo" 
                        name="codigo"
                        value={codigo} 
                        onChange={(e) => setCodigo(e.target.value)}  
                        required
                    />
                </div>
                <div class="form-group-DU">
                    <label class="label-DU" for="plan">PLAN:</label>
                    <select class="select-DU" id="options" name="options" value={plan} onChange={(e) => setPlan(e.target.value)}>
                        <option value="20M" selected>20 Mbps</option>
                        <option value="30M">30 Mbps</option>
                        <option value="40M">40 Mbps</option>
                        <option value="50M">50 Mbps</option>
                    </select>
                    <label class="label-Precio-DU" for="precio">PRECIO:</label>
                    <input 
                        class="input-Precio-DU" 
                        type="text" 
                        id="precio" 
                        name="precio" 
                        value={precio} 
                        onChange={(e) => setPrecio(e.target.value)} 
                        required
                    />
                </div>
                <div class="form-group-DU">
                    <label class="label-DU" for="direccion">DIRECCIÓN:</label>
                    <input 
                        class="input-dir-DU" 
                        type="text" 
                        id="direccion" 
                        name="direccion" 
                        value={direccion} 
                        onChange={(e) => setDireccion(e.target.value)} 
                        required
                    />
                </div>
                <button class="button-DU" type="submit">INGRESAR</button>
            </form>
        </div>
    );
}

export default DatosUsuario;