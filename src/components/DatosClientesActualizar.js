import React, { useEffect, useState } from "react";
import '../styles/datosclientes.css';

const apiUrl = process.env.REACT_APP_API_URL


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

                const dataI = {
                    targetMethod: "GET",
                };

                // Realizar la consulta a la API usando la cédula
                const response = await fetch(`${apiUrl}/ms-clientes/clientes/${usuario.cedula}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataI),
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
        <div className="form-container-CnC">
            <h2>DATOS DEL CLIENTE</h2>
            {mensaje && <p>{mensaje}</p>}
            {cliente ? (
            <form className="form-CnC">
                <div className="form-group-CnC">
                    <label className="label-CnC" htmlFor="apellidos">APELLIDOS:</label>
                    <input className="input-CnC" type="text" id="apellidos" name="apellidos" value={cliente.apellido}  required disabled/>
                </div>
                <div className="form-group-CnC">
                    <label className="label-CnC" htmlFor="nombres">NOMBRES:</label>
                    <input className="input-CnC" type="text" id="nombres" name="nombres" value={cliente.nombre} required disabled/>
                </div>
                <div className="form-group-CnC">
                    <label className="label-CnC" htmlFor="cedula">CÉDULA:</label>
                    <input className="input-CnC" type="text" id="cedula" name="cedula" value={cliente.cedula} required disabled/>
                </div>
                <div className="form-group-CnC">
                    <label className="label-CnC" htmlFor="direccion">DIRECCIÓN:</label>
                    <input className="input-CnC" type="text" id="direccion" name="direccion" value={cliente.direccion} required disabled/>
                </div>
                <div className="form-group-CnC">
                    <label className="label-CnC" htmlFor="telefono">TELÉFONO:</label>
                    <input className="input-CnC" type="tel" id="telefono" name="telefono" value={cliente.numeroTelefono} required disabled/>
                </div>
            </form>
            ) : (<p>No se ha encontrado al cliente.</p>
            )}
        </div>
    );
};

export default DatosClientesActualizar;