import React, { useState } from "react";
import '../styles/crearplan.css';

const apiUrl = process.env.REACT_APP_API_URL

function CrearPlan(){
    const [anchobanda, setAnchobanda] = useState('');
    const [precio, setPrecio] = useState('');
    const [mensaje, setMensaje] = useState('');

    const validarEntrada = () => {
        let errores = [];

        if (anchobanda.trim() !== anchobanda) {
            errores.push("El ancho de banda no debe tener espacios al inicio o al final.");
        }

        // Validar precio (solo números con hasta 2 decimales)
        if (!/^\d+(\.\d{1,2})?$/.test(precio)) {
            errores.push("El precio debe ser un número decimal válido con hasta 2 decimales.");
        }

        // Validar ancho de banda (sin caracteres especiales peligrosos)
        if (!/^[a-zA-Z0-9\s,.-]+$/.test(anchobanda)) {
            errores.push("La dirección contiene caracteres inválidos.");
        }

        if (errores.length > 0) {
            alert("Errores en el formulario:\n" + errores.join("\n"));
        }

        return errores.length === 0;
    };

    const limpiarEntrada = (str) => {
        return str.replace(/[<>{}]/g, ""); // Elimina caracteres potencialmente peligrosos
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarEntrada()) {
            return;
        }

        const dataI = {
            targetMethod: "POST",
            body: {
                anchoBanda: limpiarEntrada(anchobanda),
                precio: limpiarEntrada(precio)
            }
          };


        fetch(`${apiUrl}/ms-planes/planes`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataI),
          })
        .then(response => response.json())
        .then(data => {
            setMensaje('Plan ingresado con éxito');
            console.log('Plan agregado:', data);
            setAnchobanda('');
            setPrecio('');
        })
      .catch(error => console.error('Error agregando Plan:', error));
    };

    return (
        <div className="form-container-CrP">
            <form className="form-CrP" onSubmit={handleSubmit}>
                <div className="form-group-CrP">
                    <label className="label-CrP" htmlFor="ancho-banda">ANCHO DE BANDA:</label>
                    <input className="input-CrP" 
                    type="text" 
                    id="ancho-banda" 
                    name="ancho-banda" 
                    value= {anchobanda}
                    onChange={(e) => setAnchobanda(e.target.value)}
                    required 
                />
                </div>
                <div className="form-group-CrP">
                    <label className="label-CrP" htmlFor="precio">PRECIO:</label>
                    <input className="input-CrP" 
                    type="number" 
                    id="precio" 
                    name="precio" 
                    value= {precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required />
                </div>         
                <button className="button-CrP" type="submit">CREAR</button>
            </form>
            {mensaje && <h1>{mensaje}</h1>}
        </div>
    );
}

export default CrearPlan;