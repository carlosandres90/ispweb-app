import React, { useState } from "react";
import '../styles/crearplan.css';

function CrearPlan(){
    const [anchobanda, setAnchobanda] = useState('');
    const [precio, setPrecio] = useState('');
    const [estado, setEstado] = useState('');
    const [mensaje, setMensaje] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/planes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ anchobanda, precio, estado }),
          })
        .then(response => response.json())
        .then(data => {
            setMensaje('Plan ingresado con éxito');
            console.log('Plan agregado:', data);
            setAnchobanda('');
            setPrecio('');
            setEstado('');
        })
      .catch(error => console.error('Error agregando Plan:', error));
    };

    return (
        <div class="form-container-CrP">
            <form class="form-CrP" onSubmit={handleSubmit}>
                <div class="form-group-CrP">
                    <label class="label-CrP" for="ancho-banda">ANCHO DE BANDA:</label>
                    <input class="input-CrP" 
                    type="text" 
                    id="ancho-banda" 
                    name="ancho-banda" 
                    value= {anchobanda}
                    onChange={(e) => setAnchobanda(e.target.value)}
                    required 
                />
                </div>
                <div class="form-group-CrP">
                    <label class="label-CrP" for="precio">PRECIO:</label>
                    <input class="input-CrP" 
                    type="text" 
                    id="precio" 
                    name="precio" 
                    value= {precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required />
                </div>
                <div class="form-group-CrP">
                    <label class="label-CrP" for="estado">ESTADO:</label>
                    <select class="select-estado-CrP" id="estado" name="estado">
                        <option value="ACTIVO">ACTIVO</option>
                        <option value="INACTIVO">INACTIVO</option>
                   
                    value= {estado}
                    onChange={(e) => setEstado(e.target.value)}
                    </select>
                </div>                               
                <button class="button-CrP" type="submit">CREAR</button>
            </form>
            {mensaje && <h1>{mensaje}</h1>}
        </div>
    );
}

export default CrearPlan;