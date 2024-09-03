import React, { useState, useEffect } from "react";
import '../styles/consultarpago.css';

function ConsultarPago({ usuario }) {
    const [pagos, setPagos] = useState([]);
    const [mensaje, setMensaje] = useState('');
    

    useEffect(() => {
        if (usuario) {
            setMensaje('');
        }
    }, [usuario]);  // Esto asegura que se actualicen los valores cuando cambia el usuario

    useEffect(() => {
        const fetchPagos = async () => {
            if (!usuario.codigo) {
                setPagos([]); // Limpia la tabla si no hay código de usuario
                setMensaje('No se ha proporcionado un código de usuario.');
                return;
            }

            try {
                const dataI = {
                    targetMethod: "GET",
                };
                const response = await fetch(`http://3.142.35.243:8762/ms-pagos/pagos/usuario/${usuario.codigo}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataI),
                });

                if (!response.ok) {
                    throw new Error('PAGOS NO ENCONTRADOS');
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
                setPagos([]); // Limpia la tabla si hay un error
                setMensaje('EL USUARIO NO REGISTRA PAGOS');
            }
        };

        fetchPagos();
    }, [usuario.codigo]);

    // Función para manejar la eliminación del último pago
    const handleEliminarUltimoPago = async () => {
        if (pagos.length === 0) {
            setMensaje('No hay pagos para eliminar.');
            return;
        }

        try {
            const dataE = {
                targetMethod: "DELETE",
            };
            const response = await fetch(`http://3.142.35.243:8762/ms-pagos/pagos/usuario/${usuario.codigo}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataE),
            });
            console.log(response);

           // Una vez eliminado, vuelve a obtener la lista de pagos actualizada
           const updatedPagos = await fetch(`http://3.142.35.243:8762/ms-pagos/pagos/usuario/${usuario.codigo}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ targetMethod: "GET" }),
            });

            const pagosData = await updatedPagos.json();
            setPagos(pagosData);
            setMensaje('Último pago cancelado con éxito.');

           
        } catch (error) {
            console.error('Error eliminando el último pago:', error);
            setMensaje('Error al eliminar el último pago.');
        }
    };

    return (
        <div className='lista-pagos scroll-container'>
            
            {pagos.length > 0 ? (
                <table className='tabla-pagos'>
                    <thead>
                        <tr>
                            <th className="adjust-to-text">MONTO</th>
                            <th className="adjust-to-text">CUENTA</th>
                            <th className="adjust-to-text">FECHA DE PAGO</th>
                            <th className="adjust-to-text">DESCRIPCION</th>
                            <th className="adjust-to-text">ESTADO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagos.map(pago => (
                            <tr key={pago.id}>
                                <td className="adjust-to-text">{pago.valor}</td>
                                <td className="adjust-to-text">{pago.tipoCuenta}</td>
                                <td className="adjust-to-text">{pago.fechaPago}</td>
                                <td className="adjust-to-text">{pago.descripcion}</td>
                                <td className="adjust-to-text">{pago.estado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
            <button 
                className="button-act-pago" 
                type="submit" 
                onClick={handleEliminarUltimoPago}
                >
                    ELIMINAR ÚLTIMO PAGO
            </button>
            {mensaje && <h2>{mensaje}</h2>}
        </div>
    );
}

export default ConsultarPago;