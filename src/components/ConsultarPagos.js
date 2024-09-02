import React, { useState, useEffect } from "react";
import '../styles/consultarpago.css';

function ConsultarPago({ usuario }) {
    const [pagos, setPagos] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);

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

    // Función para manejar la eliminación del último pago
    const handleEliminarUltimoPago = async () => {
        if (pagos.length === 0) {
            setMensaje('No hay pagos para eliminar.');
            return;
        }

        const ultimoPagoId = pagos[pagos.length - 1].id;

        try {
            const response = await fetch(`http://192.168.100.141:3001/pagos/${ultimoPagoId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Eliminar el último pago de la lista de pagos en el estado
                const nuevosPagos = pagos.slice(0, -1);
                setPagos(nuevosPagos);
                setBotonDeshabilitado(true);  // Deshabilita el botón después de eliminar el último pago
                setMensaje('Último pago eliminado con éxito.');
            } else {
                throw new Error('Error al eliminar el último pago.');
            }
        } catch (error) {
            console.error('Error eliminando el último pago:', error);
            setMensaje('Error al eliminar el último pago.');
        }
    };

    return (
        <div className='lista-pagos scroll-container'>
            {mensaje && <h2>{mensaje}</h2>}
            {pagos.length > 0 ? (
                <table className='tabla-pagos'>
                    <thead>
                        <tr>
                            <th className="adjust-to-text">MONTO</th>
                            <th className="adjust-to-text">CUENTA</th>
                            <th className="adjust-to-text">FECHA DE PAGO</th>
                            <th className="adjust-to-text">DESCRIPCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagos.map(pago => (
                            <tr key={pago.id}>
                                <td className="adjust-to-text">{pago.valor}</td>
                                <td className="adjust-to-text">{pago.tipoCuenta}</td>
                                <td className="adjust-to-text">{pago.fechaPago}</td>
                                <td className="adjust-to-text">{pago.descripcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
            <button 
                className="button-act-pago" 
                type="submit" 
                onClick={handleEliminarUltimoPago}
                disabled={botonDeshabilitado}>
                    ELIMINAR ÚLTIMO PAGO
            </button>
        </div>
    );
}

export default ConsultarPago;