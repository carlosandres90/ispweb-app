import React, { useEffect, useState } from 'react';
import '../styles/listausuarios.css';

const ListaUsuarios =  ({ cliente }) => {
    
    const[usuarios, setUsuarios] = useState([]);
    
    


    useEffect(() => {
        const fetchUsuarios = async () => {
            if (!cliente.cedula) {
                setUsuarios([]); // Si no hay cédula, limpia la tabla
                return;
            }
            try {
                const data1 = {
                    targetMethod: "GET",
                };
                const response = await fetch(`/api/usuarios/cliente/${cliente.cedula}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data1), // Envía la cédula en el cuerpo de la solicitud
                });

                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }

                const data = await response.json();
                setUsuarios(data); // Actualiza la lista de usuarios con los datos obtenidos
            } catch (err) {
                

            } finally {
                
                
            }
        };

        fetchUsuarios();
    }, [cliente.cedula]); // Ejecuta la búsqueda cada vez que la cédula cambie


    

  return (
    <div className='lista-clientes scroll-container'>
      <table className = 'tabla-usuarios'>
            <thead>
                <tr>
                    <th className="adjust-to-text">CÓDIGO USUARIO</th>
                    <th className="adjust-to-text">PLAN</th>
                    <th className="adjust-to-text">PRECIO</th>
                    <th className="adjust-to-text">DIRECCIÓN</th>
                    <th className="adjust-to-text">ESTADO</th>
                </tr>
            </thead>
            <tbody>
            {usuarios.map(usuario => (
                <tr key={usuario.id} >
                    <td className="adjust-to-text">{usuario.codigo}</td>
                    <td className="adjust-to-text">{usuario.anchoBanda}</td>
                    <td className="adjust-to-text">{usuario.precio}</td>
                    <td>{usuario.direccion}</td>
                    <td className="adjust-to-text">{usuario.estado}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
};

export default ListaUsuarios;