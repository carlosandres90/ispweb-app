import React, { useState } from "react";
import '../styles/crearclientes.css';

function CrearClientes(){
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [numeroTelefono, setnumeroTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const validarEntrada = () => {
        let errores = [];

        if (nombre.trim() !== nombre) {
            errores.push("El nombre no debe tener espacios al inicio o al final.");
        }
        if (apellido.trim() !== apellido) {
            errores.push("El apellido no debe tener espacios al inicio o al final.");
        }
        if (direccion.trim() !== direccion) {
            errores.push("La dirección no debe tener espacios al inicio o al final.");
        }
        if (numeroTelefono.trim() !== numeroTelefono) {
            errores.push("El número de teléfono no debe tener espacios al inicio o al final.");
        }

        // Validar cédula (solo números, longitud mínima de 10 caracteres)
        if (!/^\d{10}$/.test(cedula)) {
            errores.push("La cédula debe contener exactamente 10 dígitos.");
        }

        // Validar nombre y apellido (solo letras y espacios)
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
            errores.push("El nombre solo debe contener letras y espacios.");
        }
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
            errores.push("El apellido solo debe contener letras y espacios.");
        }

        // Validar dirección (sin caracteres especiales peligrosos)
        if (!/^[a-zA-Z0-9\s,.\-áéíóúÁÉÍÓÚñÑ]+$/.test(direccion)) { 
            errores.push("La dirección contiene caracteres inválidos.");
        }

        // Validar número de teléfono (solo números)
        if (!/^\d+$/.test(numeroTelefono)) {
            errores.push("El número de teléfono solo debe contener números.");
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
            setMensaje("Por favor, corrige los errores antes de enviar.");
            return;
        }

        const data = {
            targetMethod: "POST",
            body: {
                cedula: limpiarEntrada(cedula),
                apellido: limpiarEntrada(apellido),
                nombre: limpiarEntrada(nombre),
                numeroTelefono: limpiarEntrada(numeroTelefono),
                direccion: limpiarEntrada(direccion)
            }
          };

        fetch('/api/clientes/cliente', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
        .then(response => response.json())
        .then(data => {
            setMensaje('Cliente ingresado con éxito');
            setCedula('');
            setNombre('');
            setApellido('');
            setDireccion('');
            setnumeroTelefono('');
        })
      .catch(error => console.error('Error agregando cliente:', error));
    };

    return (
        <div className="form-container-CrC">
            <form className="form-CrC" onSubmit={handleSubmit}>
                <div className="form-group-CrC">
                    <label className="label-CrC" htmlFor="apellidos">APELLIDOS:</label>
                    <input 
                        className="input-CrC" 
                        type="text" 
                        id="apellidos" 
                        name="apellidos" 
                        value={apellido} 
                        onChange={(e) => setApellido(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group-CrC">
                    <label className="label-CrC" htmlFor="nombres">NOMBRES:</label>
                    <input 
                        className="input-CrC" 
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group-CrC">
                    <label className="label-CrC" htmlFor="cedula">CÉDULA:</label>
                    <input 
                        className="input-CrC" 
                        type="number" 
                        id="cedula" 
                        name="cedula"
                        value={cedula} 
                        onChange={(e) => setCedula(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group-CrC">
                    <label className="label-CrC" htmlFor="direccion">DIRECCIÓN:</label>
                    <input 
                        className="input-CrC" 
                        type="text" 
                        id="direccion"
                        name="direccion"
                        value={direccion} 
                        onChange={(e) => setDireccion(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group-CrC">
                    <label className="label-CrC" htmlFor="telefono">TELÉFONO:</label>
                    <input 
                        className="input-CrC" 
                        type="tel"
                        id="telefono" 
                        name="telefono" 
                        value={numeroTelefono} 
                        onChange={(e) => setnumeroTelefono(e.target.value)}
                        required />
                </div>
                <button className="button-CrC" type="submit">INGRESAR</button>
            </form>
            {mensaje && <h1>{mensaje}</h1>}
        </div>
    );
}

export default CrearClientes;