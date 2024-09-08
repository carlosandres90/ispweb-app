import React, { useEffect, useState } from "react";
import '../styles/datosclientes.css';

const apiUrl = process.env.REACT_APP_API_URL

const DatosClientes = ({ cliente }) => {
    
    const [direccion, setDireccion] = useState('');
    const [numeroTelefono, setnumeroTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const validarEntrada = () => {
        let errores = [];

        if (direccion.trim() !== direccion) {
            errores.push("La dirección no debe tener espacios al inicio o al final.");
        }
        if (numeroTelefono.trim() !== numeroTelefono) {
            errores.push("El número de teléfono no debe tener espacios al inicio o al final.");
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

    useEffect(() => {
        if (cliente) {
            setDireccion(cliente.direccion);
            setnumeroTelefono(cliente.numeroTelefono);
            setMensaje('');
        }
    }, [cliente]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!validarEntrada()) {
            return;
        }

        const dataI = {
            targetMethod: "PUT",
            body: {
                apellido: cliente.apellido,
                nombre: cliente.nombre,
                direccion: limpiarEntrada(direccion), 
                numeroTelefono: limpiarEntrada(numeroTelefono)
            }
          };
    
        try {
          const response = await fetch(`${apiUrl}/ms-clientes/clientes/${cliente.cedula}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataI),
          });
    
          if (!response.ok) {
            throw new Error('Error al actualizar el cliente');
          }
    
          const updatedCliente = await response.json();
          setMensaje('Cliente actualizado con éxito');
          console.log('Cliente actualizado:', updatedCliente);
        } catch (error) {
          setMensaje('Error al actualizar el cliente');
          console.error('Error:', error);
        }
      };

    
        return (
            <div className="form-container-CnC">
                <h2> DATOS CLIENTE </h2>
                <form className="form-CnC" onSubmit={handleUpdate}>
                    <div className="form-group-CnC">
                        <label className="label-CnC" htmlFor="apellidos">APELLIDOS:</label>
                        <input 
                            className="input-CnC" 
                            type="text" 
                            id="apellidos" 
                            name="apellidos" 
                            value={cliente.apellido}  
                            required 
                            disabled
                        />
                    </div>
                    <div className="form-group-CnC">
                        <label className="label-CnC" htmlFor="nombres">NOMBRES:</label>
                        <input 
                            className="input-CnC" 
                            type="text" 
                            id="nombres" 
                            name="nombres" 
                            value={cliente.nombre} 
                            required 
                            disabled
                        />
                    </div>
                    <div className="form-group-CnC">
                        <label className="label-CnC" htmlFor="cedula">CÉDULA:</label>
                        <input 
                            className="input-CnC" 
                            type="text" 
                            id="cedula" 
                            name="cedula" 
                            value={cliente.cedula} 
                            required 
                            disabled
                        />
                    </div>
                    <div className="form-group-CnC">
                        <label className="label-CnC" htmlFor="direccion">DIRECCIÓN:</label>
                        <input 
                            className="input-CnC" 
                            type="text" 
                            id="direccion" 
                            name="direccion" 
                            value={direccion} 
                            onChange={(e) => setDireccion(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group-CnC">
                        <label className="label-CnC" htmlFor="telefono">TELÉFONO:</label>
                        <input 
                            className="input-CnC" 
                            type="tel" 
                            id="telefono" 
                            name="telefono" 
                            value={numeroTelefono} 
                            onChange={(e) => setnumeroTelefono(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="button-group">
                        <button className="button-CnC" type="submit">ACTUALIZAR</button>
                    </div>
                    {mensaje && <h2 className="error-CnC">{mensaje}</h2>}
                </form>
            </div>
        );
}

export default DatosClientes;