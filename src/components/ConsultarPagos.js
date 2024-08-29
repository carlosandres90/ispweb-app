import React, { useState, useEffect } from "react";
import '../styles/consultarpago.css';

function ConsultarPago({ usuario }) {
    const [pagos, setPagos] = useState([]);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        const fetchPagos = async () => {
            if (!usuario.codigo) {
                setPagos([]); // Limpia la tabla si no hay código de usuario
                setMensaje('No se ha proporcionado un código de usuario.');
                return;
            }

            try {
                const response = await fetch('http://192.168.100.141:3001/pagos/buscar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ codigo: usuario.codigo }),
                });

                if (!response.ok) {
                    throw new Error('CLIENTE NO ENCONTRADO');
                }

                const data = await response.json();
                if (data.length === 0) {
                    setPagos([]); // Limpia la tabla si no hay pagos
                    setMensaje('No se encontraron pagos para este usuario.');
                } else {
                    setPagos(data); // Actualiza la lista de pagos con los datos obtenidos
                    setMensaje(''); // Limpia cualquier mensaje previo
                }
            } catch (err) {
                    setMensaje('EL USUARIO NO REGISTRA PAGOS');
                setPagos([]); // Limpia la tabla si hay un error
                setMensaje('EL USUARIO NO REGISTRA PAGOS');
            }
        };

        fetchPagos();
    }, [usuario.codigo]);

    return (
        <div className='lista-pagos scroll-container'>
            {mensaje && <h2>{mensaje}</h2>}
            {pagos.length > 0 ? (
                <table className='tabla-pagos'>
                    <thead>
                        <tr>
                            <th className="adjust-to-text">MONTO</th>
                            <th className="adjust-to-text">CUENTA</th>
                            <th className="adjust-to-text">DESCRIPCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagos.map(pago => (
                            <tr key={pago.id}>
                                <td className="adjust-to-text">{pago.pago}</td>
                                <td className="adjust-to-text">{pago.cuenta}</td>
                                <td className="adjust-to-text">{pago.descripcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
        </div>
    );
}

export default ConsultarPago;