import React, { useEffect, useState } from "react";
import '../styles/datosclientes.css';

const DatosClientes = ({ cliente }) => {
    
    const [direccion, setDireccion] = useState('');
    const [numeroTelefono, setnumeroTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (cliente) {
            setDireccion(cliente.direccion);
            setnumeroTelefono(cliente.numeroTelefono);
        }
    }, [cliente]);

    const handleUpdate = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`http://localhost:3001/clientes/${cliente.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ direccion, numeroTelefono }),
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
            <div class="form-container-CnC">
                <h2> DATOS CLIENTE </h2>
                <form class="form-CnC" onSubmit={handleUpdate}>
                    <div class="form-group-CnC">
                        <label class="label-CnC" for="apellidos">APELLIDOS:</label>
                        <input 
                            class="input-CnC" 
                            type="text" 
                            id="apellidos" 
                            name="apellidos" 
                            value={cliente.apellido}  
                            required 
                            disabled
                        />
                    </div>
                    <div class="form-group-CnC">
                        <label class="label-CnC" for="nombres">NOMBRES:</label>
                        <input 
                            class="input-CnC" 
                            type="text" 
                            id="nombres" 
                            name="nombres" 
                            value={cliente.nombre} 
                            required 
                            disabled
                        />
                    </div>
                    <div class="form-group-CnC">
                        <label class="label-CnC" for="cedula">CÉDULA:</label>
                        <input 
                            class="input-CnC" 
                            type="text" 
                            id="cedula" 
                            name="cedula" 
                            value={cliente.cedula} 
                            required 
                            disabled
                        />
                    </div>
                    <div class="form-group-CnC">
                        <label class="label-CnC" for="direccion">DIRECCIÓN:</label>
                        <input 
                            class="input-CnC" 
                            type="text" 
                            id="direccion" 
                            name="direccion" 
                            value={direccion} 
                            onChange={(e) => setDireccion(e.target.value)} 
                            required 
                        />
                    </div>
                    <div class="form-group-CnC">
                        <label class="label-CnC" for="telefono">TELÉFONO:</label>
                        <input 
                            class="input-CnC" 
                            type="tel" 
                            id="telefono" 
                            name="telefono" 
                            value={numeroTelefono} 
                            onChange={(e) => setnumeroTelefono(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="button-group">
                        <button class="button-CnC" type="submit">ACTUALIZAR</button>
                    </div>
                </form>
                {mensaje && <p>{mensaje}</p>}
            </div>
        );
}

export default DatosClientes;