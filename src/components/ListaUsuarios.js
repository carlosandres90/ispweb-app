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
                const response = await fetch(`http://3.142.35.243:8762/ms-usuarios/usuarios/cliente/${cliente.cedula}`, {
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
                console.log('Error al buscar los usuarios. Inténtalo de nuevo.')

            } finally {
                
                
            }
        };

        fetchUsuarios();
    }, [cliente.cedula]); // Ejecuta la búsqueda cada vez que la cédula cambie


    

  return (
    <div class='lista-clientes scroll-container'>
      <table class = 'tabla-usuarios'>
            <thead>
                <tr>
                    <th class="adjust-to-text">CÓDIGO USUARIO</th>
                    <th class="adjust-to-text">PLAN</th>
                    <th class="adjust-to-text">PRECIO</th>
                    <th class="adjust-to-text">DIRECCIÓN</th>
                    <th class="adjust-to-text">ESTADO</th>
                </tr>
            </thead>
            <tbody>
            {usuarios.map(usuario => (
                <tr key={usuario.id} >
                    <td class="adjust-to-text">{usuario.codigo}</td>
                    <td class="adjust-to-text">{usuario.anchoBanda}</td>
                    <td class="adjust-to-text">{usuario.precio}</td>
                    <td>{usuario.direccion}</td>
                    <td class="adjust-to-text">{usuario.estado}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
};

export default ListaUsuarios;