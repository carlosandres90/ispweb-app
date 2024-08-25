import React, { useEffect, useState } from "react";
import '../styles/datosclientes.css';


const DatosClientesActualizar = ({ usuario }) => {

    const [cliente, setCliente] = useState(null);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        const consultarClientePorCedula = async () => {
            try {
                // Asegúrate de que la cédula esté disponible
                if (!usuario || !usuario.cedula) {
                    setMensaje('Cédula no disponible');
                    return;
                }

                // Realizar la consulta a la API usando la cédula
                const response = await fetch('http://localhost:3001/clientes/buscar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({cedula: usuario.cedula}),
                });

                if (!response.ok) {
                    throw new Error('Error al consultar el cliente');
                }

                const data = await response.json();
                setCliente(data);
                
            } catch (error) {
                console.error('Error:', error);
                setMensaje('Error al consultar el cliente');
            }
        };

        consultarClientePorCedula();
    }, [usuario]);

    return (
        <div class="form-container-CnC">
            <h2>DATOS DEL CLIENTE</h2>
            {mensaje && <p>{mensaje}</p>}
            {cliente ? (
            <form class="form-CnC">
                <div class="form-group-CnC">
                    <label class="label-CnC" for="apellidos">APELLIDOS:</label>
                    <input class="input-CnC" type="text" id="apellidos" name="apellidos" value={cliente.apellido}  required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="nombres">NOMBRES:</label>
                    <input class="input-CnC" type="text" id="nombres" name="nombres" value={cliente.nombre} required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="cedula">CÉDULA:</label>
                    <input class="input-CnC" type="text" id="cedula" name="cedula" value={cliente.cedula} required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="direccion">DIRECCIÓN:</label>
                    <input class="input-CnC" type="text" id="direccion" name="direccion" value={cliente.direccion} required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="telefono">TELÉFONO:</label>
                    <input class="input-CnC" type="tel" id="telefono" name="telefono" value={cliente.telefono} required disabled/>
                </div>
            </form>
            ) : (<p>No se ha encontrado al cliente.</p>
            )}
        </div>
    );
};

export default DatosClientesActualizar;